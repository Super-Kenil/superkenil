"use client"
import { HTMLAttributeAnchorTarget } from "react"
import { cn } from "@/utils/cn"
import Link from "next/link"
import styles from './index.module.css'


import mine from "@/assets/images/mine.webp"

type PageRouteType = {
  name: string
  active: boolean
  link?: string
  target?: HTMLAttributeAnchorTarget
}

const Home = () => {
  let greeting = 'Good Morning'
  const currHour = new Date().getHours()

  const pageRoutes: PageRouteType[] = [
    {
      name: 'Preview',
      active: true,
    },
    {
      name: 'Clones',
      link: '/clones/builder-io',
      active: false,
    },
    {
      name: 'Github',
      link: 'https://github.com/Super-Kenil/',
      target: '_blank',
      active: false,
    },
  ]

  if ((currHour < 6) || (currHour > 21)) {
    greeting = 'Good Night'
  } else if (currHour < 12) {
    greeting = 'Good Morning'
  } else if (currHour < 18) {
    greeting = 'Good Afternoon'
  } else if (currHour < 22) {
    greeting = 'Good Evening'
  }

  return (
    <>
      <main className="flex bg-[#010101] min-h-screen text-white" style={{ fontFamily: "'Playfair Display','Poppins', serif" }}>
        <section
          className="flex flex-col justify-between w-full bg-center bg-no-repeat overflow-x-hidden"
          style={{ backgroundImage: `url(${mine.src})` }}
        >
          <header className="p-16 uppercase font-bold text-sm max-lg:self-center">Super</header>
          <div>
            <div className="ps-64 max-lg:ps-10">
              <p className="text-2xl">Hey there!</p>
              <p>{greeting}</p>
            </div>

            <div className="flex justify-between font-serif font-thin overflow-hidden text-[170px] max-lg:text-8xl max-lg:mt-6 max-lg:mb-[8.5rem] max-[400px]:mb-[4rem] max-sm:flex-wrap max-sm:opacity-30">
              <p className={`${styles.paper_font} lowercase -translate-x-24 max-lg:-translate-x-16`}>super</p>
              <p className={`${styles.paper_font} lowercase translate-x-[70px] max-lg:translate-x-10 max-[400px]:translate-x-60 max-[400px]:translate-y-4 z-10`}>kenil</p>
            </div>

            <div className="flex justify-between text-gray-300 px-64 max-lg:px-10">
              <div className="max-w-[210px] max-[460px]:max-w-[172px] text-xs">
                It&apos;s me, <b>Kenil Sudani</b>. Nice to meet ya! Let me give a short introduction of myself I am a...
                <div className="grid grid-rows-2 grid-flow-col max-w-fit mt-1">
                  <span className="row-span-2 font-bold">
                    <span>FU</span>
                    <br />
                    <span>LL</span>
                  </span>
                  <span className="ms-1 row-span-2">
                    <span>Time Developer</span>
                    <br />
                    <span>Stack Developer</span>
                  </span>
                </div>
              </div>
              <div className="max-w-[210px] text-xs">
                <span className="font-semibold">Now for the tech...</span>
                <div className="flex-col">
                  <p>ReactJs</p>
                  <p>NextJs</p>
                  <p>NodeJs</p>
                  <p>React Native</p>
                </div>

              </div>
            </div>

          </div>
          <nav className="p-16 flex justify-between max-lg:justify-center items-center max-lg:pb-7">
            <span className="max-lg:hidden">&copy; {new Date().getFullYear()}</span>
            <ul className="flex items-center max-[465px]:text-sm">
              {pageRoutes.map((menu, idx) => {
                return (
                  <li key={idx} className={cn("uppercase h-12 w-32 max-[465px]:w-[115px] flex justify-center items-center", menu.active && "rounded-[50%] border-red-600 border-[1px] rotate-[-12deg] relative")}>
                    <Link href={menu.link ?? ''} target={menu.target} className={cn(menu.active && "absolute rotate-[12deg]")}>
                      {menu.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <span className="max-lg:hidden"></span>
          </nav>
          <span className="hidden max-lg:block self-center mb-3">&copy; {new Date().getFullYear()}</span>
        </section>
      </main>
    </>
  )
}

export default Home