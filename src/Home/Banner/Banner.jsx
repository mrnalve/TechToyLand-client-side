import React from "react";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/hLShdTk/banner1.jpg"
          className="w-full h-[95vh]"
        />
        <BannerContent></BannerContent>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/drG0S7q/banner2.jpg"
          className="w-full h-[95vh]"
        />
        <BannerContent></BannerContent>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dj7V4SP/banner3.jpg"
          className="w-full h-[95vh]"
        />
        <BannerContent></BannerContent>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/BqtwMh8/banner4.jpg"
          className="w-full h-[95vh]"
        />
        <BannerContent></BannerContent>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
