import Link from "next/link"

export default function Page() {
  return (
    <div className="h-dvh snap-y snap-mandatory overflow-scroll">
      <div className="p- flex h-dvh snap-center items-center justify-center px-[10vw] py-[10vh]">
        <div className="flex h-full grow flex-col justify-center gap-3 border-r-[16px] border-t-[16px] border-[#dfdf00] md:gap-6">
          <div className="animate-[1.5s_linear_0s_fadein1]  font-mono text-6xl text-white text-shadow-mdblack md:text-9xl md:text-shadow-lgblack">
            WELCOME
          </div>
          <div className="animate-[2.5s_linear_0s_fadein2]  font-mono text-3xl text-white shadow-gray-500 text-shadow-smblack md:text-6xl md:text-shadow-mdblack">
            I'm Sin Ho.
          </div>
        </div>
      </div>
      <div className="h-dvh snap-center"></div>
      <div className="h-dvh snap-center"></div>
    </div>
  )
}
