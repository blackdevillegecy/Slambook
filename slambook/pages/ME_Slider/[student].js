import React from "react";
import { useRouter } from "next/router";

import Details from "../../comps/Details";

import ME from "../../comps/jsons/ME.json";

const student = () => {
  const router = useRouter();
  const stud = router.query.student;


  return (
    <>
      {ME
        .filter((me) => stud === me.id.toString())
        .map((me) => {
          let properties = {
            ...me,
            branchName : "ME",
            json : ME
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
