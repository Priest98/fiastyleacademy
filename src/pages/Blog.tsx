import PublicLayout from "@/components/layout/PublicLayout";
import sketch from "@/assets/course-sketching.jpg";
import drape from "@/assets/course-draping.jpg";
import textile from "@/assets/course-textiles.jpg";

const posts = [
  { t:"The death of the trend forecast", c:"Essay", d:"Apr 22, 2026", img:sketch, r:"6 min" },
  { t:"Why your first capsule should be ugly", c:"Method", d:"Apr 14, 2026", img:drape, r:"4 min" },
  { t:"A field guide to natural dyes", c:"Material", d:"Apr 02, 2026", img:textile, r:"9 min" },
  { t:"Margiela's archive, decoded", c:"Essay", d:"Mar 28, 2026", img:drape, r:"12 min" },
];

export default function Blog() {
  return (
    <PublicLayout>
      <section className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Journal</p>
        <h1 className="font-display text-5xl md:text-7xl mt-4">Dispatches from the atelier.</h1>

        <article className="mt-16 grid lg:grid-cols-2 gap-10 items-end border-b hairline pb-16">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden scanlines">
            <img src={posts[0].img} className="h-full w-full object-cover" alt="" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{posts[0].c} · {posts[0].r}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">{posts[0].t}</h2>
            <p className="mt-4 text-muted-foreground">A long-form essay on what replaces seasonal trend reports in a world where the algorithm is the buyer.</p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">{posts[0].d}</p>
          </div>
        </article>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {posts.slice(1).map(p=>(
            <div key={p.t}>
              <div className="aspect-[4/5] rounded-xl overflow-hidden scanlines">
                <img src={p.img} className="h-full w-full object-cover" alt="" loading="lazy" />
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gold">{p.c} · {p.r}</p>
              <h3 className="font-display text-2xl mt-2">{p.t}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
