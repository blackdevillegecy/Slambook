import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import CSE from "../comps/jsons/CSE.json";
import { stud } from "../pages/Slide/[student]";
import { useRouter } from "next/router";
import { useHistory } from 'react-router-dom'

const Details = (props) => {
  const router = useRouter();
  const stud = router.query.student;
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();

 
  
  return (
    <>
      <Container>
        <div>
        <Arrow
            onClick={() =>
              router.push(`/Slide/${(Number(stud) -1 ).toString()}`)
            }
          >
            ←
          </Arrow>
          <Image src={props.image} alt="" />
          <Arrow
            onClick={() =>
              router.push(`/Slide/${(Number(stud) + 1).toString()}`)
            }
          >
            ➝
          </Arrow>

          <Name>
            <h3>{props.name}</h3>
            <h5>{props.branch}</h5>
          </Name>
        </div>

        <Branch>
          <div>Branch</div>
          {CSE.filter((query) => stud !== query.id).map((cse) => {
            return (
              <>
              <div onClick={() => router.push(`/Slide/${cse.id}`)} key={cse.id}>
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
`;
const Image = styled.img`
  width: 100%;
  max-width: 200px;
`;
const Arrow = styled.button``;
const Name = styled.div`
  display: flex;
  flex-direction: column;
`;
const Branch = styled.div`
  position: absolute;
  right: 0;
  float: right;
  background-color: yellow;
  width: 100%;
  max-width: 300px;
  height: 510px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const SmallIMg = styled.img`
  width: 100%;
  max-width: 50px;
  border-radius: 100px;
  margin-bottom: 20px;
`;
