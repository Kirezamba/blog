"use client";

import { Eye } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";

export interface GoodsCardProps {
  slug: string;
  title: string;
  description: string;
  price: number;
  benefits: string[];
}

export const ProjectCard: React.FC<GoodsCardProps> = ({ description, slug, title }) => {
  return (
    <Card>
      <Link href={`projects/${slug}`}>
        <article className='relative w-full h-full p-4 md:p-8'>
          <div className='flex items-center justify-between gap-2'>
            <div className='text-xs text-zinc-100'></div>
            <span className='flex items-center gap-1 text-xs text-zinc-500'>
              <Eye className='w-4 h-4' />
            </span>
          </div>

          <h2
            id='featured-post'
            className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'
          >
            {title}
          </h2>
          <p className='mt-4 mb-10 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
            {description}
          </p>
          <div className='absolute bottom-4 md:bottom-8'>
            <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
              Узнать подробнее <span aria-hidden='true'>&rarr;</span>
            </p>
          </div>
        </article>
      </Link>
    </Card>
  );
};
