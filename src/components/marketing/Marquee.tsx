const items = ["Pattern making","Draping","Textile science","Brand strategy","Couture sewing","Fashion illustration","Sustainable design","Runway production"];

export default function Marquee() {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y hairline py-4 bg-surface">
      <div className="ticker flex gap-12 whitespace-nowrap">
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-xs uppercase tracking-[0.3em] text-foreground/60">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
