import { AuthProvider } from "@/lib/auth-provider";
import "@/app/globals.css";

export const metadata = {
  title: "RehabFlow AI",
  description: "Advanced AI Rehabilitation System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
