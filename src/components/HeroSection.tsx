import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Loader2 } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BackgroundBeams } from "./ui/Background-beams";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";
import { SiYoutubemusic } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 2xl:flex-row gap-2 lg:gap-8 w-full min-h-screen  pt-16 lg:pt-0 relative">
      <BackgroundBeams className="z-0" />
      <div className="flex w-full h-full items-end justify-center 2xl:items-center 2xl:justify-end lg:items-center lg:justify-end">
        <Avatar className=" 2xl:h-[500px] 2xl:w-[500px] lg:h-96 lg:w-96 h-72 w-72 shadow-lg shadow-slate-900/50 ">
          <AvatarImage src="/AVATAR.webp" alt="avatar" />
          <AvatarFallback className="bg-[#FFC100]">
            <Loader2 className="w-[50%] h-[50%] animate-spin opacity-30 text-slate-500" />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col w-full h-full py-8 lg:justify-center ">
        <div className="flex flex-row 2xl:text-6xl lg:text-5xl text-5xl font-bold">
          Hi, I am{" "}
          <span className=" px-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500">
            Jalal
          </span>
          <svg width="1em" height="1em" viewBox="0 0 128 128">
            <path
              fill="#fac036"
              d="M98.66 32.68c-4.62-8.6-7.22-13.43-12.79-20.46c-5.56-7.03-12.14-14.07-19.5-7.78c-3.72 3.17-2.6 8.21.17 13.22c-.47-.31.43 2.16-.01 1.83c-8.35-6.37-10.13-5.67-13.01-3.39c-6.84 5.41 4.96 16.47 8.81 22.4c.66 1.02 3.07 1.97 3.64 2.91c.39.64.76 1.26 1.11 1.86c-.43-.13-.87-.26-1.32-.39c-4.04-1.13-13.32-2.35-17.54-.76C22.04 52 23.36 56.31 25.37 61.97c2.01 5.66 9.35 9.84 21.35 2.38c14.81-6.12 27.11 2.08 27.11 10.6c0 11.7-3.83 18.31-13.88 18.31c-15.89 0-16.74-12.96-25.23-21.45c-2.29-2.29-7.79-2.96-11.04-.61c-7.58 5.49-2.68 16.88-.79 20.69c3.96 7.97 8.84 19.53 21.69 29.95c6.76 5.48 23.53 4.64 33.23 2.66c18.44-3.76 22.15-16.01 28.07-36.98c2.23-7.89 2.53-14.24 2.53-23.05s-5.45-23.78-9.75-31.79"
            />
            <path
              fill="#e48c15"
              d="M98.3 60.49c-1.18-5.04-10.83-12.92-14.85-15.52c-.41-2.2-6.34-15.14-10.18-20.25c-2.13-2.84-6.07-6.68-7.46-8.44c0 0 .34 1.39-.65 2.19c.38.46 6.15 7.73 8.55 13.13s4.39 11.24 4.39 11.24c-2.61-.87-12.93-4.33-15.78-4.34c0 0 1 .9.98 2.56c-.02 1.55-2.17.73-.98 1.08c7.62 2.21 18.26 4.85 24.82 11.13c2.59 2.49 6.42 7.22 8.22 10.33c1.3 2.22 3.26-1.74 2.94-3.11"
            />
          </svg>
        </div>
        <h1 className="text-xl 2xl:text-3xl lg:text-2xl font-semibold">
          Fullstack web developer
        </h1>
        <div className="flex flex-col w-full pl-2 2xl:pl-4 lg:pl-4 gap-2 text-lg  mt-2">
          <div className="flex flex-row 2xl:gap-6 lg:gap-6 gap-2 items-center">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 14 14"
              role="img"
              focusable="false"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ff9800"
                  d="M13 5.2V4h-3V1H8.8v3H7.6V1H6.4v3H5.2V1H4v3H1v1.2h3v1.2H1v1.2h3v1.2H1V10h3v3h1.2v-3h1.2v3h1.2v-3h1.2v3H10v-3h3V8.8h-3V7.6h3V6.4h-3V5.2h3z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M2.2 3.4v7.2c0 .66.54 1.2 1.2 1.2h7.2c.66 0 1.2-.54 1.2-1.2V3.4c0-.66-.54-1.2-1.2-1.2H3.4c-.66 0-1.2.54-1.2 1.2z"
                ></path>
                <path
                  fill="#37474f"
                  d="M9.1 9.1H4.9c-.33 0-.6-.27-.6-.6v-3c0-.33.27-.6.6-.6h4.2c.33 0 .6.27.6.6v3c0 .33-.27.6-.6.6z"
                ></path>
              </g>
            </svg>

            <h3>Tech lover</h3>
          </div>
          <div className="flex flex-row 2xl:gap-6 lg:gap-6 gap-2 items-center">
            <svg
              viewBox="0 0 1024 1024"
              width="40px"
              height="40px"
              fill="#000000"
            >
              <g></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M732.1 399.3C534.6 356 696.5 82.1 425.9 104.8s-527.2 645.8-46.8 791.7 728-415 353-497.2z"
                  fill="#464BD8"
                ></path>
                <path
                  d="M695.5 779.5c-5.7 0-11.3-0.8-16.9-2.3l-402-112.4c-16.1-4.5-29.4-15-37.6-29.5a62 62 0 0 1-5.7-47.5l65-232.6a62.64 62.64 0 0 1 60.1-45.4c5.7 0 11.3 0.8 16.9 2.3L508 349.2c0.3 0.1 0.6 0.1 1 0.1 1.2 0 2.3-0.6 2.9-1.6l21.3-31.5c7.5-11.1 20-17.7 33.4-17.7 3.7 0 7.4 0.5 11 1.5L695 332.9a40.03 40.03 0 0 1 29.5 36.8l1.9 37.6c0.1 1.6 1.1 2.9 2.6 3.3l48.2 13.5c16.1 4.5 29.4 15 37.6 29.5a62 62 0 0 1 5.7 47.5l-65 232.6c-7.4 27-32.1 45.8-60 45.8z"
                  fill="#FFFFFF"
                ></path>
                <path
                  d="M566.5 306c3 0 6 0.4 9 1.3L693 340.1a32.87 32.87 0 0 1 24.1 30l1.9 37.7a11 11 0 0 0 8 10.1l48.2 13.5a55.03 55.03 0 0 1 38.2 67.8l-65.1 232.6a55.06 55.06 0 0 1-53 40.2c-4.9 0-9.9-0.7-14.9-2l-402-112.4a55.03 55.03 0 0 1-38.2-67.8l65.1-232.6c6.9-24.2 28.9-40 52.9-40 4.9 0 9.9 0.7 14.9 2l132.7 37.1c1 0.3 2 0.4 3 0.4 3.6 0 7.1-1.8 9.1-4.9l21.3-31.4c6.3-9.2 16.5-14.4 27.3-14.4m0-14.9c-15.9 0-30.6 7.8-39.5 21l-19.7 29.2L377.4 305c-6.2-1.7-12.5-2.6-18.9-2.6a70.4 70.4 0 0 0-41.8 13.9c-12.4 9.2-21.2 22-25.5 36.9v0.1l-65.1 232.6c-10.4 37.1 11.4 75.8 48.5 86.2l402 112.4c6.2 1.7 12.5 2.6 18.9 2.6 31.2 0 58.9-21 67.3-51.1l65-232.6c5-18 2.8-36.9-6.4-53.1-9.2-16.3-24.1-28-42.1-33l-45.5-12.7-1.8-34.9a47.6 47.6 0 0 0-35-43.6l-117.5-32.9a39.3 39.3 0 0 0-13-2.1z"
                  fill="#151B28"
                ></path>
                <path
                  d="M686 365.2c2.9 0.8 4.9 3.3 5 6.3l1.9 37.6c0.4 16.2 11.3 30.2 26.9 34.6l48.2 13.5a28.98 28.98 0 0 1 20.1 35.7l-65 232.6c-4.6 15-20.4 23.6-35.5 19.3l-402-112.4a28.98 28.98 0 0 1-20.1-35.7l65.1-232.6a28.87 28.87 0 0 1 35.6-19.8l132.7 37.1c15.6 4.3 32.2-2 40.9-15.6l21-30.7c1.6-2.5 4.7-3.6 7.5-2.8L686 365.2"
                  fill="#2AEFC8"
                ></path>
                <path
                  d="M597.6 454.5c56.2 15.7 89 74 73.3 130.2-15.7 56.2-74 89-130.2 73.3-56.2-15.7-89-74-73.3-130.2 15.9-56.1 74-88.8 130.2-73.3m7-25.1c-70.1-19.6-142.8 21.3-162.3 91.4-19.6 70.1 21.3 142.8 91.4 162.3 70.1 19.6 142.8-21.3 162.3-91.4 19.5-70-21.4-142.6-91.4-162.3z m0 0"
                  fill=""
                ></path>
                <path
                  d="M580.1 513.2a50.39 50.39 0 0 1-27 97.1 50.44 50.44 0 0 1-35.2-61.9 50.5 50.5 0 0 1 62.2-35.2"
                  fill="#514DDF"
                ></path>
                <path
                  d="M568.1 635.9c-28.9 0-55.7-15.6-70-41.4a79.69 79.69 0 0 1 7.6-88.8c20.4-25.4 53.8-36 85-26.8 42 12.3 66.5 56.6 54.6 98.7-8.9 31.4-35.5 54-67.9 57.8-3.1 0.3-6.2 0.5-9.3 0.5z m0-136c-16.7 0-32.7 7.5-43.5 21a55.6 55.6 0 0 0-5.3 61.9c11 19.9 32.7 31.1 55.3 28.5a55.45 55.45 0 0 0 47.3-40.3c8.3-29.4-8.8-60.2-38-68.8-5.2-1.6-10.5-2.3-15.8-2.3zM441.2 310.6L391 296.5c-6.9-1.9-11-9.1-9-16.1 1.9-6.9 9.1-11 16.1-9l50.2 14.1c6.9 1.9 11 9.1 9 16.1-1.9 6.9-9.1 10.9-16.1 9z m0 0M413.5 409.8l-50.2-14.1c-6.9-1.9-11-9.1-9-16.1 1.9-6.9 9.1-11 16.1-9.1l50.2 14.1c6.9 1.9 11 9.1 9 16.1-2 7-9.2 11.1-16.1 9.1z m0 0"
                  fill=""
                ></path>
              </g>
            </svg>
            <h3>Content creator</h3>
          </div>
          <div className="flex flex-row 2xl:gap-6 lg:gap-6 gap-2 items-center">
            <svg viewBox="0 0 64 64" width="40px" height="40px" fill="#000000">
              <g></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                {" "}
                <path
                  d="m18.68 10.74a26.63 26.63 0 0 1 11.25-3.53c4.25-.21 8.15.79 13.56 3.38s8.4 5.06 10.69 9.31 3.53 7.38 2.28 12.91-1.63 11.09-3.85 14.93-5.93 6.5-11.43 7.88-13.32 2.28-20.07-1.44-11.5-9.25-13.25-16.9-.31-11.63 1-15.22a23.64 23.64 0 0 1 9.82-11.32z"
                  fill="#1d1d1b"
                ></path>{" "}
                <path
                  d="m20.55 11.31a22.85 22.85 0 0 1 7.69-2.6c4-.47 10.47 1.32 11.15 1.63s1.25.5 1 .69-2.53 2.18-3.34 2.31-3.62-.56-5.75-.47-3.56.5-4.59.5-2.5-1.13-3.5-1.22-3.13-.59-2.66-.84z"
                  fill="#4eae4d"
                ></path>{" "}
                <path
                  d="m18.58 12.87a5.82 5.82 0 0 1 4.16.34c1.62.88 1.44 1.25 3.65 1.22s3.29-.4 3.94-.25 3.41 1.35 5.85.88a10.42 10.42 0 0 0 4.28-1.75c.72-.47 1.15-1.25 1.59-1.19s4.41 2.41 4.34 2.66a4.52 4.52 0 0 1 -1.71 1.5 7.43 7.43 0 0 0 -2.79 3.46c-.5 1.47-.78 5.88-.12 6.32s2.34-.19 3 .31.81 2.06 1.91 2.19 1.56-.69 2.56 0 1 1.21 2.56 1.25 3-.32 3.09 0a2.47 2.47 0 0 1 -.12 1.43c-.16.1-5.44.72-6.69.79s-1 .34-1.69 0-1.78-1.63-3.39-1.88-6.53-.56-7.5-.56-1.25 0-1.35.47.1 5.18-.4 6.72-.16 4.06 1.65 4.78 3.69 1.09 3.94 1.75 1.13 5 1.91 6.47 1.87 3.15 1.5 3.46a20.31 20.31 0 0 1 -6 1.54 23.64 23.64 0 0 1 -5.78 0s-1.16-6-1.47-6.54a4.67 4.67 0 0 1 -.41-2.34c.13-.41 2.34-4.87 2.06-6s-.72-2.28-1.75-2.56-2.75 0-5.53 0a27.84 27.84 0 0 1 -5.34-.44c-.56-.12-.88 0-1.13-.28s-2.28-4-2-4.34 3.13-1.16 3.25-1.82-.06-2.25.66-2.31 3.87.38 4.87-.15 1.13-1.75 1.16-2.82-.37-3.4-.84-3.84-5-1.81-6.72-2.72-3.17-1.62-2.98-2.22a12.45 12.45 0 0 1 3.78-3.53z"
                  fill="#85bfe9"
                ></path>{" "}
                <path
                  d="m20.49 15c.54-.07.59.35.4.72s0 1.72.6 1.69a55.56 55.56 0 0 1 6.4-1.06 26.38 26.38 0 0 1 8 1.65c.75.41 1.1 2 1.16 2.47a29.44 29.44 0 0 1 -2.75 5.53c-.28.15-3.19-1-5.28-2s-3-1.47-3.09-1.88a6.23 6.23 0 0 0 -.5-1.69c-.19-.09-3-.28-4.35-1.09s-2.56-2.13-2.31-2.69a4.18 4.18 0 0 1 1.72-1.65z"
                  fill="#1d1d1b"
                ></path>{" "}
                <path
                  d="m24.36 17.87a20.8 20.8 0 0 1 7.25.31c3.19.63 3.69 1.16 3.6 1.94s-1.28 4-1.72 3.84a41.78 41.78 0 0 1 -5.31-2.18c-.22-.32-.29-1.88-1.22-2.16s-2.88-.88-3.53-1.13-.5-.5-.35-.5 1.28-.12 1.28-.12z"
                  fill="#4eae4d"
                ></path>{" "}
                <path
                  d="m47.58 15.21c.21-.07 2.94 1.07 4.81 4.63s2.47 7.94 2.25 8.34-.9.44-1.53.25-3.11-1.56-3.65-1.56-1.41.47-1.78 0-1.5-1.87-2.63-1.87-1.37.19-1.56-.06-.81-5.53.37-6.5 2.22-1.59 2.69-2 .75-1.13 1.03-1.23z"
                  fill="#4eae4d"
                ></path>{" "}
                <path
                  d="m35.71 31c.36 0 5.72-.4 6.78.63s1.94 2.15 2.84 2.12 9.19-.75 9.19-.43-.94 7.5-2.38 11.15a15.91 15.91 0 0 1 -5.53 7.06c-1.15.66-2.34.91-2.43.72a21.82 21.82 0 0 1 -2.29-5.93c-.68-3.22-.87-4.72-1.93-5s-3.69-.9-4.19-1.53a4 4 0 0 1 -.56-1.87s.28-3.88.28-4.72.03-2.2.22-2.2z"
                  fill="#4eae4d"
                ></path>{" "}
                <path
                  d="m17.43 38.21a12.74 12.74 0 0 0 4.84.91c3.31.06 6.56-.31 6.91.09s.28 1.78-.44 3.1a21.38 21.38 0 0 0 -1.19 2.59 26.16 26.16 0 0 0 -3.16-2.5.59.59 0 0 0 -.34.69c.13.28 3 2.22 3.13 2.47a9.75 9.75 0 0 1 -.1 1.75 25.76 25.76 0 0 0 -3-2.38c-.37-.06-.62.85-.5 1s3.53 2.5 4 2.91a6.06 6.06 0 0 1 .84 2.53c-.09 0-3.9-3.09-4.12-3.13s-.28 1-.28 1 4.5 3.19 4.65 3.44a6.49 6.49 0 0 1 .44 1.88 32.57 32.57 0 0 1 -3.59-.91c-1.25-.47-2.35-.72-2.35-.81s-1.17-3.78-2.81-5.38a12.91 12.91 0 0 1 -2.36-2.65 31.09 31.09 0 0 1 -.35-3.72c-.04-.85-.41-2.88-.22-2.88z"
                  fill="#4eae4d"
                ></path>{" "}
                <path
                  d="m10.52 38.4c.19-.37 2.56.25 3.69.69s1.5 1 1.53 1.87-.13 4.66.65 5.35a10.71 10.71 0 0 1 3.07 3.28 7.26 7.26 0 0 1 1 2.19 20.15 20.15 0 0 1 -5.91-5.5c-3.19-4.13-4.12-7.69-4.03-7.88z"
                  fill="#85bfe9"
                ></path>{" "}
                <path
                  d="m9.61 36.18a17.66 17.66 0 0 1 -.12-9.65c1.37-5.69 4-8.72 4.22-8.69s5.4 3 7.5 4 2.22 1 2.37 1.44a10.13 10.13 0 0 1 -.19 3.34c-.18.09-3.93-.09-5 0s-1.39 1.59-1.31 2.19.13.87-.12 1.06-3.6 1.09-3.78 2 2.37 5.37 2 5.5-4.57-.16-5.57-1.19z"
                  fill="#4eae4d"
                ></path>{" "}
                <g fill="#1d1d1b">
                  {" "}
                  <path d="m11.36 25.18a19.09 19.09 0 0 1 1.16-3.65c.5-.75.72-.91.94-.85s.84.35.78.53-1.13 2.25-1.41 3.16 0 .91-.4 1-.94.03-1.07-.19z"></path>{" "}
                  <path d="m40 15.59c.16-.14 2.53-.72 2.69-.5s.34.44.18.56a11.75 11.75 0 0 1 -2.62.94c-.2-.1-.45-.85-.25-1z"></path>{" "}
                  <path d="m38.46 22.93c.15.16 1.47 2.28 1.31 2.47s0 .47-.34.31a6.24 6.24 0 0 1 -1.54-2.22c.11-.25.57-.56.57-.56z"></path>{" "}
                  <path d="m37 24.37a12.18 12.18 0 0 1 1.72 2.09c0 .19 0 .47-.31.38a8.07 8.07 0 0 1 -1.86-1.84c0-.16.45-.66.45-.63z"></path>{" "}
                  <path d="m49.33 19.65a7.18 7.18 0 0 1 2.5 1.22c0 .19.1.69-.15.59s-2.54-1-2.63-1.12.25-.66.28-.69z"></path>{" "}
                  <path d="m49.11 22c.08-.11 4 2.18 4 2.53s.35.59-.06.53a30.17 30.17 0 0 1 -4.25-2.16c-.12-.19.2-.75.31-.9z"></path>{" "}
                  <path d="m48.74 24a25.43 25.43 0 0 1 4.84 2.62c.06.28.28.59-.12.56a40.58 40.58 0 0 1 -4.94-2.37c-.09-.13.09-.75.22-.81z"></path>{" "}
                  <path d="m49.68 35.53a13.17 13.17 0 0 1 2.9 2.78c-.09.25 0 .37-.28.28a22.37 22.37 0 0 1 -3.12-2.72c.06-.16.34-.28.5-.34z"></path>{" "}
                  <path d="m48.11 37.43a28.41 28.41 0 0 1 3.35 3.16c0 .25-.13.47-.25.44a41.72 41.72 0 0 1 -3.44-3 4.75 4.75 0 0 1 .34-.6z"></path>{" "}
                  <path d="m47.11 39.46a23.35 23.35 0 0 1 3.35 3.32c-.07.25.06.4-.25.37a39.21 39.21 0 0 1 -3.53-3.15 3.19 3.19 0 0 1 .43-.54z"></path>{" "}
                  <path d="m46.33 41.12a29.14 29.14 0 0 1 3.41 3.28c0 .25-.1.41-.22.31a43.92 43.92 0 0 1 -3.84-3.09.84.84 0 0 1 .65-.5z"></path>{" "}
                  <path d="m45.71 44.12a16 16 0 0 1 3.06 2.72c0 .22-.16.37-.25.34a33.63 33.63 0 0 1 -3.19-2.5c-.03-.19.31-.53.38-.56z"></path>{" "}
                  <path d="m45 45.93c.17 0 3.25 2.69 3 2.94s-.12.37-.37.28a22.27 22.27 0 0 1 -3.13-2.69c.11-.15.33-.53.5-.53z"></path>{" "}
                  <path d="m35.18 43.43c.09-.14 1.31.31 1.28.6s0 .34-.16.34a5 5 0 0 1 -1.53-.44c0-.12.34-.4.41-.5z"></path>{" "}
                  <path d="m33.14 47.28a1.46 1.46 0 0 1 1.16 0c.47.22 1.16 1 1.78 1.1s1.1-.28 1.25-.19a.37.37 0 0 1 .16.47c-.1.16-.16.31-.41.37a2 2 0 0 1 -1.5-.15c-.58-.39-.94-.88-1.58-.88s-.57.12-.69 0-.42-.51-.17-.72z"></path>{" "}
                  <path d="m26 40.15c.25.16 2.06 1.75 2 2s-.19.5-.38.44a10.1 10.1 0 0 1 -2.15-1.82c-.01-.24.53-.62.53-.62z"></path>{" "}
                  <path d="m24.21 30.43c.12 0 2.81 4.19 2.59 4.41s-.34.44-.47.31a44.75 44.75 0 0 1 -2.84-4.34 1.31 1.31 0 0 1 .72-.38z"></path>{" "}
                  <path d="m25.24 30c0-.12.59-.38.78-.19a12 12 0 0 1 1.37 2.72c-.09.18 0 .47-.25.28a17.6 17.6 0 0 1 -1.9-2.81z"></path>{" "}
                  <path d="m30.74 29.71c.08-.11 1-1 1.28-1s1 0 .91.22-1.41 1.91-1.66 1.75a1.66 1.66 0 0 1 -.53-.97z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <h3>Live in Morocco</h3>
          </div>
          <div className="flex flex-row 2xl:gap-6 lg:gap-6 gap-2 items-center ">
            <svg width="45px" height="45px" viewBox="0 0 1024 1024">
              <path
                d="M262.8 139.5l497.4-2.5v219.2s59.7 25.8 66.9 30.5c21.6 14.3 53.6 20 53.6 92.3v323.7c0 41.2-33.4 74.5-74.5 74.5H216.4c-41.2 0-74.5-33.4-74.5-74.5V497c0-5.4 0.6-15.2 0-27-1.3-25.8 3.7-51.1 29.7-70.2 15.1-11.1 34.5-18.5 51-25.9 22.4-10.1 40.2-17.9 40.2-17.9V139.5z"
                fill="#FFFFFF"
              />
              <path
                d="M262.8 399.8l-38.7 17.3-0.4 0.2c-16.2 6.4-26.4 12.4-32.6 18.5l71.8 38.8v-74.8zM797.8 416.7L760.2 400v74.4l70.6-38.2c-6.5-5.6-16.9-11.5-33-19.5z"
                fill="#E6E6E6"
              />
              <path
                d="M252.6 753.6V560.7c0-5.5-4.5-10-10-10s-10 4.5-10 10v192.9c0 19.5 15.9 35.4 35.4 35.4h298.8c5.5 0 10-4.5 10-10s-4.5-10-10-10H267.9c-8.4-0.1-15.3-7-15.3-15.4z"
                fill="#06F3FF"
              />
              <path
                d="M302.8 368.6zM878 437.7c0 0.2 0.1 0.3 0.1 0.4 0-0.1-0.1-0.3-0.1-0.4zM607.2 475.5c15.4-8.5 27.6-20.2 35.1-33.4 2.4-2.2 3.8-5.1 4-8.3 0.3-0.8 0.7-1.7 1-2.5h-1c-0.2-6.8-5.9-12.2-12.8-12.2-6.6 0-12.1 5-12.7 11.6h-0.2c-9.9 12.4-23 21.1-39.2 27.3-16.2 6.2-35.6 10.2-58.2 10.2-23.4 0-42.8-4.6-61-12-17.9-7.2-33-19.9-43.2-36.2-10-16.1-15-33.3-15-53 0-20.2 5.1-39.6 14.1-58.3 8.7-18.3 22.8-33.4 40.4-43.4 17.8-10.3 38.2-15.6 63.7-15.6 30.1 0 53.6 7.9 70.4 23.3 16.8 15.4 21.8 34.6 21.8 57.5 0 12.8-1.6 25.1-7.5 37-5.9 11.9-11.7 18.4-21.3 25.5-7.1 5.4-23.1 11.7-27.7 11.7-1.5 0-2.8-0.6-3.9-1.8-1.1-1.1-1.6-2.9-1.6-5.2 0.3-4.3 1-8.6 2-12.9l21-80.3c1-1.8 1.8-3.7 1.8-5.9l-0.1-0.6 0.1-0.4h-0.1v-0.1c0-6.7-5.6-12.2-12.4-12.2-3.3 0-6.4 1.2-8.8 3.5-2.3 2.3-3.7 5.4-3.7 8.7l0.1 1.1c0 0.8 0.3 1.5 0.5 2.2l-1.3 4.7c-8-12.7-26.8-20.5-43.7-20.5-14.3 0-35.7 9.9-50.3 32.2-10.8 17.1-17 36.7-17.8 56.8-0.6 17.7 4.7 33.4 15 44 10.3 10.6 23 13.7 30.9 13.7 14.5 0 27.4-5.3 38.5-15.9 1.1 4.8 3.9 9 7.9 11.8 3.9 2.7 9.8 4.1 17.7 4.1 29.1 0 55.9-15.2 70.7-35.6 12.7-17.3 19.8-40.6 19.8-64.3 0-19.9-3.2-38.3-13-55.1-9.8-16.8-22.4-29.8-40.9-38.9-18.5-9.1-39.6-13.7-63.4-13.7-28 0-53 5.7-74.8 17-21.8 11.3-39 28.3-51.5 50.8-12.6 22.6-18.9 46.9-18.9 73.1-0.2 23.1 5.5 45.8 16.6 66.1 11.2 20.9 29 37.4 50.6 47.2 22.7 10.4 49.5 15.6 80.7 15.6 32 0 59.3-6.1 81.6-18.4zM530 368.6c-3.7 10.9-8 19.2-13 24.9-3.5 4-7.1 6.9-10.6 8.8-4.7 2.6-8.2 4.6-13.6 4.6-7.2 0-16.3-2.8-21.1-8.4-4.9-5.6-7.3-14.3-7.3-26.1 0-8.8 4.6-19 8.1-30.4 3.5-11.4 8.7-17.2 15.6-23.4 6.9-6.2 13.2-7.9 21.3-7.9 7.6 0 15.6 2.2 20.5 7.8 5 5.6 8.1 10 8.1 20.5 0.1 9.3-4.4 18.7-8 29.6z"
                fill="#005BFF"
              />
              <path
                d="M878.1 438.1c0-0.2-0.1-0.3-0.1-0.4-8.7-30.2-37.2-44.3-62.8-57l-0.4-0.2-54.6-24.4V137l-497.4 2.5V356l-54.2 24.2c-31.1 12.3-66.7 32.3-66.7 77.5v345.1c0 41 33.4 74.4 74.4 74.4h590c41 0 74.4-33.4 74.4-74.4V457.7c0-7.2-0.9-13.7-2.6-19.6zM760.2 400l37.6 16.8c16.2 8 26.5 13.9 33 19.4l-70.6 38.2V400z m-457.4-31.4V179.3l417.4-2.1V496l-199 107.7c-6.1 3.3-13.5 3.3-19.6 0L302.8 496.2V368.6z m-40 31.2v74.8L191 435.7c6.2-6.1 71.8-35.9 71.8-35.9z m577.9 403c0 19-15.4 34.4-34.4 34.4h-590c-19 0-34.4-15.4-34.4-34.4V476.3L482.4 639c9 4.9 18.9 7.3 28.9 7.3 9.9 0 19.8-2.4 28.9-7.3l300.5-162.7v326.5z"
                fill="#005BFF"
              />
            </svg>
            <h3 className="-translate-x-1">contact.jalalhitech@gmail.com</h3>
          </div>
        </div>
        <div className="z-50 grid grid-cols-4 2xl:flex 2xl:flex-row lg:flex lg:flex-row w-full gap-4 2xl:gap-8 lg:gap-6 mt-6 2xl:pl-4 lg:pl-4">
          <div className="flex items-center justify-center">
            <Link href="https://www.youtube.com/jalalhitech" target="_blank">
              <SiYoutubemusic className="w-12 h-12 hover:text-orange-500 transition-all duration-500 ease-in-out" />
            </Link>
          </div>
          <div className="flex  items-center justify-center">
            <Link href="https://github.com/jalalDev7" target="_blank">
              <FaGithub className="w-12 h-12 hover:text-orange-500 transition-all duration-500 ease-in-out" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link href="https://www.instagram.com/jalalhitech" target="_blank">
              <FaInstagram className="w-12 h-12 hover:text-orange-500 transition-all duration-500 ease-in-out" />
            </Link>
          </div>
          <div className="flex  items-center justify-center">
            <Link href="https://www.x.com/jalalhitech" target="_blank">
              <FaTwitter className="w-12 h-12 hover:text-orange-500 transition-all duration-500 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 hidden lg:flex lg:flex-col w-full items-center justify-center z-50  ">
        <h1 className="text-sm font-semibold">Explore my work</h1>
        <IoIosArrowDown className="animate-bounce duration-700 w-[40px] h-[40px] opacity-35" />
      </div>
    </div>
  );
};

export default HeroSection;
