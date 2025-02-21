"use client";

import { supabase } from "../../utils/supabaseClient";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useParams } from "next/navigation";

interface Coach {
    id: number
    name: string
    discipline: string
    location: string
    contact: string
    description: string
}

export default function details() {

    const { id } = useParams();
    const [gym, setGym] = useState<Gym | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGym = async () => {

            try {   
                const { data, error } = await supabase
                .from("gyms")
                .select("*")
                .eq("id", id)
                .single();
                
                if (error) throw error;
                setGym(data);
            } catch (err) {
                setError('Failed to fetch Coach details')
            } finally {
                setLoading(false);
            }
        };
        fetchGym();
    }, [id])

    if (loading) return <p>Loading gym details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!gym) return <p>Gym not found.</p>

    return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
        <p className="text-gray-700"><strong>Discipline:</strong> {gym.discipline}</p>
        <p className="text-gray-700"><strong>Location:</strong> {gym.location}</p>
        <p className="text-gray-700"><strong>Description:</strong> {gym.description}</p>
        <p className="text-gray-700"><strong>Contact:</strong> {gym.contact}</p>

        <div className="mt-6">
            <Link href="/coaches">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Back to Coaches</button>
            </Link>
        </div>
    </div>
    )



};