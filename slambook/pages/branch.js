import Head from "next/head";
import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { stateContext } from "./_app";

const Branch = () => {
  

  const router = useRouter();

  const branchParentLink = {
    display: "flex",
    // border: '1px solid red',
    width: "fit-content",
    margin: "auto",
    transform: "translateY(60vh)",
  };

  const branchLink = {
    color: "white",
    // border: '1px solid red',
    margin: "0 10vw",
    fontSize: "50px",
    letterSpacing: "1.2px",
    fontWeight: "400",
    textShadow: "0px 3px 5px grey",
    cursor: "pointer",
  };

  return (
    <div style={{ backgroundColor: "rgb(174, 229, 248)", height: "70vh" }}>
      <Head>
        <title>Slambook | Branch</title>
      </Head>

      <div style={branchParentLink}>
        <div
          onClick={() => 
            router.push(`/CSE_Slider`)
          }
          className="branchLinks"
          style={branchLink}
        >
          CSE
        </div>
        <div
          onClick={() => 
            router.push(`/ME_Slider`)}
          className="branchLinks"
          style={branchLink}
        >
          ME
        </div>
        <div
          onClick={() => 
            router.push(`/EE_Slider`)}
          className="branchLinks"
          style={branchLink}
        >
          EE
        </div>
      </div>
    </div>
  );
};

export default Branch;
