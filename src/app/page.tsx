"use client"
import { RefObject, forwardRef, useEffect, useRef, useState } from "react"
import useOnScreen from "../util/useOnScreen"
import Image from "next/image"

function NavBar({
  page1Ref,
  page2Ref,
  page3Ref,
  innerHeight,
  scrollY,
}: {
  page1Ref: RefObject<HTMLElement>
  page2Ref: RefObject<HTMLElement>
  page3Ref: RefObject<HTMLElement>
  innerHeight: number
  scrollY: number
}) {
  function page1NavRadius() {
    if (scrollY < innerHeight / 2) {
      return "6"
    }
    return "4"
  }
  function page2NavRadius() {
    if (innerHeight * 1.5 > scrollY && scrollY >= innerHeight / 2) {
      return "6"
    }
    return "4"
  }

  function page3NavRadius() {
    if (scrollY >= innerHeight * 1.5) {
      return "6"
    }
    return "4"
  }

  return (
    <nav className="absolute right-[calc(5dvw_-_6px)] flex h-dvh flex-col items-center justify-center gap-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"12"}
        height={"12"}
        className="flex-none"
        onClick={() => page1Ref.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <circle cx="6" cy="6" r={page1NavRadius()} className="fill-white" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"12"}
        height={"12"}
        className="flex-none"
        onClick={() => page2Ref.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <circle cx="6" cy="6" r={page2NavRadius()} fill="white" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={"12"}
        height={"12"}
        className="flex-none"
        onClick={() => page3Ref.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <circle cx="6" cy="6" r={page3NavRadius()} fill="white" />
      </svg>
    </nav>
  )
}

const Page1 = forwardRef<HTMLElement>(function Page1(props, page1Ref) {
  const textRef = useRef(null)
  const isOnScreen = useOnScreen(textRef)
  const [textShown, setTextShown] = useState(false)
  useEffect(() => {
    isOnScreen ? setTextShown(true) : null
  }, [isOnScreen])

  return (
    <section
      {...props}
      ref={page1Ref}
      className="flex h-dvh snap-center items-center justify-center px-[10dvw] py-[10dvh]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-l-[16px] border-t-[16px] border-[#dfdf00] pl-[5dvw] shadow-[-20px_-20px_60px_-20px_rgb(255_255_0),30px_30px_30px_0px_rgb(0_0_0_/0.25)_inset]   filter md:gap-6">
        <div
          ref={textRef}
          className={
            textShown
              ? "animate-[fadein1_1s_0.5s_backwards] text-6xl text-shadow-mdblack md:text-[120px] md:text-shadow-lgblack"
              : "opacity-0"
          }
        >
          WELCOME.
        </div>
        <div
          className={
            textShown
              ? "animate-[fadein2_1s_1.5s_backwards] text-3xl text-shadow-smblack md:text-6xl md:text-shadow-mdblack"
              : "opacity-0"
          }
        >
          I&apos;m Sin Ho.
        </div>
      </div>
    </section>
  )
})

const Page2 = forwardRef<HTMLElement>(function Page2(props, page2Ref) {
  const textRef = useRef(null)
  const isOnScreen = useOnScreen(textRef)
  const [textShown, setTextShown] = useState(false)
  useEffect(() => {
    isOnScreen ? setTextShown(true) : null
  }, [isOnScreen])

  return (
    <section
      {...props}
      ref={page2Ref}
      className="flex h-dvh snap-center items-center justify-center px-[10dvw] py-[10dvh]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-l-[16px] border-[#dfdf00] pl-[5dvw] shadow-[-20px_0px_60px_-20px_rgb(255_255_0),30px_0px_30px_0px_rgb(0_0_0_/0.25)_inset] md:gap-6">
        <div
          ref={textRef}
          className={
            textShown
              ? "animate-[fadein2_1s_0.5s_backwards] text-3xl text-shadow-smblack md:text-6xl md:text-shadow-mdblack"
              : "opacity-0"
          }
        >
          About me
        </div>
      </div>
    </section>
  )
})

const Page3 = forwardRef<HTMLElement>(function Page3(props, page3Ref) {
  const textRef = useRef(null)
  const isOnScreen = useOnScreen(textRef)
  const [textShown, setTextShown] = useState(false)
  useEffect(() => {
    isOnScreen ? setTextShown(true) : null
  }, [isOnScreen])

  return (
    <section
      {...props}
      ref={page3Ref}
      className="flex h-dvh snap-center items-center justify-center px-[10dvw] py-[10dvh]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-b-[16px] border-l-[16px] border-[#dfdf00] pl-[5dvw] shadow-[-20px_20px_60px_-20px_rgb(255_255_0),30px_-30px_30px_0px_rgb(0_0_0_/0.25)_inset] md:gap-6">
        <div
          ref={textRef}
          className={
            textShown
              ? "animate-[fadein2_1s_0.5s_backwards] text-3xl text-shadow-smblack md:text-6xl md:text-shadow-mdblack"
              : "opacity-0"
          }
        >
          Where to find me:
        </div>
        <div
          className={
            textShown
              ? "flex animate-[fadein2_1s_1.5s_backwards] gap-4 md:gap-8 "
              : "opacity-0"
          }
        >
          <a href="https://github.com/sinhoko1999" target="_blank">
            <Image
              src="./github.svg"
              width="60"
              height="60"
              alt="GitHub"
              className="drop-shadow-[0px_5px_5px_rgb(0_0_0_/_0.5)]  md:h-[120px] md:w-[120px] md:drop-shadow-[0px_10px_5px_rgb(0_0_0_/_0.3)]"
            />
          </a>
          <a href="https://www.linkedin.com/in/sinho-ko" target="_blank">
            <Image
              src="/linkedin.png"
              width="60"
              height="60"
              alt="LinkedIn"
              className="drop-shadow-[0px_5px_5px_rgb(0_0_0_/_0.5)]  md:h-[120px] md:w-[120px] md:drop-shadow-[0px_10px_5px_rgb(0_0_0_/_0.3)]"
            />
          </a>
          <a href="mailto:sinho.ko.1999@gmail.com" target="_blank">
            <Image
              src="/mail.svg"
              width="60"
              height="60"
              alt="Mail Icon"
              className="drop-shadow-[0px_5px_5px_rgb(0_0_0_/_0.5)]  md:h-[120px] md:w-[120px] md:drop-shadow-[0px_10px_5px_rgb(0_0_0_/_0.3)]"
            />
          </a>
        </div>
      </div>
    </section>
  )
})

export default function Page() {
  const Page1Ref = useRef<HTMLElement>(null)
  const Page2Ref = useRef<HTMLElement>(null)
  const Page3Ref = useRef<HTMLElement>(null)
  const [innerHeight, setInnerHeight] = useState(1)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setInnerHeight(Page1Ref.current?.offsetHeight || 0)
  }, [Page1Ref.current?.offsetHeight])

  return (
    <div
      className="h-dvh overflow-hidden"
      style={{
        background: `linear-gradient(${0.875 - scrollY / 8 / innerHeight}turn, rgb(59 7 100), rgb(185 28 28))`,
      }}
    >
      <NavBar
        page1Ref={Page1Ref}
        page2Ref={Page2Ref}
        page3Ref={Page3Ref}
        innerHeight={innerHeight}
        scrollY={scrollY}
      />
      <main
        onScroll={(e) => setScrollY((e.target as HTMLElement).scrollTop)}
        className="h-dvh grow snap-y snap-mandatory overflow-scroll font-mono text-white"
      >
        <Page1 ref={Page1Ref} />
        <Page2 ref={Page2Ref} />
        <Page3 ref={Page3Ref} />
      </main>
    </div>
  )
}
