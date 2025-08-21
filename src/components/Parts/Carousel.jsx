import React from "react";
import imageOne from "../../assets/carouselImages/imageOne.jpg";
import imageTwo from "../../assets/carouselImages/imageTwo.jpg";
import imageThree from "../../assets/carouselImages/imageThree.jpg";
import imageFour from "../../assets/carouselImages/imageFour.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-full h-[500px] md:h-[500px] lg:h-[500px]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div
          className="w-full h-[600px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative "
          style={{ backgroundImage: `url(${imageOne})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute left-20 top-20 text-white max-w-lg">
            <p
              className="text-black font-normal
 mb-4 tracking-widest"
            >
              WOMEN BESTSELLER SITE
            </p>
            <h1 className="mb-6 text-6xl text-black font-bold">
              NEW COLLECTION <br /> <span className="ml-6">- NEW DESIGN</span>
            </h1>
            <button className="px-6 py-2 bg-white text-black border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="w-full h-[600px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative "
          style={{ backgroundImage: `url(${imageTwo})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute left-20 top-20 text-white max-w-lg">
            <p
              className="text-black font-normal
 mb-4 tracking-widest"
            >
              WOMEN BESTSELLER SITE
            </p>
            <h1 className="mb-6 text-6xl text-black font-bold">
              NEW COLLECTION <br /> <span className="ml-6">- NEW DESIGN</span>
            </h1>
            <button className="px-6 py-2 bg-white text-black border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="w-full h-[600px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative "
          style={{ backgroundImage: `url(${imageThree})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute left-20 top-20 text-white max-w-lg">
            <p
              className="text-black font-normal
 mb-4 tracking-widest"
            >
              WOMEN BESTSELLER SITE
            </p>
            <h1 className="mb-6 text-6xl text-black font-bold">
              NEW COLLECTION <br /> <span className="ml-6">- NEW DESIGN</span>
            </h1>
            <button className="px-6 py-2 bg-white text-black border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full">
        <div
          className="w-full h-[600px] md:h-[500px] lg:h-[600px] bg-cover bg-center relative "
          style={{ backgroundImage: `url(${imageFour})` }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text content */}
          <div className="absolute left-20 top-20 text-white max-w-lg">
            <p
              className="text-black font-normal
 mb-4 tracking-widest"
            >
              WOMEN BESTSELLER SITE
            </p>
            <h1 className="mb-6 text-6xl text-black font-bold">
              NEW COLLECTION <br /> <span className="ml-6">- NEW DESIGN</span>
            </h1>
            <button className="px-6 py-2 bg-white text-black border-2 border-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
