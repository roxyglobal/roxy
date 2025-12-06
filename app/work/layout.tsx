import WorkSidebar from "@/components/ui/work-sidebar";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <WorkSidebar />
      
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
