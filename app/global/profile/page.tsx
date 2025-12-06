export default function GlobalProfilePage() {
  const user = {
    name: "Roxy User",
    role: "Explorer",
    xpWork: 1200,
    xpSocial: 850,
    xpTotal: 2050,
    rank: "Bronze II",
    house: "None",
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Your Profile 🌐</h1>
        <p className="text-sm text-muted-foreground">
          Identiti global anda dalam Roxy Universe.
        </p>
      </header>

      <div className="border rounded-lg p-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-muted-foreground">{user.role}</p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="border rounded-lg p-4">
            <p className="text-xs text-muted-foreground">Work XP</p>
            <p className="text-xl font-bold">{user.xpWork}</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-muted-foreground">Social XP</p>
            <p className="text-xl font-bold">{user.xpSocial}</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-muted-foreground">Total XP</p>
            <p className="text-xl font-bold">{user.xpTotal}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <p className="text-xs text-muted-foreground">Rank</p>
            <p className="text-lg font-semibold">{user.rank}</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-xs text-muted-foreground">House</p>
            <p className="text-lg font-semibold">{user.house}</p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 space-y-3">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <p className="text-sm text-muted-foreground">No activity yet.</p>
      </div>
    </div>
  );
}
