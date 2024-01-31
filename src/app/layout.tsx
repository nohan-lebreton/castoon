import { Metadata } from "next";
// ... other imports

export const metadata: Metadata = {
  manifest: "/manifest.json", // we are accessing our manifest file here
  title: "...",
  // ... other options    
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;