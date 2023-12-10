"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/Types";
import { updateSearchParams } from "@/utils";
import CustomBotton from "./CustomBotton";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomBotton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white p-6"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
