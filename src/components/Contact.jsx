import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <div className=" md:flex  items-center  justify-between  m-auto md:w-4/5 w-11/12">
        <div className="  flex-col  items-start   ">
          <span className=" text-orange-700 font-semibold   text-xl ">
            Our Contacts
          </span>{" "}
          <br />
          <span className="  space-y-6 font-bold text-xl text-slate-900">
            Easy To Contact Us
          </span>
          <br />
          <span
            style={{
              fontSize: "0.9rem",
              color: "rgb(140 139 139",
              width: "15rem",
            }}
          >
            {" "}
            We always ready to help by providing the best services. We beleive a
            good place to live can make your life better
          </span>{" "}
          <div className=" md:flex-col  items-start  mt-8 gap-4">
            <div className="md:flex items-start gap-6">
              <div
                className=" flex-col items-center  w-64 p-4 border border-solid  rounded gap-4  hover:scale-110   hover:shadow-2xl"
                style={{ transition: "all 300ms ease-in" }}
              >
                <div className=" flex items-start w-full gap-6">
                  <div className=" flex items-center  p-1  bg-slate-300 rounded">
                    <MdCall size={25} />
                  </div>
                  <div
                    className="flex-col items-start"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",

                      width: "15rem",
                    }}
                  >
                    <span>Call</span> <br />
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className=" flex items-center  bg-blue-200   font-semibold  hover:cursor-pointer  px-3 py-1 rounded w-full pl-16  text-blue-900 hover:scale-90  hover:bg-blue-700 hover:text-white">
                  {" "}
                  Call Now
                </div>
              </div>
              <div
                className=" flex-col items-center  w-64 p-4 border border-solid  rounded gap-4  hover:scale-110   hover:shadow-2xl"
                style={{ transition: "all 300ms ease-in" }}
              >
                <div className=" flex items-start w-full gap-6">
                  <div className=" flex items-center  p-1  bg-slate-300 rounded">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div
                    className="flex-col items-start"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",

                      width: "15rem",
                    }}
                  >
                    <span>Chat</span> <br />
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className=" flex items-center  bg-blue-200   font-semibold  hover:cursor-pointer  px-3 py-1 rounded w-full pl-16  text-blue-900 hover:scale-90  hover:bg-blue-700 hover:text-white">
                  {" "}
                  Chat Now
                </div>
              </div>
            </div>
            <div className="md:flex items-start gap-6">
              <div
                className=" flex-col items-center  w-64 p-4 border border-solid  rounded gap-4  hover:scale-110   hover:shadow-2xl"
                style={{ transition: "all 300ms ease-in" }}
              >
                <div className=" flex items-start w-full gap-6">
                  <div className=" flex items-center  p-1  bg-slate-300 rounded">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div
                    className="flex-col items-start"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",

                      width: "15rem",
                    }}
                  >
                    <span>Video</span> <br />
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className=" flex items-center  bg-blue-200   font-semibold  hover:cursor-pointer  px-3 py-1 rounded w-full pl-16  text-blue-900 hover:scale-90  hover:bg-blue-700 hover:text-white">
                  {" "}
                  Video Now
                </div>
              </div>
              <div
                className=" flex-col items-center  w-64 p-4 border border-solid  rounded gap-4  hover:scale-110   hover:shadow-2xl"
                style={{ transition: "all 300ms ease-in" }}
              >
                <div className=" flex items-start w-full gap-6">
                  <div className=" flex items-center  p-1  bg-slate-300 rounded">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div
                    className="flex-col items-start"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",

                      width: "15rem",
                    }}
                  >
                    <span>Message</span> <br />
                    <span>021 123 145 14</span>
                  </div>
                </div>
                <div className=" flex items-center  bg-blue-200   font-semibold  hover:cursor-pointer  px-3 py-1 rounded w-full pl-16  text-blue-900 hover:scale-90  hover:bg-blue-700 hover:text-white">
                  {" "}
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            style={{
              overflow: "hidden",
              borderRadius: "15rem 15rem 0 0",
              border: "solid 5px  rgba(255,255,255,0.12) ",
              width: "25rem",
              height: "30rem",
            }}
            src="./contact.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Contact;
