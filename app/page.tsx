"use client";

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Услуги", href: "/projects" },
  { name: "Контакты", href: "/contact" },
];

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <nav className='my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='underline decoration-zinc-500 text-lg duration-500 text-zinc-500 hover:text-zinc-300'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles className='absolute inset-0 -z-10 animate-fade-in' quantity={100} />
      <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
        Rarrikate
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in overflow-hidden relative'>
        <h2 className='text-sm text-zinc-500 mt-4 mb-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
          Привет! Я Катя и уже 5 лет я преподаю немецкий язык!
          <br />
          И все эти пять лет мои ученики успешно преодолевают языковой барьер, <br /> сдают
          экзамены, переезжают и устраиваются на перспективные должности 🔥
        </h2>
      </div>
    </div>
  );
}
