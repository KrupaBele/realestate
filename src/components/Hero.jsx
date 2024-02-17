import CountUp from "react-countup";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
// hi

const Hero = () => {
  return (
    <section className=" text-white relative pb-8 pt-12 bg-black ">
      <div className=" md:flex  items-center justify-between  m-auto md:w-4/5 w-11/12  ">
        <div className="  space-y-12">
          <div className=" relative  z-10">
            <div className=" h-12 w-12 bg-orange-600 rounded-full absolute -top-5  translate-x-20 -z-10"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className=" font-semibold   text-2xl "
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>
          <div className=" flex flex-col  justify-center items-start">
            <span style={{ fontSize: "0.9rem", color: "rgb(140 139 139" }}>
              Find a variety of property that suits you easily
            </span>
            <span style={{ fontSize: "0.9rem", color: "rgb(140 139 139" }}>
              Forget all difficulties in findind residence for you
            </span>
          </div>
          <div className="  border-none flex   bg-white rounded-md   pl-3 justify-between">
            <IoLocationSharp className="text-blue-600 text-2xl m-1" />
            <input
              type="text"
              className=" border-none outline-none text-black"
            />
            <button className=" font-semibold bg-blue-600    hover:cursor-pointer  hover:scale-110 px-1 py-1 rounded">
              {" "}
              Search
            </button>
          </div>
          <div className=" flex justify-center gap-16">
            <div className=" ">
              <span>
                <CountUp start={88000} end={9000} duration={4} />
              </span>
              <span className=" text-orange-600">+</span>
              <br />
              <span style={{ fontSize: "0.9rem", color: "rgb(140 139 139" }}>
                Premium Products
              </span>
            </div>
            <div className=" ">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
              </span>
              <span className=" text-orange-600">+</span>
              <br />
              <span style={{ fontSize: "0.9rem", color: "rgb(140 139 139" }}>
                Happy Customers
              </span>
            </div>
            <div className=" ">
              <span>
                <CountUp end={8} duration={4} />
              </span>
              <span className=" text-orange-600">+</span> <br />
              <span style={{ fontSize: "0.9rem", color: "rgb(140 139 139" }}>
                Award Winnings
              </span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="flex  items-centerjustify-between  mt-6 md:mt-auto"
        >
          <img
            style={{
              overflow: "hidden",
              borderRadius: "15rem 15rem 0 0",
              border: "solid 5px  rgba(255,255,255,0.12) ",
              width: "25rem",
              height: "30rem",
            }}
            src="./hero-image.png"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
