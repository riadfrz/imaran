import { siteData } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-[#c8a96e] tracking-[0.3em] text-sm">{siteData.name}</p>
        <p className="text-xs text-[#f5f5f0]/20 tracking-widest uppercase">
          {siteData.title} — {year}
        </p>
      </div>
    </footer>
  );
}
