"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Coach {
  id: number
  name: string
  discipline: string
  experience: number
}

export default function Coaches() {
  const [coaches, setCoaches] = useState<Coach[]>([])

  useEffect(() => {
    // Simulating API call
    const fetchCoaches = async () => {
      // In a real app, this would be an API call
      const mockCoaches: Coach[] = [
        { id: 1, name: "John Doe", discipline: "Boxing", experience: 10 },
        { id: 2, name: "Jane Smith", discipline: "Brazilian Jiu-Jitsu", experience: 8 },
        { id: 3, name: "Mike Johnson", discipline: "Muay Thai", experience: 12 },
      ]
      setCoaches(mockCoaches)
    }
    fetchCoaches()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Martial Arts Coaches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
            <p className="mb-2">Discipline: {coach.discipline}</p>
            <p className="mb-4">Experience: {coach.experience} years</p>
            <Link
              href={`/coaches/${coach.id}`}
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

