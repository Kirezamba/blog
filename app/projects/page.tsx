"use client";

import { Navigation } from "../components/nav";
import { ProjectCard } from "./projectCard";
import { projects } from "../static/projects";

export default async function ProjectsPage() {
  return (
    <div className='relative pb-16'>
      <Navigation goBackLink='/' />
      <div className='mt-5 px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl'>Товары</h2>
          <p className='mt-4 text-zinc-400'>rarrikate | немецкий язык | deutsch</p>
        </div>
        <div className='w-full h-px bg-zinc-800' />

        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 '>
          {projects.map(card => (
            <ProjectCard key={card.slug} {...card} />
          ))}
        </div>
        <div className='hidden w-full h-px md:block bg-zinc-800' />
      </div>
    </div>
  );
}
