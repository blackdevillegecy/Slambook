import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import CSE from "../comps/jsons/CSE.json";
import { stud } from "../pages/CSE_Slider/[student]";
import { useRouter } from "next/router";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Details = (props) => {
  const router = useRouter();
  const stud = router.query.student;

  

  return (
    <>
      <Container style={{ backgroundColor: "rgb(174, 229, 248)" }}>
        <Profile>
          <Arrow
            onClick={() => {
              if (Number(stud) > 1) {
                router.push(`/${props.branchName}_Slider/${(Number(stud) - 1).toString()}`);
              }
            }}
          >
            ⋖
          </Arrow>
          <Image src={props.image} alt="" />
          <Arrow
            onClick={() => {
              if (Number(stud) < 31) {
                router.push(`/${props.branchName}_Slider/${(Number(stud) + 1).toString()}`);
              }
            }}
          >
            ⋗
          </Arrow>

          <Name>
            <h3>{props.name}</h3>
            <h5>{props.branch}</h5>
          </Name>
        </Profile>
        <Comment>
          <div>
            <Input placeholder="Type your comment here" />
            <StyledPopup trigger={<Button type="submit">▶</Button>} position="top center">
              <div style={{display:"flex", justifyContent:"space-around"}}>
              <button>Public</button>
              <button>Private</button>
              </div>
            </StyledPopup>
          </div>
        </Comment>
        <Branch>
          <h4 style={{ direction: "ltr" }}>{props.branchName}</h4>
          {props.json.filter((query) => stud !== query.id).map((cse) => {
            
            return (
              <>
                <div
                  style={{ direction: "ltr" }}
                  onClick={() => router.push(`/${props.branchName}_Slider/${cse.id}`)}
                  key={cse.id}
                >
                  <div>
                    <SmallIMg src={cse.image} alt="" />
                    {cse.name}
                  </div>
                </div>
              </>
            );
          })}
        </Branch>
      </Container>
    </>
  );
};

export default Details;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 82vh;
  padding-top: 30px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
const Profile = styled.div`
  width: 20%;
  margin-left: 10px;

`;
const Image = styled.img`
  min-height: 200px;
  max-width: 200px;
  
`;
const Arrow = styled.button`
  background: transparent;
  border: none;
  font-size: 50px;
`;
const Name = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 25px;
  margin-right: 10px;
  h3 {
    color: blue;
    font-size: 1.7vw;
  }
  h5{
    color: white;
  }
`;
const Branch = styled.div`
  display: inline-block;
  direction: ltr;
  background-color: peachpuff;
  width: 30%;
  max-width: 300px;
  height: 510px;
  overflow-x: hidden;
  overflow-y: auto;
  direction: rtl;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #4682b4;
    border-radius: 17px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 17px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: #555; */
  }
`;
const SmallIMg = styled.img`
  width: 100%;
  max-width: 50px;
  border-radius: 100px;
  margin-bottom: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px 100px;
  width: 45%;
  justify-content: flex-end;
  
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  padding: 5px 0px;
  margin: 0;
  max-width: 600px;

  border-radius: 10px;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 2vw;
  padding: 0px;
  margin: 0;
`;

const StyledPopup = styled(Popup)`
button{
  margin: 20px;
}
`