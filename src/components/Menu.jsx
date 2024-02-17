import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";

function App() {
  // let colors = (value) => () => {
  //////   setdata(value);
  // setshowmenu(false);
  //  };

  const [showmenu, setshowmenu] = useState(false);

  return (
    <main className="  ">
      <div
        className="  h-10  p-3  text-2xl rounded-lg text-white  mb-2    items-center gap-4 "
        onClick={() => setshowmenu(!showmenu)}
      >
        <IoMenuOutline />
      </div>
      <div>
        {showmenu && (
          <ul className="   z-10 h-30 p-2  bg-white rounded-xl ">
            <li className=" hover:bg-gray-400    text-gray-600 cursor-pointer  items-center   gap-2 px-3">
              <Link
                onClick={() => {
                  setshowmenu(false);
                }}
                to="residence"
                smooth={true}
              >
                Residence
              </Link>
            </li>

            <li className=" hover:bg-gray-400   w-28   text-gray-600 cursor-pointer  items-center  px-3 ">
              <Link
                to="value"
                onClick={() => {
                  setshowmenu(false);
                }}
                span={true}
                smooth={true}
              >
                Our Value
              </Link>
            </li>

            <li
              className=" hover:bg-gray-400  text-gray-600 cursor-pointer flex items-center gap-2 px-3 "
              onClick={() => {
                setshowmenu(false);
              }}
            >
              <Link
                to="contact"
                onClick={() => {
                  setshowmenu(false);
                }}
                span={true}
                smooth={true}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </main>
  );
}
export default App;
