export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Settings ⚙️</h1>
      <p className="text-sm text-muted-foreground">
        Customize your account, theme, and universe preferences.
      </p>

      <div className="border rounded-lg p-4 bg-background">
        <p className="text-sm opacity-70">
          Theme, profile, accent color and AI settings will appear here.
        </p>
      </div>
    </div>
  );
}
