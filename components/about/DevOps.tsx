import React from "react";
import { SiKubernetes, SiOpenstack, SiVagrant, SiPuppet } from "react-icons/si";
import { FaDocker, FaGitAlt, FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";

function DevOps() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaGitAlt className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Version Control</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaDocker className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Docker</p>
      </GlareCard>
    </div>
  );
}

export default DevOps;
