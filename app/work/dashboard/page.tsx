import { cn } from "@/lib/utils";

export default function WorkDashboardPage() {
  return (
    <div className="space-y-6">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome to your Work HQ — track XP, performance, and activity.
        </p>
      </div>

      {/* GRID: STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="XP" value="0" />
        <StatCard title="Coins" value="0" />
        <StatCard title="Projects" value="0" />
        <StatCard title="Quotes" value="0" />
      </div>

      {/* QUICK ACTIONS */}
      <div>
        <h2 className="text-lg font-medium mb-2">Quick Actions</h2>
        <div className="flex gap-4">
          <QuickAction label="New Quote" />
          <QuickAction label="New Material" />
          <QuickAction label="New Task" />
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div>
        <h2 className="text-lg font-medium mb-2">Recent Activity</h2>
        <div className="border rounded-lg p-4 bg-background/60 h-40 text-sm text-muted-foreground">
          Activity will appear here soon.
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border rounded-lg p-4 bg-background/70 shadow-sm">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="border rounded-md px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition">
      {label}
    </button>
  );
}
