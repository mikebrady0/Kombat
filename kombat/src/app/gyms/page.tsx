"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient.js";

interface Gym {
  id: number;
  name: string;
  discipline: string;
  rating: number;
}

export default function Gyms() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        // Fetch gyms from Supabase
        const { data, error } = await supabase
          .from("gyms")
          .select("*");

        if (error) {
          throw error; // Throw the error to be caught in the catch block
        }

        setGyms(data); // Set the fetched gyms
      } catch (err) {
        setError("Failed to fetch gyms. Please try again later."); // Set error message
        console.error("Error fetching gyms:", err); // Log the error
      } finally {
        setLoading(false); // Ensure loading is set to false
      }
    };

    fetchGyms();
  }, []);

  if (loading) {
    return <p>Loading gyms...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Martial Arts Gyms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gyms.map((gym) => (
          <div
            key={gym.id}
            className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{gym.name}</h2>
            <p className="mb-2">Discipline: {gym.discipline}</p>
            <p className="mb-4">Rating: {gym.rating}/5</p>
            <div className="flex flex-col sm:flex-row mt-4">
              <Link
                href={`/gyms/${gym.id}`}
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-2 mb-2 sm:mb-0"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}