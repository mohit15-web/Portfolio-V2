// "use client";

import Image from "next/image";
import ayush from "@/public/ayush.jpg";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  contributions,
  getStatusColor,
  getStatusIcon,
  SocialLinks,
} from "@/lib/constants";
import { Experience, experience } from "@/data/experience";
import * as motion from "motion/react-client";
import Skills from "./skills/page";

export default function Home() {
  const transition = {
    duration: 0.2,
    delay: 0.4,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.main
      initial={{ filter: "blur(15px)", y: 20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={transition}
      className="opacity-0"
    >
      {/* About me Section */}
      <div className="pt-10 flex gap-10 sm:flex-row flex-col">
        <div className="flex items-center justify-center">
          <Image
            src={ayush}
            width={350}
            height={350}
            className="rounded-2xl"
            alt="Ayush"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <h1 className="text-4xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
            Hi, i&apos;m Mohit 👋
          </h1>

          <p className="">
            I’m a passionate MERN Stack developer with hands-on experience in
            building responsive and user-friendly web applications using modern
            web technologies.{" "}
          </p>
          {/* <p className="">
            I am very active on{" "}
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="font-bold underline hover:no-underline"
            >
              x/twitter
            </Link>{" "}
            where i share my learning journey and make new friends.{" "}
          </p> */}
          <div className="flex gap-3 ">
            <Link
              href={SocialLinks.github}
              target="_blank"
              className="flex items-center"
            >
              <FaGithub size={27} className="hover:scale-125 transition-all" />
            </Link>
            <Link
              href={SocialLinks.linkedin}
              target="_blank"
              className="flex items-center"
            >
              <FaLinkedin
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.instagram}
              target="_blank"
              className="flex items-center"
            >
              <FaInstagram
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
            <Link
              href={SocialLinks.x}
              target="_blank"
              className="flex items-center"
            >
              <FaXTwitter
                size={27}
                className="hover:scale-125 transition-all"
              />
            </Link>
          </div>
          <div className="bg-green-200 text-green-800 text-xs px-1 rounded-sm flex items-center gap-2 font-bold border w-fit border-green-800">
            open for work
            <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold pt-10 ">Work experience</h1>
      <div>
        {/* Experience section */}
        {experience.map((exp: Experience) => (
          <Link href={exp.link} legacyBehavior key={exp.company}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-4 border border-zinc-800 rounded-md flex flex-col gap-2 my-4 hover:scale-105 transition-all"
            >
              <div className="flex gap-3 items-center">
                <Image
                  src={exp.logo}
                  width={45}
                  height={45}
                  alt="EdSlash"
                  className="rounded-full"
                />
                <h2 className="font-bold underline hover:no-underline text-lg">
                  {exp.company}
                </h2>
              </div>
              <h3>{exp.info}</h3>
            </a>
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-bold pt-10 mb-10">Open Source</h1>
      <div>
        <div className="">
          {contributions.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-gray-800/70 hover:to-gray-900/70"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Status badge */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    item.status || "completed"
                  )}`}
                >
                  <span className="mr-1">
                    {getStatusIcon(item.status || "completed")}
                  </span>
                  {item?.status
                    ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
                    : "Completed"}
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project title */}
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300">
                {item.project}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed text-base">
                {item.description}
              </p>

              {/* Tech stack */}
              {item.tech && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600/50 hover:bg-gray-600/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
             <div className="flex items-center gap-4">
             <a
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
              >
                <svg
                  className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View Repository
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
              >
                <svg
                  className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                  Visit
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
             </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-10 ">Projects</h1>
      {/* Projects section */}
      <div className="flex flex-wrap">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            project={project}
            className=" md:w-1/2 sm:w-1/2 w-full"
            key={project.title}
          />
        ))}
        <div className="w-full flex justify-center p-4">
          <Link
            href={"/projects"}
            className="font-bold underline hover:no-underline text-lg"
          >
            Show more
          </Link>
        </div>
      </div>

      <h1 className="text-3xl font-bold pt-10 ">Skills</h1>
      {/* Skills section */}
      <div className="flex flex-wrap mt-6 flex-col items-center justify-center">
        <Skills />
      </div>
    </motion.main>
  );
}
