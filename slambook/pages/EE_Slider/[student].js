import React from "react";
import { useRouter } from "next/router";
import Details from "../../comps/Details";
import EE from "../../comps/jsons/EE.json";


const student = () => {
  const router = useRouter();
  const stud = router.query.student;

  

  return (
    <>
      {EE
        .filter((ee) => stud === ee.id.toString())
        .map((ee) => {
         let properties = {
            ...ee,
            branchName : "EE",
            json: EE
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
