import React from "react";
import { MdLocationOn, MdEmail, MdMail } from "react-icons/md";
import {
  AiTwotonePhone,
  AiFillMobile,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const TextWithIcon = ({ icon, text }) => {
  return (
    <div className="flex">
      <div className="mr-2 text-lg">{icon}</div>
      <label>{text}</label>
    </div>
  );
};

export default function Footer() {
  return (
    // <footer className="mt-10 p-4 drop-shadow-[0_-5px_5px_rgba(0,0,0,0.20)] rounded-t-lg md:px-6 md:py-8 bg-black">
    <footer className="mt-10 p-4 rounded-t-lg shadow md:px-6 md:py-8 bg-gradient-to-t from-black to-[#291313] ">
      <div className="flex sm:flex-row flex-col items-start justify-between">
        <a href="/" className="flex mb-5 sm:mb-0">
          <img
            src="Edugate-new-logo.png"
            className="mr-3 h-40"
            alt="Edugate Logo"
          />
        </a>
        <div className="max-w-[20rem] flex flex-col gap-y-2 items-start text-sm text-gray-400">
          <h1 className="font-bold text-lg mb-3">Contact Us</h1>

          <TextWithIcon
            icon={<MdLocationOn />}
            text="22 Forsan towers -Laserina Tower - Maadi Ring road - Qatamya - Cairo - Egypt"
          />

          <TextWithIcon icon={<AiTwotonePhone />} text="02 223151026" />

          <TextWithIcon
            icon={<AiFillMobile />}
            text="+201000429759 / +201012690901"
          />

          <TextWithIcon
            icon={<MdMail />}
            text={
              <a
                href="mailto:info@edugate-eg.com"
                className="hover:text-slate-200"
              >
                info@edugate-eg.com
              </a>
            }
          />

          <div className="w-full mt-5 flex gap-x-4 text-xl">
            <a
              href="https://www.facebook.com/edugate.eg/"
              className="text-blue-600"
            >
              <AiFillFacebook />
            </a>

            <a
              href="https://www.linkedin.com/company/edugate-eg/"
              className="text-blue-400"
            >
              <AiFillLinkedin />
            </a>

            <a
              href="https://www.instagram.com/edugate.eg/"
              className="text-pink-500"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Edugate™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
