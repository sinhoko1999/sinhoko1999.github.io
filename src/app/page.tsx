import Link from "next/link"

export default function Page() {
  return (
    <div className="grow bg-red-500 font-mono text-3xl underline decoration-double">
      WELCOME
      <br />
      <Link href="/xd">xd</Link>
    </div>
  )
}
