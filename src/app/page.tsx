import Link from "next/link"

export default function Page() {
  return (
    <div className="h-dvh snap-y snap-mandatory overflow-scroll">
      <div className="p- flex h-dvh snap-center items-center justify-center px-[10vw] py-[10vh]">
        <div className="flex h-full grow flex-col justify-center gap-5 border-r-[16px] border-t-[16px] border-[#dfdf00] md:gap-10">
          <div className="text-shadow-mdblack md:text-shadow-lgblack font-mono text-6xl text-white underline decoration-double md:text-9xl">
            WELCOME
          </div>
          <div className="text-shadow-smblack md:text-shadow-mdblack font-mono text-3xl text-white shadow-gray-500 md:text-6xl">
            I'm Sin Ho.
          </div>
        </div>
      </div>
      <div className="h-dvh snap-center"></div>
      <div className="h-dvh snap-center"></div>
    </div>
  )
}
