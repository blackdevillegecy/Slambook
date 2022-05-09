import React from "react";
import { useRouter } from "next/router";
import CSE from "../../comps/jsons/CSE.json";
import PhotoCard from "../../comps/PhotoCard";
import Details from "../../comps/Details";
import EE from "../../comps/jsons/EE.json";
import ME from "../../comps/jsons/ME.json";

const student = () => {
  const router = useRouter();
  const stud = router.query.student;

  
  return (
    <>
      {CSE
        .filter((cse) => stud === cse.id.toString())
        .map((cse) => {
          let properties = {
            ...cse,
            branchName :"CSE",
            json: ME
          }
          return (
            <div>
              <Details {...properties} />
            </div>
          );
        })}
    </>
  );
};

export default student;
