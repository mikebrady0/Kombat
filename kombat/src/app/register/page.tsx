"use client"

import UserForm from "./userForm/page";

import { useState } from "react"
import { supabase } from "../utils/supabaseClient"

// register function
export default function RegistrationPage() {
    return (
      <div className="container mx-auto p-4">
        <div className="mx-auto lg p-4">
          <p className="text-gray-700 text-sm">
            All communications and bookings are solely the responsibility of the Gym/Coach and Customer. 
            At this time, Kombat does not facilitate communication or booking services. 
            We are actively working to integrate these features into our platform to enhance the experience for both fighters and trainers.
          </p>
        </div>
        <UserForm />
      </div>
    );
  }