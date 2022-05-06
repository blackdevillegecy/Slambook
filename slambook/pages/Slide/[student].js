import React from "react";
import { useRouter } from "next/router";
import CSE from "../../comps/jsons/CSE.json";
import PhotoCard from "../../comps/PhotoCard";
import Details from "../../comps/Details";

const student = () => {
  const router = useRouter();
  const stud = router.query.student;

  return (
    <>
      {CSE.filter((cse) => stud === cse.id.toString()).map((cse) => {
        return (
          <div>
            <>{cse.id}</>
            <Details {...cse}/>
          </div>
        );
      })}
    </>
  );
};

export default student;

