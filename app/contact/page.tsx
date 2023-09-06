"use client";

import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { useRouter } from "next/router";

const socials = [
  {
    icon: (
      <svg
        fill='#f2f3f4'
        width='800px'
        height='800px'
        viewBox='0 0 32 32'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M22.122 10.040c0.006-0 0.014-0 0.022-0 0.209 0 0.403 0.065 0.562 0.177l-0.003-0.002c0.116 0.101 0.194 0.243 0.213 0.403l0 0.003c0.020 0.122 0.031 0.262 0.031 0.405 0 0.065-0.002 0.129-0.007 0.193l0-0.009c-0.225 2.369-1.201 8.114-1.697 10.766-0.21 1.123-0.623 1.499-1.023 1.535-0.869 0.081-1.529-0.574-2.371-1.126-1.318-0.865-2.063-1.403-3.342-2.246-1.479-0.973-0.52-1.51 0.322-2.384 0.221-0.23 4.052-3.715 4.127-4.031 0.004-0.019 0.006-0.040 0.006-0.062 0-0.078-0.029-0.149-0.076-0.203l0 0c-0.052-0.034-0.117-0.053-0.185-0.053-0.045 0-0.088 0.009-0.128 0.024l0.002-0.001q-0.198 0.045-6.316 4.174c-0.445 0.351-1.007 0.573-1.619 0.599l-0.006 0c-0.867-0.105-1.654-0.298-2.401-0.573l0.074 0.024c-0.938-0.306-1.683-0.467-1.619-0.985q0.051-0.404 1.114-0.827 6.548-2.853 8.733-3.761c1.607-0.853 3.47-1.555 5.429-2.010l0.157-0.031zM15.93 1.025c-8.302 0.020-15.025 6.755-15.025 15.060 0 8.317 6.742 15.060 15.060 15.060s15.060-6.742 15.060-15.060c0-8.305-6.723-15.040-15.023-15.060h-0.002q-0.035-0-0.070 0z'></path>
      </svg>
    ),
    href: "https://t.me/rarrikate",
    label: "Telegram",
    handle: "@rarrikate",
  },
  {
    icon: (
      <svg fill='#f2f3f4' viewBox='0 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <path d='M25.217 22.402h-2.179c-0.825 0-1.080-0.656-2.562-2.158-1.291-1.25-1.862-1.418-2.179-1.418-0.445 0-0.572 0.127-0.572 0.741v1.968c0 0.53-0.169 0.847-1.566 0.847-2.818-0.189-5.24-1.726-6.646-3.966l-0.021-0.035c-1.632-2.027-2.835-4.47-3.43-7.142l-0.022-0.117c0-0.317 0.127-0.614 0.741-0.614h2.179c0.55 0 0.762 0.254 0.975 0.846 1.078 3.112 2.878 5.842 3.619 5.842 0.275 0 0.402-0.127 0.402-0.825v-3.219c-0.085-1.482-0.868-1.608-0.868-2.137 0.009-0.283 0.241-0.509 0.525-0.509 0.009 0 0.017 0 0.026 0.001l-0.001-0h3.429c0.466 0 0.635 0.254 0.635 0.804v4.34c0 0.465 0.212 0.635 0.339 0.635 0.275 0 0.509-0.17 1.016-0.677 1.054-1.287 1.955-2.759 2.642-4.346l0.046-0.12c0.145-0.363 0.493-0.615 0.9-0.615 0.019 0 0.037 0.001 0.056 0.002l-0.003-0h2.179c0.656 0 0.805 0.337 0.656 0.804-0.874 1.925-1.856 3.579-2.994 5.111l0.052-0.074c-0.232 0.381-0.317 0.55 0 0.975 0.232 0.317 0.995 0.973 1.503 1.566 0.735 0.727 1.351 1.573 1.816 2.507l0.025 0.055c0.212 0.612-0.106 0.93-0.72 0.93zM20.604 1.004h-9.207c-8.403 0-10.392 1.989-10.392 10.392v9.207c0 8.403 1.989 10.392 10.392 10.392h9.207c8.403 0 10.392-1.989 10.392-10.392v-9.207c0-8.403-2.011-10.392-10.392-10.392z'></path>
      </svg>
    ),
    href: "https://vk.com/rarrikate",
    label: "VK",
    handle: "Группа ВКонтакте",
  },
  {
    icon: (
      <svg
        width='800px'
        height='800px'
        viewBox='0 0 20 20'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs></defs>
        <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
          <g
            id='Dribbble-Light-Preview'
            transform='translate(-300.000000, -7599.000000)'
            fill='#f2f3f4'
          >
            <g id='icons' transform='translate(56.000000, 160.000000)'>
              <path
                d='M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439'
                id='whatsapp-[#128]'
              ></path>
            </g>
          </g>
        </g>
      </svg>
    ),
    href: "https://wa.me/420774334587",
    label: "Связаться через Whatsapp",
    handle: "Whatsapp",
  },
];

export default function Example() {
  return (
    <div className=' bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
      <Navigation goBackLink='/' />
      <div className='container flex items-center justify-center min-h-screen px-4 mx-auto'>
        <div className='grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
          {socials.map(s => (
            <Card>
              <Link
                href={s.href}
                target='_blank'
                className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16'
              >
                <span
                  className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                  aria-hidden='true'
                />
                <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000  text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
                  {s.icon}
                </span>
                <div className='z-10 flex flex-col items-center'>
                  <span className='text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display'>
                    {s.handle}
                  </span>
                  <span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
