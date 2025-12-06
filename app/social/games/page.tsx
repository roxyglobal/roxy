export default function GameHubPage() {
  const games = [
    {
      name: "Card Clash",
      description: "Battle using card mechanics. Earn XP Social.",
      emoji: "🃏",
    },
    {
      name: "Dice Arena",
      description: "Roll the dice. Challenge friends or house members.",
      emoji: "🎲",
    },
    {
      name: "Fish Challenge",
      description: "Quick reaction tapping game. Win more XP!",
      emoji: "🐟",
    },
    {
      name: "House War",
      description: "Compete between houses for monthly rewards.",
      emoji: "⚔️",
    },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Game Hub 🎮</h1>
        <p className="text-sm text-muted-foreground">
          Dunia sosial & permainan dalam Roxy Universe.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        {games.map((g, i) => (
          <div
            key={i}
            className="border rounded-lg p-5 hover:bg-accent transition cursor-pointer"
          >
            <div className="text-3xl mb-2">{g.emoji}</div>
            <h2 className="text-lg font-semibold">{g.name}</h2>
            <p className="text-sm text-muted-foreground">{g.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
