"use client";

import { Slash } from "@/components/home/Slash";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-4/5 pt-6 bg-white/10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl tracking-tighter font-thin cursor-default">
            Hi!,I&apos;m
          </h1>
          <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all group text-4xl sm:text-6xl md:text-8xl tracking-tighter font-thin cursor-default">
            {/* purple box */}
            <span className="w-0 h-full bg-primary absolute left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full text-white transition-colors duration-300 ease-in-out z-10">
              Zulfi Fadilah Azhar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
