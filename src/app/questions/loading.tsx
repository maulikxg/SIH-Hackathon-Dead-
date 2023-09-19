import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center gap-2 p-10 flex-col md:flex-row">
      <>
        <Skeleton className="h-[500px] w-[200px]" />
      </>
      <>
        <Skeleton className="h-[500px] w-[200px]" />
      </>
    </div>
  );
};

export default loading;
