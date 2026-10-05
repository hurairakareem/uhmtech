import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="public-page-shell">
        <Navbar overlay />
        <main id="main">{children}</main>
      </div>
      <Footer />
      <Analytics />
    </>
  );
}
