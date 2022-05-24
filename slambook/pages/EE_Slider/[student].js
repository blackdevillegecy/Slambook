import React from "react";
import { useRouter } from "next/router";
import PhotoCard from "../../comps/PhotoCard";
import Details from "../../comps/Details";


export const getStaticPaths = async () => {
  const res = await fetch("https://namam2011.pythonanywhere.com/api/users/EE");
  const data = await res.json();
  const paths = data.map((students) => {
    return {
      params: { student: students.roll.toString() },
    }})
  return{
    paths,
    fallback: false,
    }
  };
;
export const getStaticProps = async (i) => {
  const id = i.params.student;
  const res = await fetch("https://namam2011.pythonanywhere.com/api/users/EE");
  const data = await res.json();
  return {
    props: { student: data },
  };
 
};

const student = ({ student }) => {
  const router = useRouter();
  const stud = router.query.student;

  return (
    <>
    
      {student
        .filter((ee) => stud === ee.roll.toString())
        .map((ee) => {
          return (
            <div>
              <Details prop = {student} />
            </div>
          );
        })}
    </>
  );
};

export default student;
