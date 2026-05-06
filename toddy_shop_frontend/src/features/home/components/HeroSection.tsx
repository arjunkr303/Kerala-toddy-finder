"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[85vh] flex items-center text-white overflow-hidden py-20 px-8">
      {/* Kerala background image */}
      <Image
        src="/kerala-hero.png"
        alt="Kerala backwaters at golden hour"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-[#003e1c]/30 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-3xl flex flex-col justify-center mt-12">
          <div className="inline-flex bg-white text-stone-800 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest w-fit mb-8 shadow-sm">
            KERALA&apos;S BEST
          </div>
          
          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(48px,6vw,84px)] leading-[1.05] mb-6 font-semibold text-white drop-shadow-md">
            Discover Authentic <br />
            Toddy Shops Across <span className="text-[#a5dff0] drop-shadow-none">Kerala.</span>
          </h1>
          
          <h2 className="text-[22px] md:text-[26px] font-bold mb-5 font-malayalam drop-shadow-md text-[#ffb148] leading-snug">
            കേരളത്തിലെ മികച്ച കള്ളുഷാപ്പുകൾ <br/> കണ്ടെത്താം എളുപ്പത്തിൽ.
          </h2>
          
          <p className="text-white/90 mb-10 text-[17px] max-w-[480px] leading-relaxed drop-shadow-sm font-medium">
            Find the best toddy shops near you — <br/> verified, rated, and loved by the community.
          </p>

          {/* Simple Search Bar */}
          <div className="bg-white rounded-[14px] p-[6px] shadow-2xl flex items-center w-full max-w-md text-stone-800 border-[3px] border-white/20 backdrop-blur-sm bg-clip-padding">
            <span className="material-symbols-outlined text-stone-400 ml-4 mr-3 text-[22px]">search</span>
            <input
              className="flex-1 border-none focus:ring-0 p-0 text-[15px] font-medium placeholder-stone-400 bg-transparent outline-none py-[14px]"
              placeholder="Search for shop, places..."
              type="text"
            />
            <button className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-[10px] flex items-center justify-center transition-all cursor-pointer shadow-md">
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10">
        <button className="bg-white text-stone-800 px-4 py-2 rounded-lg font-bold text-[13px] flex items-center gap-2 shadow-lg hover:bg-stone-50 transition-colors">
          <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
          Search Area
        </button>
      </div>
    </section>
  );
}
