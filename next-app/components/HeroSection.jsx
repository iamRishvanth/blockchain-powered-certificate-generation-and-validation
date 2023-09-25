import React from "react";
import { useRouter } from "next/router"; // Import useRouter from next/router

const HeroSection = () => {
  const router = useRouter(); // Create a router object

  // Function to handle the redirection
  const redirectToOrganizerPage = () => {
    // Redirect to the organizer page (you should replace '/organizer' with the actual route)
    router.push("/organizer");
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Certificate validation
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            impedit culpa facilis unde sed doloribus laborum autem vitae sunt?
            Odio nemo tempore cupiditate odit veniam voluptates quas nisi, est
            earum!
          </p>
          <div className="flex justify-center">
            <button
              onClick={redirectToOrganizerPage} // Attach the function to onClick
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Continue as Organizer
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Continue as user
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
