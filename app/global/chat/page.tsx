"use client";

import { useState } from "react";

type Message = {
  id: number;
  user: string;
  text: string;
};

export default function GlobalChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: "System", text: "Welcome to Roxy Global Chat 🌐" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: "You",
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">Global Chat 🌐</h1>
        <p className="text-sm text-muted-foreground">
          Bersembang dengan semua user dalam Roxy Universe.
        </p>
      </header>

      <div className="border rounded-lg h-[400px] overflow-y-auto p-4 bg-background space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <span className="font-semibold">{msg.user}: </span>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 bg-background"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button
          className="border rounded px-4 py-2 bg-secondary text-secondary-foreground"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
