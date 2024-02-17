import { data } from "autoprefixer";
import { Accordion } from "react-accessible-accordion";
import { AccordionItem } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion";
import { AccordionItemButton } from "react-accessible-accordion";
import { AccordionItemPanel } from "react-accessible-accordion";
import { AccordionItemState } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDownward } from "react-icons/md";
import Accordian from "../utils/Accordian";
import { useState } from "react";
const Value = () => {
  return (
    <section className=" mt-5" id="value">
      <div className=" md:flex   items-center   p-1.5  justify-between  m-auto md:w-4/5  w-50">
        <div className=" ">
          <div className=" flex  items-center justify-between  flex-1">
            <img
              className=" "
              style={{
                overflow: "hidden",
                borderRadius: "15rem 15rem 0 0",
                border: "solid 5px  rgba(255,255,255,0.12) ",
                width: "25rem",
                height: "30rem",
              }}
              src="./value.png"
              alt=""
            />
          </div>
        </div>
        <div className=" gap-2 w-1/2">
          <span className=" text-orange-700 font-semibold   text-xl">
            Our Value
          </span>{" "}
          <br />
          <span className=" font-bold text-xl text-slate-900">
            Value We Give To You
          </span>{" "}
          <br />
          <span
            style={{
              fontSize: "0.9rem",
              color: "rgb(140 139 139",
              width: "15rem",
            }}
          >
            {" "}
            We Always Ready To Provide You Best Services
          </span>{" "}
          <br />
          <span
            style={{
              fontSize: "0.9rem",
              color: "rgb(140 139 139",
              width: "15rem",
            }}
          >
            We Believe, Best Place To Live Makes Your Life Happy
          </span>
          <Accordion
            className=" mt-8 border-none"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {Accordian.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={` bg-white border-2   w-96  md:w-auto  border-solid overflow-hidden  mb-5 border-red-100  ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flex   size-6items-center bg-white p-4  w-full justify-between">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("shadow-2xl ")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className=" cursor-pointer p-2 bg-slate-150 border-r-4">
                        {item.icon}
                      </div>
                      <span className="font-bold text-xl text-slate-900   ">
                        {item.heading}
                      </span>
                      <div>
                        <MdOutlineArrowDownward size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "rgb(140 139 139",
                        width: "15rem",
                      }}
                    >
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
export default Value;
