import React from "react";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiWeb3Dotjs, SiExpress } from "react-icons/si";
import { FaHtml5,FaCss3, FaReact, FaServer } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GlareCard } from "../ui/glare-card";
import { SiPolygon, SiEthers } from "react-icons/si";
function Frameworks() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaHtml5 className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">HTML</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaCss3 className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">CSS</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaReact className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">React.js</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaServer className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Rest API</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiWeb3Dotjs className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Web3.js</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiNextjsFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nextjs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiNodejs className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nodejs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiExpress className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Express</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiTailwindCssFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Tailwind</p>
      </GlareCard>
    </div>
  );
}

export default Frameworks;
