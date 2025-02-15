"use client"

import UserForm from "./userForm/page";

import { useState } from "react"
import { supabase } from "../utils/supabaseClient"

// register function
export default function RegistrationPage() {
    return (
      <div className="container mx-auto p-4">
        <UserForm />
      </div>
    );
  }