import React, { Component } from "react";
import Slider from "react-slick";
import PhotoCard from "../../comps/PhotoCard";
import CSE from "../../comps/jsons/CSE.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Slide() {
  const router = useRouter();

  const settings = {
    dots: true,
    className: "centre",
    autoplay: true,
    infinite: true,
    speed: 1500,
    rows: 2,
    slidesPerRow: 5,
    arrows: true,
  };
  return (
    <div style={{ padding: "150px 170px", background: "lightskyblue" }}>
      <Slider {...settings}>
        {CSE.slice(0)
          .reverse()
          .map((cse) => {
            return (
              <div onClick={() => router.push(`/Slide/${cse.id}`)} key={cse.id}>
                <PhotoCard {...cse} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default Slide;
