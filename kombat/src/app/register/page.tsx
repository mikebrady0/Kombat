"use client";

import UserForm from "./userForm/page";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

// Register function
export default function RegistrationPage() {
  const [userType, setUserType] = useState<"gym" | "coach">("gym");
  const [loading, setLoading] = useState(false);

  // Set DB Columns
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "contact":
        setContact(value);
        break;
      case "discipline":
        setDiscipline(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "experience":
        setExperience(value);
        break;
      case "bio":
        setBio(value);
        break;
      default:
        break;
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userTable = userType === "gym" ? "gyms" : "coaches";

    const formData = userType === "gym"
      ? { name, location, contact, description, discipline }
      : { name, discipline, experience, contact, bio };

    try {
      const { data, error } = await supabase.from(userTable).insert([formData]);

      if (error) {
        console.error("Error uploading Supabase Data:", error);
        throw error;
      }

      console.log("Form data submitted:", data);
      alert("Form submitted successfully");
    } catch (err) {
      console.error("Error submitting data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mx-auto lg p-4">
        <p className="text-gray-700 text-sm">
          All communications and bookings are solely the responsibility of the Gym/Coach and Customer.
          At this time, Kombat does not facilitate communication or booking services.
          We are actively working to integrate these features into our platform to enhance the experience for both fighters and trainers.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Registration</h2>

        {/* User Type Selection */}
        <div className="mb-4">
          <label className="block mb-2">Select User Type:</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value as "gym" | "coach")}
            className="w-full p-2 border rounded"
          >
            <option value="gym">Gym</option>
            <option value="coach">Coach</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input type="text" name="name" onChange={handleInputChange} className="w-full p-2 border rounded" required />
        </div>

        {/* Conditional Fields */}
        {userType === "gym" && (
          <>
            <div className="mb-4">
              <label className="block mb-2">Location:</label>
              <input type="text" name="location" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Disciplines:</label>
              <input type="text" name="discipline" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Contact Information:</label>
              <input type="text" name="contact" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Description:</label>
              <textarea name="description" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
          </>
        )}

        {userType === "coach" && (
          <>
            <div className="mb-4">
              <label className="block mb-2">Discipline:</label>
              <input type="text" name="discipline" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Experience Level:</label>
              <input type="text" name="experience" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Contact Information:</label>
              <input type="text" name="contact" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Bio:</label>
              <textarea name="bio" onChange={handleInputChange} className="w-full p-2 border rounded" required />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
