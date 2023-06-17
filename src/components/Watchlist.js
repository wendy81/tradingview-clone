import React from "react";
import { auth } from "../utils/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Alert, Card } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const Watchlist = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="flex item-center justify-center">
      {!user && (
        <Alert
          color="failure"
          icon={HiInformationCircle}
          className="m-5 w-11/12 m-auto max-w-screen-xl"
        >
          <span>
            <p>
              <span className="font-medium">Info alert!</span>
              You have to login to see/create your watchlist
            </p>
          </span>
        </Alert>
      )}

      {user && (
        <Card className="w-full max-w-screen-xl m-auto my-5">
        <div className="flex justify-end px-4 pt-4">
          
        </div>
        <div className="flex flex-col items-center pb-10">
            <img src={user.photoURL} className="h-24 mb-3 rounded-full shadow-lg"></img>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.displayName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.email}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              href="#"
            >
              <p>
                Add friend
              </p>
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              href="#"
            >
              <p>
                Message
              </p>
            </a>
          </div>
        </div>
      </Card>
      )}
    </div>
  );
};

export default Watchlist;
