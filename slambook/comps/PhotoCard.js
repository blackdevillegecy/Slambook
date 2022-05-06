import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import CSE from "./jsons/CSE.json";

const PhotoCard = (props) => {
  return (
    <Conatiner>
      <Image src={props.image} alt="..." />
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
  max-width: 200px;
  border: 2px solid grey;
  max-height: 300px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 40px 58px -16px,
    rgba(0, 0, 0, 0.62) 0px 30px 22px -10px;
`;
const Text = styled.p``;

const Image = styled.img`
  max-width: 198px;
  margin: 0px auto;
  max-height: 170px;
`;
