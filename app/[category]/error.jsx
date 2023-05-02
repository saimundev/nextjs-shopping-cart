"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <h2 className="text-center text-red-500 text-xl font-medium mt-10 mb-4">Something went wrong!</h2>
      <button onClick={() => reset()} className="bg-red-500 px-6 py-2 text-white font-semibold rounded">Try again</button>
    </div>
  );
}
