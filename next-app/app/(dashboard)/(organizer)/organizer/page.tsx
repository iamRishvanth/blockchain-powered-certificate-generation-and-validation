"use client";

// import { DataTableDemo } from "@/components/organizer-dashboard/organizer-table-body";
// import React from "react";

// type DashboardProps = {
//   name: string;
//   type: string;
//   email: string;
// };

// const OrganizerDashboard = ({ name, type, email }: DashboardProps) => {
//   return (
//     <div className="mt-5 mr-5 ml-5">
//       <DataTableDemo />
//       <p>{name}</p>
//     </div>
//   );
// };

// OrganizerDashboard.getInitialProps = async ({
//   query,
// }: {
//   query: { name: string; type: string; email: string };
// }) => {
//   const { name, type, email } = query;
//   return { name, type, email };
// };

// export default OrganizerDashboard;

// import React, { useEffect, useState } from "react";

// function Organizer() {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
//   const [email, setEmail] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [loginResult, setLoginResult] = useState(null);
//   const [signer, setSigner] = useState(null);

//   useEffect(() => {
//     // Retrieve data from local storage
//     const storedName = localStorage.getItem("name") || "";
//     const storedType = localStorage.getItem("type") || "";
//     const storedEmail = localStorage.getItem("email") || "";
//     const storedWalletAddress = localStorage.getItem("walletAddress") || "";

//     let storedLoginResult = null;
//     try {
//       storedLoginResult = JSON.parse(localStorage.getItem("loginResult"));
//     } catch (error) {
//       console.error("Error parsing loginResult:", error);
//     }

//     let storedSigner = null;
//     try {
//       storedSigner = JSON.parse(localStorage.getItem("signer"));
//     } catch (error) {
//       console.error("Error parsing signer:", error);
//     }

//     setName(storedName);
//     setType(storedType);
//     setEmail(storedEmail);
//     setWalletAddress(storedWalletAddress);
//     setLoginResult(storedLoginResult);
//     setSigner(storedSigner);
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to the Organizer Dashboard, {name}!</h1>
//       <p>Email: {email}</p>
//       <p>Type: {type}</p>

//       <div>
//         <h2>Wallet Address:</h2>
//         <p>{walletAddress}</p>
//       </div>

//       {loginResult && (
//         <div>
//           <h2>Login Result:</h2>
//           <pre>{JSON.stringify(loginResult, null, 2)}</pre>
//         </div>
//       )}

//       {signer && (
//         <div>
//           <h2>Signer Properties:</h2>
//           <p>DEFAULT_ETHEREUM_CHAIN_ID: {signer.DEFAULT_ETHEREUM_CHAIN_ID}</p>
//           <p>clientId: {signer.clientId}</p>
//           <p>endpoint: {signer.endpoint}</p>
//           <p>provider: {JSON.stringify(signer.provider)}</p>
//           <p>querier: {JSON.stringify(signer.querier)}</p>
//           <p>[[Prototype]]: {JSON.stringify(Object.getPrototypeOf(signer))}</p>
//           {/* You can add more properties as needed */}
//         </div>
//       )}

//       {/* Rest of your Organizer component code */}
//     </div>
//   );
// }

// export default Organizer;

import React, { useEffect, useState } from "react";

export function getLocalStorageData() {
  const name = localStorage.getItem("name") || "";
  const type = localStorage.getItem("type") || "";
  const email = localStorage.getItem("email") || "";
  const walletAddress = localStorage.getItem("walletAddress") || "";

  const loginResultStr = localStorage.getItem("loginResult");
  let loginResult = null;
  if (loginResultStr) {
    try {
      loginResult = JSON.parse(loginResultStr);
    } catch (error) {
      console.error("Error parsing loginResult:", error);
    }
  }

  const signerStr = localStorage.getItem("signer");
  let signer = null;
  if (signerStr) {
    try {
      signer = JSON.parse(signerStr);
    } catch (error) {
      console.error("Error parsing signer:", error);
    }
  }

  return { name, type, email, walletAddress, loginResult, signer };
}

function Organizer() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [loginResult, setLoginResult] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const storedName = localStorage.getItem("name") || "";
    const storedType = localStorage.getItem("type") || "";
    const storedEmail = localStorage.getItem("email") || "";
    const storedWalletAddress = localStorage.getItem("walletAddress") || "";

    let storedLoginResult = null;
    const storedLoginResultStr = localStorage.getItem("loginResult");
    if (storedLoginResultStr !== null) {
      try {
        storedLoginResult = JSON.parse(storedLoginResultStr);
      } catch (error) {
        console.error("Error parsing loginResult:", error);
      }
    }

    let storedSigner = null;
    const storedSignerStr = localStorage.getItem("signer");
    if (storedSignerStr !== null) {
      try {
        storedSigner = JSON.parse(storedSignerStr);
      } catch (error) {
        console.error("Error parsing signer:", error);
      }
    }

    setName(storedName);
    setType(storedType);
    setEmail(storedEmail);
    setWalletAddress(storedWalletAddress);
    setLoginResult(storedLoginResult);
    setSigner(storedSigner);
  }, []);

  const renderPrototypeProperties = (prototype: any) => {
    const properties = [];
    for (const key in prototype) {
      if (typeof prototype[key] === "function") {
        properties.push(
          <div key={key}>
            <p>{key}:</p>
            <pre>{prototype[key].toString()}</pre>
          </div>
        );
      }
    }
    return properties;
  };

  return (
    <div>
      <h1>Welcome to the Organizer Dashboard, {name}!</h1>
      <p>Email: {email}</p>
      <p>Type: {type}</p>

      <div>
        <h2>Wallet Address:</h2>
        <p>{walletAddress}</p>
      </div>

      {loginResult && (
        <div>
          <h2>Login Result:</h2>
          <pre>{JSON.stringify(loginResult, null, 2)}</pre>
        </div>
      )}

      {signer && (
        <div>
          <h2>Signer Prototype Properties:</h2>
          {renderPrototypeProperties(Object.getPrototypeOf(signer))}
        </div>
      )}
    </div>
  );
}

export default Organizer;
