"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { supabase } from "../utils/supabaseClient"

interface Coach {
  id: number
  name: string
  discipline: string
  location: string
}

export default function Coaches() {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating API call
    const fetchCoaches = async () => {
      // In a real app, this would be an API call
      try {
        // Fetch gyms from Supabase
        const { data, error } = await supabase
          .from("coaches")
          .select("*");

        if (error) {
          throw error; // Throw the error to be caught in the catch block
        }

        setCoaches(data); // Set the fetched gyms
      } catch (err) {
        setError(`Failed to fetch coaches. Please try again later. ${err}`); // Set error message
        console.error("Error fetching coaches:", err); // Log the error
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    }
    fetchCoaches()
  }, []);

  if (loading) {
    return <p>Loading gyms...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Martial Arts Coaches</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{coach.name}</h2>
            <p className="mb-2">Discipline: {coach.discipline}</p>
            <p className="mb-4">Location: {coach.location}</p>
            <div className="flex flex-col sm:flex-row mt-4">
            <Link
              href={`/coaches/${coach.id}`}
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-2 mb-2 sm:mb-0"
            >
              View Profile
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

