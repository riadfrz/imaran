import { siteData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <div className="section-shell">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="panel rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
            <p className="mt-3 text-sm leading-6 text-muted">{siteData.cgv.services}</p>
          </div>
          <div className="panel rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Payment</p>
            <p className="mt-3 text-sm leading-6 text-muted">{siteData.cgv.payment}</p>
          </div>
          <div className="panel rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Revisions</p>
            <p className="mt-3 text-sm leading-6 text-muted">{siteData.cgv.revisions}</p>
          </div>
          <div className="panel rounded-3xl p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Legal</p>
            <p className="mt-3 text-sm leading-6 text-muted">{siteData.cgv.legal}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/6 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{siteData.cgv.cancellation}</p>
          <p>© 2026 Imran Tel · Tous droits reserves</p>
        </div>
      </div>
    </footer>
  );
}
