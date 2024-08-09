import React from "react";
import { Card, Skeleton, CardFooter } from "@nextui-org/react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card isFooterBlurred className="w-full h-[300px]" key={index}>
            <Skeleton className="w-full h-full object-cover" />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 gap-2">
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col">
                  <Skeleton width="70%" height={24} />
                  <Skeleton width="40%" height={16} />
                </div>
                <div className="flex flex-row items-center gap-2 justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <Skeleton width={40} height={40} />
                    <div className="flex flex-col">
                      <Skeleton width="60%" height={16} />
                      <Skeleton width="40%" height={16} />
                    </div>
                  </div>
                  <Skeleton width={75} height={36} />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
