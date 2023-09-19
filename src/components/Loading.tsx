import React from "react";
import { Skeleton } from "./ui/skeleton";

const Loading = () => {
  return (
    <div className="flex items-center justify-center px-20 h-screen">
      <Skeleton className="h-[500px] w-full mt-20" />
    </div>
  );
};

export default Loading;
