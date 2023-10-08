/* eslint-disable react/no-unescaped-entities */
"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { useState } from "react";
import { PaperEmbeddedWalletSdk } from "@paperxyz/embedded-wallet-service-sdk";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function OrganizerLogin() {
  const sdk = new PaperEmbeddedWalletSdk({
    clientId: "68e67b45-b311-4411-a79f-bb527ff4fe10",
    chain: "Mumbai",
  });

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [accepted, setAccepted] = useState(true);

  const test1 = async () => {
    const user = await sdk.getUser();
    console.log("UU:", user);
  };

  const createAcc = async (event: any) => {
    event.preventDefault();
    console.log(name);
    console.log(type);
    if (!email || !name || !type || !accepted) {
      toast.error("Please fill out all the fields.");
      return;
    }

    const res = await sdk.auth.loginWithPaperEmailOtp({ email });
    console.log("RES:", res);

    // if(res ==
    //   "Logged In, Wallet Initialized") {
    //     redirect('/organizer')
    //   }
  };

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleTypeChange = (e: any) => {
    setType(e.target.value);
  };

  const handleAcceptanceChange = (e: any) => {
    setAccepted(e.target.checked);
  };

  const logOut = async () => {
    const res = await sdk.auth.logout();
    console.log("RES:", res);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full md:w-[350px]">
        <CardHeader>
          <div className="text-center">
            <CardTitle>Organizer - Registration</CardTitle>
            <CardDescription className="mt-2"></CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={createAcc}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="name">
                  Organization Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name of your organization"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="email">
                  Organization E-mail
                </Label>
                <Input
                  id="email"
                  placeholder="E-mail of your organization"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="mb-2" htmlFor="type">
                  Organization Type
                </Label>

                <select
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="type"
                  name="type"
                  value={type}
                  onChange={handleTypeChange}
                >
                  <option>Select</option>
                  <option value="College">College</option>
                  <option value="School">School</option>
                  <option value="Office">Office</option>
                </select>
              </div>
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" onChange={handleAcceptanceChange} />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
              <Button type="submit" variant={"premium"}>
                Register
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Already have an account?</p>
          <Link href={"/organizer-login"}>
            <Button>Login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
