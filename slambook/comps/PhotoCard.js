import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const PhotoCard = (props) => {
  return (
    <Conatiner>
      <Image src={props.image_url} alt="..." />
      <Text>{props.name}</Text>
    </Conatiner>
  );
};

export default PhotoCard;

const Conatiner = styled.div`
  background-color: white;
  padding: 15px;
  padding-top: 10px;
  width: 100%;
  max-width: 220px;
  height: 250px;
  border: 2px solid grey;
  max-height: 300px;
  margin-bottom: 30px;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.62) 0px 30px 22px -10px;
    @media (max-width: 770px) {
    margin-left: 20px;
  }
  @media (max-width: 550px) {
    margin-left: 50px;
  }
  @media (max-width: 460px) {
    margin-left: 25px;
  }
    @media (max-width: 400px) {
    margin-left: 5px;
  }
  @media (max-width: 300px) {
    margin-left: 0px;
    max-width: 195px;
  }
  
`;
const Text = styled.p`

`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: contain;
  @media (max-width: 300px) {
    max-width: 165px;
  }
`;
