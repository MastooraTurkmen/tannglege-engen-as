"use client";
import { Button } from "@/components";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="bg-[hsl(197,100%,18%)] min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl"></FaExclamationTriangle>
          </div>
          <div className="text-center text-white">
            <h1 className="lg:text-3xl font-bold mt-4 mb-2">
              Something went wrong!
            </h1>
            <h2 className="lg:text-2xl font-bold my-2 text-red-500">
              {error.message}
            </h2>
            <p className="lg:text-xl my-5">Shall we try again? ...</p>
            <button onClick={() => reset()} className="font-bold py-4 px-6 btn">
              Try again
            </button>
            <p className="text-white lg:text-xl my-5">Or back to home...</p>
            <Button link="/" text="Go Home" />
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};
export default ErrorPage;
