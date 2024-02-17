import { Link } from "react-scroll";
import Menu from "./Menu";
import BasicMenu from "./Menu";

const Header = () => {
  return (
    <section className=" bg-black  text-white pt-5  ">
      <div className=" flex  items-center   text-slate-50 p-1.5  justify-between m-auto md:w-4/5 w-11/12">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="  items-center gap-8  cursor-pointer  md:flex hidden">
          <Link to="residence" span={true} smooth={true}>
            Residence
          </Link>
          <Link to="value" span={true} smooth={true}>
            Our Value
          </Link>
          <Link to="contact" span={true} smooth={true}>
            Contact Us
          </Link>

          <button
            style={{ transition: "all 300ms ease-in" }}
            className=" font-semibold bg-blue-600    hover:cursor-pointer  hover:scale-110 px-1 py-1 rounded"
          >
            <a href="">Contact</a>
          </button>
        </div>
        <div className=" md:hidden ">
          <BasicMenu />
        </div>
      </div>
    </section>
  );
};
export default Header;
