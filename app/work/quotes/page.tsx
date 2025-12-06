"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";

type Item = {
  id: number;
  material: string;
  shape: string;
  qty: number;
  multiplier: number;
};

export default function QuoteBuilderPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [material, setMaterial] = useState("");
  const [shape, setShape] = useState("");
  const [qty, setQty] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  // ➤ ADD NEW ITEM
  const addItem = () => {
    if (!material || !shape) return;

    const newItem: Item = {
      id: Date.now(),
      material,
      shape,
      qty,
      multiplier,
    };

    setItems([...items, newItem]);

    setMaterial("");
    setShape("");
    setQty(1);
    setMultiplier(1);
  };

  // ➤ DELETE ITEM
  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // ➤ DUPLICATE ITEM
  const duplicateItem = (id: number) => {
    const target = items.find((i) => i.id === id);
    if (!target) return;

    const duplicated = {
      ...target,
      id: Date.now(),
    };

    setItems([...items, duplicated]);
  };

  // ➤ EDIT ITEM (opens inline editing)
  const editItem = (id: number) => {
    const target = items.find((i) => i.id === id);
    if (!target) return;

    setMaterial(target.material);
    setShape(target.shape);
    setQty(target.qty);
    setMultiplier(target.multiplier);

    // Remove old one → when user presses Add it becomes new updated entry
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-semibold">Quote Builder</h1>
        <p className="text-sm text-muted-foreground">
          Build your quotation using materials & shapes.
        </p>
      </div>

      {/* INPUT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <input
          className="px-3 py-2 border rounded-md bg-background"
          placeholder="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />

        <input
          className="px-3 py-2 border rounded-md bg-background"
          placeholder="Shape"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
        />

        <input
          type="number"
          className="px-3 py-2 border rounded-md bg-background"
          placeholder="Qty"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />

        <input
          type="number"
          className="px-3 py-2 border rounded-md bg-background"
          placeholder="Multiplier"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
        />

      </div>

      {/* ADD BUTTON */}
      <button
        className="border px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition"
        onClick={addItem}
      >
        {material || shape ? "Save Item" : "Add Item"}
      </button>

      {/* LIST */}
      <div className="border rounded-lg p-4 space-y-3">
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No items yet. Add above.
          </p>
        )}

        {items.map((item) => (
          <ContextMenu key={item.id}>
            <ContextMenuTrigger>
              <div className="border rounded-md p-3 bg-background/50 hover:bg-accent/20 transition cursor-pointer">
                <p><strong>Material:</strong> {item.material}</p>
                <p><strong>Shape:</strong> {item.shape}</p>
                <p><strong>Qty:</strong> {item.qty}</p>
                <p><strong>Multiplier:</strong> {item.multiplier}</p>
              </div>
            </ContextMenuTrigger>

            <ContextMenuContent className="w-48">
              <ContextMenuItem onClick={() => editItem(item.id)}>✏️ Edit</ContextMenuItem>
              <ContextMenuItem onClick={() => duplicateItem(item.id)}>📄 Duplicate</ContextMenuItem>
              <ContextMenuItem onClick={() => deleteItem(item.id)} className="text-red-500">
                🗑 Delete
              </ContextMenuItem>
              <ContextMenuItem>📐 Add Dimension</ContextMenuItem>
              <ContextMenuItem>📌 Add Note</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}

      </div>

    </div>
  );
}
