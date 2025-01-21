import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { TiSocialTwitter,TiSocialInstagram,TiSocialFacebookCircular  } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const SocialIcons = [
    { icon: <TiSocialInstagram className=" icon relative z-10" />, link: "https://www.twitter.com" },
    { icon: <TiSocialFacebookCircular className=" icon relative z-10" />, link: "https://www.twitter.com" },
    { icon: <TiSocialTwitter className=" icon relative z-10" />, link: "https://www.twitter.com" },
    { icon: <IoMdMail className=" icon relative z-10" />, link: "https://www.twitter.com" },
  ];

  return (
    <div className="w-full relative">
      <footer className="flex flex-col gap-6 bg-gray-900 text-white font-bold p-[5%] relative">
        <div className="ft_cont grid grid-cols-[1.5fr,1fr,1fr,1fr] py-[3%] gap-6">
          <div className="flex flex-col  gap-4">
            <div className="logo flex gap-2 items-center">
              <BiSolidUpArrow className="text-[2rem] text-red-500 " />
              <h1 className="text-2xl">Alishaimpex</h1>
            </div>
            <div className="sin">
              <h2 className="text-transparent text-[4rem]">since 1980.</h2>
            </div>
            <span className="mt-8">
              2025<span className="text-red-500 cursor-pointer">Alishaimpex.</span> All Rights
              reserved.
            </span>
          </div>
          <div className="footer_card">
            <div className="child ">
              <span className="text-[1.5rem]">Faisalabad</span>
              <p className="font-light text-gray-200 text-base">
                523 Sylvan Ave, 5th Floor <br /> Mountain View, CA 94041USA
              </p>
            </div>
            <div className="child ">
              <span className="text-[1.5rem]">Socail links</span>
              <div className="social_links flex">
                
                  {SocialIcons.map((value, index) => {
                    return (
                      <a
                        className="s_link border border-red-500 p-2 text-[1.5rem]  relative overflow-hidden"
                        key={index}
                        href={value.link}
                      >
                        {value.icon}
                        <span className="footer_animation"></span>
                      </a>
                    );
                  })}
                

                {/* <Link href={"https://www.facebook.com"} className='s_link relative p-2 border-red-500 border '><TiSocialFacebookCircular className='icon text-[1.5rem]'/><span className="footer_animation"></span></Link>
                <Link href={"https://www.facebook.com"} className='s_link relative p-3 border-red-500 border '><SlSocialInstagram className='icon text-[1rem] '/><span className="footer_animation"></span></Link>
                <Link href={"https://www.facebook.com"} className='s_link relative p-2 border-red-500 border '><TiSocialTwitter className='icon text-[1.5rem] '/><span className="footer_animation"></span></Link>
                <Link href={"https://www.facebook.com"} className='s_link relative p-3 border-red-500 border '><IoMdMail className='icon text-[1rem]' /><span className="footer_animation"></span></Link> */}
              </div>
            </div>
          </div>
          <div className="footer_card">
            <div className="child ">
              <span className="text-[1.5rem]">Faisalabad</span>
              <ul className="list none px-2">
                <li className="text-red-500 font-light text-lg hover:text-gray-200 cursor-pointer transition-all">
                  +1934719 8948
                </li>
                <li className="text-red-500 font-light text-lg hover:text-gray-200 cursor-pointer transition-all">
                  +1934719 8948
                </li>
              </ul>
            </div>
            <div className="child">
              <span className="text-[1.5rem]">Email</span>
              <Link href={"/"} className="font-light">
                <span className="text-red-500">support@alishaimpex.com</span>
              </Link>
            </div>
          </div>
          <div className="child">
            <span className="text-[1.5rem]">Main Menu</span>
            <div className="nav_links flex flex-col font-light gap-1">
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/"}>
                Home
              </Link>
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/Services"}>
                Services
              </Link>
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/About"}>
                About us
              </Link>
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/Blogs"}>
                Blogs
              </Link>
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/Contact"}>
                Contact us
              </Link>
              <Link className="hover:text-red-500 hover:pl-4 transition-all duration-200" href={"/Privacypolicy"}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full" />
        <span className="self-center">
          2025 <span className="text-red-500 cursor-pointer">Alishaimpex.</span> All Rights
          reserved.{" "}
        </span>
      </footer>
    </div>
  );
};

export default Footer;