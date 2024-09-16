import { Button } from "@/components";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen pt-10 flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-[hsl(197,100%,18%)] px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="fas fa-exclamation-triangle fa-5x text-8xl text-[#00B8FF]" />
          </div>
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
            <p className="ttext-xl mb-10">
              The page you are looking for does not exist.
            </p>
            <Button link="/" text="Back Home" />
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};
export default NotFoundPage;
