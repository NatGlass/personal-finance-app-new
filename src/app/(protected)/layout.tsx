import Sidebar from "@/components/navigation/sidebar";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full">
      <Sidebar />
      <main className="md:ml-[300px]">{children}</main>
    </div>
  );
}

export default ProtectedLayout;
