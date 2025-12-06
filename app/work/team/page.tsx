export default function WorkTeamPage() {
  const team = [
    { name: "Ros", role: "QS", xp: 1200 },
    { name: "Zaki", role: "Production", xp: 900 },
    { name: "Afiq", role: "Site", xp: 760 },
    { name: "Izzah", role: "Admin", xp: 540 },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">Work Team</h1>
        <p className="text-sm text-muted-foreground">
          Senarai department & anggota Mensteel (dummy data).
        </p>
      </header>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Role</th>
              <th className="text-right px-4 py-2">Work XP</th>
            </tr>
          </thead>

          <tbody>
            {team.map((member, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{member.name}</td>
                <td className="px-4 py-2">{member.role}</td>
                <td className="px-4 py-2 text-right">{member.xp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
