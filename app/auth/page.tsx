"use client";

export default function AuthPage() {
  return (
    <div className="space-y-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold text-center">Login to Roxy</h1>
      <p className="text-sm text-muted-foreground text-center">
        Choose your access mode: Work Realm or Social Realm.
      </p>

      <div className="border rounded-lg p-4 bg-background text-center">
        <p className="text-sm opacity-70">
          Authentication will be enabled soon (Supabase + Google).
        </p>
      </div>
    </div>
  );
}
