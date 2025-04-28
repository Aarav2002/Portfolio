import React from "react";

import { SiMysql, SiMongodb, SiSequelize,SiPostgresql,SiSupabase } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";
import { SiIpfs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
function Databases() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <SiMysql className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">MySQL</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiPostgresql className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Postgre SQL</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiMongodb className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">MongoDB</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiSupabase className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Supabase</p>
      </GlareCard>
    </div>
  );
}

export default Databases;
