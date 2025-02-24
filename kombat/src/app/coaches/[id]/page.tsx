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
    bio: string
    experience: string
}

export default function Details() {

    const { id } = useParams();
    const [coach, setCoach] = useState<Coach | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCoach = async () => {

            try {   
                const { data, error } = await supabase
                .from("coaches")
                .select("*")
                .eq("id", id)
                .single();
                
                if (error) throw error;
                setCoach(data);
            } catch (err) {
                setError(`Failed to fetch Coach details ${err}`)
            } finally {
                setLoading(false);
            }
        };
        fetchCoach();
    }, [id])

    if (loading) return <p>Loading coach details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!coach) return <p>Coach not found.</p>

    return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{coach.name}</h1>
        <p className="text-gray-700"><strong>Discipline:</strong> {coach.discipline}</p>
        <p className="text-gray-700"><strong>Location:</strong> {coach.location}</p>
        <p className="text-gray-700"><strong>Experience:</strong> {coach.experience}</p>
        <p className="text-gray-700"><strong>Contact:</strong> {coach.contact}</p>
        <p className="mt-4 text-gray-600">{coach.bio}</p>

        <div className="mt-6">
            <Link href="/coaches">
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Back to Coaches</button>
            </Link>
        </div>
    </div>
    )



};