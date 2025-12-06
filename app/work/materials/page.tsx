"use client";

import { useState } from "react";

const sampleMaterials = [
  { id: 1, name: "MS Plate 5mm", category: "MS", price: 120 },
  { id: 2, name: "SS 304 Hollow 30x30", category: "SS", price: 280 },
  { id: 3, name: "Aluminium Flatbar", category: "ALU", price: 95 },
];

export default function MaterialsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filtered = sampleMaterials.filter((m) => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "ALL" || m.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="space-y-6">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-semibold">Materials</h1>
        <p className="text-sm text-muted-foreground">
          Manage materials, categories and pricing.
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex gap-4">
        {/* Search */}
        <input
          className="px-3 py-2 border rounded-md bg-background flex-1"
          placeholder="Search material..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="px-3 py-2 border rounded-md bg-background"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="ALL">All</option>
          <option value="MS">MS</option>
          <option value="SS">SS</option>
          <option value="ALU">ALU</option>
          <option value="WOOD">WOOD</option>
          <option value="GLASS">GLASS</option>
        </select>

        {/* Add New Button */}
        <button className="border px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition">
          Add Material
        </button>
      </div>

      {/* TABLE */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Price (RM)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="px-4 py-2">{m.name}</td>
                <td className="px-4 py-2">{m.category}</td>
                <td className="px-4 py-2">{m.price}</td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-4 text-center text-muted-foreground">
                  No materials found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
