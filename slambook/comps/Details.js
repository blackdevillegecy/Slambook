import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { stud } from "../pages/CSE_Slider/[student]";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Details = (props) => {
  const router = useRouter();
  const stud = router.query.student;
  const [BranchArrow, setBranchArrow] = useState(false)
  const [width, setWidth] = React.useState(0);
	  React.useEffect(() => {
	    setWidth(window.outerWidth);
	  });

  return (
    <>
    
      <Container style={{ backgroundColor: "rgb(174, 229, 248)" }}>
        <Profile>
          
          {props.prop
            .filter((query) => stud == query.roll.toString())
            .map((cse) => {
              return (
                <div style={{height:"50%"}}>
          <Image key={cse.roll} src={cse.image_url} alt="" />
          </div>
)})}
          <Name>
          {props.prop
            .filter((query) => stud == query.roll.toString())
            .map((cse) => {
              return (
                <>
            <h3 key={cse.roll}>{cse.name}</h3>
            <h5>{cse.branch}</h5>
            </>
            )})}
          </Name>
        </Profile>
        <Comment>
          <Form>
            <Input placeholder="Type your comment here" />
            <StyledPopup
              trigger={
                <Button type="submit">
                  <SendIcon />
                </Button>
              }
              position="top center"
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button
                  style={{
                    border: "0",
                    borderRadius: "4px",
                    padding: "2px 5px",
                    background: "transparent",
                  }}
                >
                  Public
                </button>
                <button
                  style={{
                    border: "0",
                    borderRadius: "4px",
                    padding: "2px 5px",
                    background: "transparent",
                  }}
                >
                  Private
                </button>
              </div>
            </StyledPopup>
          </Form>
        </Comment>
        <BB onClick={()=>setBranchArrow(x => (!x))}><ArrowBackIosNewIcon/></BB>
        {(BranchArrow||width>780)&&<Branch>
        
          <h4 style={{ direction: "ltr", textAlign: "center" }}>
            {props.branchName}
          </h4>
          {props.prop
            .filter((query) => stud !== query.roll.toString())
            .map((cse) => {
              return (
                <>
                  <div key={cse.roll}
                    style={{ direction: "ltr", borderTop: "1px solid black" }}
                    onClick={() =>
                      router.push(`/${props.prop[0].branch}_Slider/${cse.roll.toString()}`)
                    }
                  >
                    <div style={{ display: "flex" }}>
                      <SmallIMg src={cse.image_url} alt="" />
                      <div
                        style={{ margin: "3.5vh 0 0 1vw ", cursor: "pointer" }}
                      >
                        {cse.name}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </Branch>}
      </Container>
    </>
  );
};

export default Details;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0px;
  height: 82vh;
  padding-top: 30px;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
const Profile = styled.div`
  width: 25%;
  @media (max-width: 770px) {
    display: flex;
    max-height: 100px;
   width: 55%;
   margin-left: 20px;
  }
`;
const Image = styled.img`
  min-height: 5vw;
  object-fit: cover;
  max-width: 27vw;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  @media (max-width: 770px) {
    border-radius: 300px;
    min-height: 11vw;
    max-width: 11vw;
  }
  @media (max-width: 650px) {
    border-radius: 300px;
    min-height: 15vw;
    max-width: 15vw;
  }
  @media (max-width: 500px) {
    border-radius: 300px;
    min-height: 20vw;
    max-width: 20vw;
  }
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
  h5 {
    color: white;
    font-size: 1.5vw;
  }
  @media (max-width: 770px) {
    margin: auto 35px;
    h3 {
      color: blue;
      font-size: 3.2vw;
    }
    h5 {
      color: white;
      font-size: 2.6vw;
    }
    @media (max-width: 500px) {
      margin: auto 35px;
      h3 {
        color: blue;
        font-size: 4vw;
        margin-bottom: 3px;
      }
      h5 {
        color: white;
        font-size: 4vw;
      }
    }
  }
`;
const BB = styled.button`
display: none;
z-index: 10;
border: none;
font-size: 25px;
font-weight: 900;
position: absolute;
top: 50%;
right: 0;
background: transparent;
@media (max-width: 770px) {
    display: block;
  }
`
const Branch = styled.div`
  display: inline-block;
  direction: ltr;
  background-color: peachpuff;
  width: 30%;
  max-width: 22vw;
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
  @media (max-width: 950px) {
    position: absolute;
    right: 0;

    min-height: 720px;
    min-width: 270px;
  }
  @media (max-width: 770px) {
    position: absolute;
    right: 0;
    max-height: 490px;
    min-height: 0px;
    top: 30%;
    min-width: 220px;
  }
  @media (max-width: 470px) {
    position: absolute;
    right: 0;
    top: 25%;
    max-height: 400px;
    min-height: 0px;
    min-width: 220px;
    font-size: .8rem;
  }
`;
const SmallIMg = styled.img`
  width: 100%;
  max-width: 50px;
  aspect-ratio: 1/1;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-left: 2vw;
  margin-top: 2vh;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px 30px;
  width: 45%;
  justify-content: flex-end;
  @media (max-width: 770px) {
    width: 100%;
  }
`;
const Form = styled.div`
  border: 3px solid black;
  width: 90%;
  /* height: ; */
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  width: 100%;
  flex: 1;
  padding: 0px 0px;
  margin: 0;
  max-width: 44vw;
  padding-left: 0.5vw;
  border: none;
  border-radius: 10px;
  margin-bottom: 0px;
  // border: 1px solid red;
  &:focus {
    outline-width: 0px;
  }
`;
const Button = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5vw;
  padding: 0px;
  margin-right: 5px;
`;

const StyledPopup = styled(Popup)`
  button {
    margin: 20px;
  }
`;
