"use client"

import { useState } from "react"

export default function Bookings() {
    const [bookings,setBookings] = useState([
        {id: 1, type: "Gym", name: "Boxing Gym A", date: "2025-06-12", time: "10:00 AM"},
        {id: 2, type: "Coach", name: "John Smith", date: "2025-06-12", time: "2:00 PM"}
    ])

    const cancelBooking = (id: number) => {
        setBookings(bookings.filter((booking) => booking.id !== id))
    }

    return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Bookings</h1>
      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-[rgba(184,255,231,0.77)] p-6 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{booking.name}</h2>
                <p className="mb-1">Type: {booking.type}</p>
                <p className="mb-1">Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
              </div>
              <button
                onClick={() => cancelBooking(booking.id)}
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no upcoming bookings.</p>
      )}
    </div>
    )
}