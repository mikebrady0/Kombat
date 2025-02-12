"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Gym {
  id: number
  name: string
  discipline: string
  rating: number
}

export default function Gyms() {
  const [gyms, setGyms] = useState<Gym[]>([])

  useEffect(() => {
    // Simulating API call
    const fetchGyms = async () => {
      // In a real app, this would be an API call
      const mockGyms: Gym[] = [
        { id: 1, name: "Boxing Gym A", discipline: "Boxing", rating: 4.5 },
        { id: 2, name: "BJJ Academy B", discipline: "Brazilian Jiu-Jitsu", rating: 4.8 },
        { id: 3, name: "Muay Thai Gym C", discipline: "Muay Thai", rating: 4.2 },
      ]
      setGyms(mockGyms)
    }
    fetchGyms()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Martial Arts Gyms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gyms.map((gym) => (
          <div key={gym.id} className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{gym.name}</h2>
            <p className="mb-2">Discipline: {gym.discipline}</p>
            <p className="mb-4">Rating: {gym.rating}/5</p>
            <Link
              href={`/gyms/${gym.id}`}
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

