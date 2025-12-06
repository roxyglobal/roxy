"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function TestPage() {
  const [status, setStatus] = useState("Checking Supabase...");

  useEffect(() => {
    async function check() {
      const { data, error } = await supabase.from("materials").select("*").limit(1);

      if (error) {
        setStatus("❌ Error: " + error.message);
      } else {
        setStatus("✅ Connected to Supabase!");
      }
    }
    check();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Supabase Test</h1>
      <p className="text-muted-foreground">{status}</p>
    </div>
  );
}