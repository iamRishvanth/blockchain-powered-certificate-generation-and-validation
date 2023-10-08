import { TextareaForm1 } from "@/components/organizer-dashboard/issue";
import { TextareaForm2 } from "@/components/organizer-dashboard/issue";
import React from "react";

const OrganizerDashboard = () => {
  return (
    <div className="">
      <div className="border-t border-gray-200 my-4 flex mr-20 ml-20 mt-80"></div>
      <div className="mr-5 ml-5 flex space-x-10 mt-20">
        <TextareaForm1 />
        <TextareaForm2 />
      </div>
    </div>
  );
};

export default OrganizerDashboard;
