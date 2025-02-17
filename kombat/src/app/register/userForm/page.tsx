"use client"

import { useState } from "react"
import { supabase } from "../userForm/utils/supabaseClient"

export default function UserForm() {
    const [userType, setUserType] = useState<"gym" | "coach">("");
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data: ", formData);
        alert("Form submitted successfully");

    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">User Registration</h2>

          {/* User Type Selection */}
          <div className="mb-4">
            <label className="block mb-2">Select User Type:</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="gym">Gym</option>
              <option value="coach">Coach</option>
            </select>
          </div>


      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Conditional Fields */}
      {userType === "gym" && (
        <>
          <div className="mb-4">
            <label className="block mb-2">Location:</label>
            <input
              type="text"
              name="location"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Disciplines:</label>
            <input
              type="text"
              name="disciplines"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contact Information:</label>
            <input
              type="text"
              name="contact"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description:</label>
            <textarea
              name="description"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </>
      )}

      {userType === "coach" && (
        <>
          <div className="mb-4">
            <label className="block mb-2">Discipline:</label>
            <input
              type="text"
              name="discipline"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Experience Level:</label>
            <input
              type="text"
              name="experience"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contact Information:</label>
            <input
              type="text"
              name="contact"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Bio:</label>
            <textarea
              name="bio"
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </>
      )}
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
    );
};