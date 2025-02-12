import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kombat</h1>
      <p className="mb-8 text-xl">Find and book martial arts gyms and coaches near you</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Boxing</h2>
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Boxing"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p>Discover top boxing gyms and coaches in your area.</p>
        </div>
        <div className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Brazilian Jiu-Jitsu</h2>
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="BJJ"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p>Find BJJ academies and instructors to level up your ground game.</p>
        </div>
        <div className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Muay Thai</h2>
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Muay Thai"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p>Explore Muay Thai gyms and trainers to sharpen your striking skills.</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <Link
          href="/gyms"
          className="bg-[rgba(184,255,231,0.77)] hover:bg-[rgba(164,235,211,0.77)] text-black font-bold py-2 px-4 rounded"
        >
          Find Gyms
        </Link>
        <Link href="/coaches" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Find Coaches
        </Link>
      </div>
    </div>
  )
}

