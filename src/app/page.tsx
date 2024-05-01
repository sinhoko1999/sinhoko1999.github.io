"use client"
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react"

function NavBar({
  page1Ref,
  page2Ref,
  page3Ref,
  scrollY,
}: {
  page1Ref: React.RefObject<HTMLDivElement>
  page2Ref: React.RefObject<HTMLDivElement>
  page3Ref: React.RefObject<HTMLDivElement>
  scrollY: number
}) {
  const [innderHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    setInnerHeight(page1Ref.current?.offsetHeight || 0)
    console.log(page1Ref.current?.offsetHeight)
  }, [page1Ref, page1Ref.current?.offsetHeight])

  function page1NavRadius() {
    if (scrollY < innderHeight / 2) {
      return "6"
    }
    return "4"
  }
  function page2NavRadius() {
    if (innderHeight * 1.5 > scrollY && scrollY >= innderHeight / 2) {
      return "6"
    }
    return "4"
  }

  function page3NavRadius() {
    if (scrollY >= innderHeight * 1.5) {
      return "6"
    }
    return "4"
  }

  return (
    <nav className="box-border flex max-w-[10vw] flex-col items-center justify-center gap-10 px-[5vw]">
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

const Page1 = forwardRef<HTMLDivElement>(function Page1(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className="flex h-dvh snap-center items-center justify-center py-[10vh] pr-[10vw]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-r-[16px] border-t-[16px] border-[#dfdf00] md:gap-6">
        <div className="animate-[1.5s_linear_0s_fadein1] text-6xl text-shadow-mdblack md:text-9xl md:text-shadow-lgblack">
          WELCOME.
        </div>
        <div className="animate-[2.5s_linear_0s_fadein2] text-3xl text-shadow-smblack md:text-6xl md:text-shadow-mdblack">
          I&apos;m Sin Ho.
        </div>
      </div>
    </section>
  )
})

const Page2 = forwardRef<HTMLDivElement>(function Page2(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      onClick={() => console.log(ref)}
      className="flex h-dvh snap-center items-center justify-center py-[10vh] pr-[10vw]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-r-[16px] border-[#dfdf00] text-3xl md:gap-6 md:text-6xl md:text-shadow-mdblack">
        About me
      </div>
    </section>
  )
})

const Page3 = forwardRef<HTMLDivElement>(function Page3(props, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className="flex h-dvh snap-center items-center justify-center py-[10vh] pr-[10vw]"
    >
      <div className="flex h-full grow flex-col justify-center gap-3 border-b-[16px] border-r-[16px] border-[#dfdf00] text-3xl md:gap-6 md:text-6xl md:text-shadow-mdblack">
        <div>Where to find me:</div>
        <div></div>
      </div>
    </section>
  )
})

export default function Page() {
  const Page1Ref = useRef<HTMLDivElement>(null)
  const Page2Ref = useRef<HTMLDivElement>(null)
  const Page3Ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  return (
    <>
      <NavBar
        page1Ref={Page1Ref}
        page2Ref={Page2Ref}
        page3Ref={Page3Ref}
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
    </>
  )
}
