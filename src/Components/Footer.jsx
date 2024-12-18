import React from "react";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

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
    <footer className="p-4 rounded-t-lg shadow md:px-6 md:py-8 bg-gradient-to-t from-black to-[#291313] ">
      <div className="flex sm:flex-row flex-col items-start justify-around">
        <a href="/" className="flex mb-5 sm:mb-0">
          <img
            src="/Edugate-new-logo.png"
            className="mr-3 h-40"
            alt="Edugate Logo"
          />
        </a>

        <div className="max-w-[20rem] lg:mb-0 mb-10 flex flex-col gap-y-2 items-start text-sm text-gray-400">
          <h1 className="font-bold text-lg mb-2">Site Map</h1>

          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Home
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Universities in Egypt
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Training
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Scholarships
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Study Abroad
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Consulting
          </a>
          <a href="/replacemelink" className="ml-5 hover:text-slate-200">
            Score Calculator
          </a>
        </div>

        <div className="max-w-[20rem] flex flex-col gap-y-2 items-start text-sm text-gray-400">
          <h1 className="font-bold text-lg mb-2">Contact Us</h1>

          <TextWithIcon
            icon={<GoLocation />}
            text={
              <a
                href="https://goo.gl/maps/fMdDjUBScWYh3t499"
                className="hover:text-slate-200"
                target="_blank"
                rel="noreferrer"
              >
                22 Forsan towers - Laserina Tower - Maadi Ring road - Qatamya -
                Cairo - Egypt
              </a>
            }
          />

          <TextWithIcon
            icon={<BsTelephone />}
            text={
              <a href="tel:02 223151026" className="hover:text-slate-200">
                02 223151026
              </a>
            }
          />

          <TextWithIcon
            icon={<BsPhone />}
            text={
              <>
                <a href="tel:+201000429759" className="hover:text-slate-200">
                  +201000429759
                </a>
                {" / "}
                <a href="tel:+201012690901" className="hover:text-slate-200">
                  +201012690901
                </a>
              </>
            }
          />

          <TextWithIcon
            icon={<HiOutlineMail />}
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
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-7 w-auto"
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt=""
              />
            </a>

            <a
              href="https://www.linkedin.com/company/edugate-eg/"
              className="text-blue-400"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png"
                alt=""
              />
            </a>

            <a
              href="https://www.instagram.com/edugate.eg/"
              className="text-pink-500"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                alt=""
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UCLfOlhOWdyhemOWbcWn0YHw"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                alt=""
              />
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
