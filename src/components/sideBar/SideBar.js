import { Link, useNavigate } from "react-router-dom";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useSelector, useDispatch } from "react-redux";
import { sidebarAction } from "../../store/reducers/sidebarSlice";
import { searchAction } from "../../store/reducers/searchSlice";
import logo from "../../assets/icon/logo-light.svg";
import { ResourcesData } from "../../fakeData/ResourcesData";
import { CategoriesData } from "../../fakeData/CategoriesData";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
const SideBar = () => {
  const open = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = (value) => {
    navigate("/search?Category=" + value)
    const category =
      value.includes("--") === true 
        ? value.split("--").join(" ")
        : value.split("-").join(" ");
      
   dispatch(searchAction({ value: category, path: "Category" }));
   dispatch(sidebarAction(false))
  };
  return (
    <Drawer
      size={"xs"}
      placement="left"
      open={open}
      onClose={() => dispatch(sidebarAction(false))}
    >
      <div className="drawer-mask"></div>
      <div className="flex flex-col w-full h-full bg-white cursor-pointer scrollbar-hide">
        <div className="w-full flex justify-between items-center h-16 px-6 py-4 bg-emerald-500 text-white border-b border-gray-100">
          <h2 className="font-semibold  text-lg m-0 text-heading flex items-center">
            <Link className="mr-10" to="/">
              <span
                style={{
                  boxSizing: " border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <img className="h-9 w-24" src={logo} />
              </span>
            </Link>
          </h2>
          <button
            onClick={() => dispatch(sidebarAction(false))}
            className="flex text-xl items-center justify-center w-8 h-8 rounded-full bg-gray-50 text-red-500 p-2 focus:outline-none transition-opacity hover:text-red-600"
          >
            <svg
              className="group-hover:text-red-400"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
            </svg>
          </button>
        </div>
        <div className="overflow-y-scroll scrollbar-hide w-full max-h-full">
          <h2 className="font-semibold  text-lg m-0 text-heading flex align-center border-b px-8 py-3">
            All Categories
          </h2>
          <div className="relative grid gap-2 p-6">
            {CategoriesData.map((category, index) => (
             <div key={index}>
                <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className="p-2 flex items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600"
                  
                    >
                      <span
                        style={{
                          boxSizing: " border-box",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          position: "relative",
                          maxWidth: "100%",
                        }}
                      >
                        <img className="h-4 w-4" src={category.icon} />
                      </span>
                      <div className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full hover:text-emerald-600">
                        {category.name}
                      </div>
                      <ChevronRightIcon
                        className={`${
                          open ? "rotate-90 transform" : ""
                        } h-6 w-6 transition duration-700 ease-in-out inline-flex loading-none items-end text-gray-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <ul className="pl-6 pb-3 pt-1 -mt-1">
                        {category.subCategories.map((subCategory, index) => (
                          <li key={index}>
                            <Link
                          onClick={() =>handleClick(subCategory.path)}
                              to={"/search?Category="+subCategory.path}
                              className="flex items-center  py-1 text-sm !text-gray-600 !no-underline hover:!text-emerald-600 hover:!no-underline cursor-pointer"
                            >
                              <span className="text-xs text-gray-500 pr-1">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 512 512"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill="none"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    strokeWidth="32"
                                    d="M400 256H112"
                                  ></path>
                                </svg>
                              </span>
                              {subCategory.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
             </div>
             
            ))}
          </div>

          <div className="relative grid gap-2 mt-5">
            <h3 className="font-semibold  text-lg m-0 text-heading flex align-center border-b px-8 py-3">
              Pages
            </h3>
            <div className="relative grid gap-1 p-6">
              {ResourcesData.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => dispatch(sidebarAction(false))}
                  className="p-2 flex !text-black items-center rounded-md !no-underline hover:!bg-gray-50 w-full hover:!no-underline hover:!text-emerald-600 "
                >
                  <item.icon
                    className="flex-shrink-0 h-4 w-4 "
                    aria-hidden="true"
                  />
                  <p className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
