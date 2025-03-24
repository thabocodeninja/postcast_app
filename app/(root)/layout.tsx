import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/RightSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <main>
    <LeftSidebar />
    {children}
  <RightSidebar />
   </main>
  );
}
