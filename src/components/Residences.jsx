import data from "../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Common } from "../utils/Common";

import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

const Residences = () => {
  return (
    <section id="residence">
      <div className=" items-center p-1.5   justify-between  relative m-auto md:w-4/5 w-11/12  ">
        <div className="  flex flex-col  mb-8 ">
          <span className=" text-orange-700 font-semibold   text-xl">
            Best Choices
          </span>
          <span className=" font-bold text-xl text-slate-900">
            {" "}
            Popular Residencies
          </span>
        </div>

        <Swiper {...Common}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                style={{ transition: "all 300ms ease-in" }}
                className="  flex flex-col  items-start p-4 rounded-lg w-max m-auto gap-2 hover:cursor-pointer  hover:scale-110 hover:bg-slate-300 shadow "
              >
                <img className="w-100  max-w-60" src={card.image} alt="home" />
                <span className=" size-5 font-semibold">
                  <span className=" text-orange-700">$</span>
                  <span>{card.price}</span>
                </span>
                <span className="font-bold text-xl text-slate-900   ">
                  {card.name}
                </span>
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "rgb(140 139 139",
                    width: "15rem",
                  }}
                >
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Residences;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="  space-x-1   top-0    translate-x-36 mt-6  mb-10 reletive  ">
      <button
        className=" bg-slate-300  rounded-full   px-4 py-3 text-2xl hover:bg-slate-500"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className=" bg-slate-300 shadow-lg  rounded-full text-2xl hover:bg-slate-500 px-4 py-3"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button>
    </div>
  );
};
