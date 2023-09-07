"use client";

import { Card } from "@/app/components/card";
import { Navigation } from "@/app/components/nav";
import Particles from "@/app/components/particles";
import { projects } from "@/constants/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const item = projects.find(c => c.slug === params.slug);

  return (
    <div className='relative pb-16'>
      <Particles className='absolute inset-0 -z-10' quantity={300} />
      <Navigation goBackLink='/projects' />
      <div className='px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32'>
        <Card>
          <article className='relative w-full h-full p-4 md:p-8'>
            <div className='flex items-center justify-between gap-2'>
              <div className='text-xs text-zinc-100'></div>{" "}
            </div>

            <h2
              id='featured-post'
              className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
            >
              {item?.title}
            </h2>

            {item?.benefits.map((item, index) => (
              <p
                key={index}
                className='mt-4 mb-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'
              >
                {item}
              </p>
            ))}
            <p className='mt-4 mb-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
              Стоимость: {item?.price} р
            </p>
            <div className='absolute bottom-4 md:bottom-8'>
              <p className='text-zinc-200 hover:text-zinc-50 lg:block'>
                Узнать подробнее <span aria-hidden='true'>&rarr;</span>
              </p>
            </div>
          </article>
        </Card>
      </div>
    </div>
  );
}
