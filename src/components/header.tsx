"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

function LeftHeader() {
  return (
    <Link
      href="/"
      className="overflow-hidden text-clip text-nowrap bg-purple-500 p-3 font-mono text-4xl font-black tracking-wider"
    >
      Sin Ho Ko
    </Link>
  )
}

function RightHeader() {
  return (
    <div className="flex shrink-0 flex-row gap-3 bg-green-500 p-3 ">
      <a href="mailto:sinho.ko.1999@gmail.com" target="_blank">
        <Image
          src="/mail.svg"
          className="overflow-hidden drop-shadow"
          alt="Mail Icon"
          width="40"
          height="40"
        />
      </a>
      <a href="https://github.com/sinhoko1999" target="_blank">
        <Image
          src="/github.svg"
          className="drop-shadow grayscale"
          alt="GitHub Logo"
          width="40"
          height="40"
        />
      </a>
      <a href="https://www.linkedin.com/in/sinho-ko" target="_blank">
        <Image
          src="/linkedin.png"
          className="drop-shadow"
          alt="LinkedIn Logo"
          width="40"
          height="40"
        />
      </a>
      <button
        onClick={() =>
          console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
        }
      >
        <Image
          src="/darktheme.svg"
          className="drop-shadow"
          alt="Dark Theme Toggle"
          width="40"
          height="40"
        />
      </button>
    </div>
  )
}

export default function Header() {
  return (
    <div className="flex flex-row justify-between bg-yellow-500">
      <LeftHeader />
      <RightHeader />
    </div>
  )
}
