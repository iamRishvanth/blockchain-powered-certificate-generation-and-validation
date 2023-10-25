"use client";

import { TextareaForm } from "@/components/organizer-dashboard/issue";
import React from "react";
import { getLocalStorageData } from "../organizer/page";

const OrganizerDashboard = () => {
  const { name, type, email, walletAddress, loginResult, signer } =
    getLocalStorageData();

  return (
    <div className="">
      <div className="border-t border-gray-200 my-4 flex mr-20 ml-20 mt-80"></div>
      <p>{name}</p>
      <TextareaForm />
    </div>
  );
};

export default OrganizerDashboard;
