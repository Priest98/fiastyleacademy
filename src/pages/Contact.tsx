import PublicLayout from "@/components/layout/PublicLayout";

export default function Contact() {
  return (
    <PublicLayout>
      <section className="container grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Get in touch</p>
          <h1 className="font-display text-5xl md:text-7xl mt-4">Tell us what<br/>you're making.</h1>
          <div className="mt-12 space-y-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Paris atelier</p>
              <p className="mt-1">14 rue de Saintonge, 75003</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</p>
              <p className="mt-1">studio@atelier.school</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Press</p>
              <p className="mt-1">press@atelier.school</p>
            </div>
          </div>
        </div>
        <form className="rounded-2xl border hairline p-8 bg-card space-y-5">
          <Field label="Name" />
          <Field label="Email" type="email" />
          <Field label="Topic" />
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea rows={5} className="mt-2 w-full bg-transparent border-b hairline focus:border-foreground outline-none py-2 text-sm" />
          </div>
          <button className="rounded-full bg-foreground text-background px-6 py-3.5 text-xs uppercase tracking-[0.2em] w-full">Send message</button>
        </form>
      </section>
    </PublicLayout>
  );
}

function Field({ label, type="text" }:{label:string;type?:string}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input type={type} className="mt-2 w-full bg-transparent border-b hairline focus:border-foreground outline-none py-2 text-sm" />
    </div>
  );
}
