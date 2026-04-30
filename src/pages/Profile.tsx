import AppLayout from "@/components/layout/AppLayout";

export default function Profile() {
  return (
    <AppLayout>
      <h1 className="font-display text-4xl md:text-5xl">Profile</h1>
      <div className="mt-10 grid lg:grid-cols-[280px_1fr] gap-10">
        <div className="rounded-2xl border hairline p-6 bg-card text-center">
          <div className="h-32 w-32 mx-auto rounded-full gradient-gold grid place-items-center font-display text-5xl text-foreground">E</div>
          <h2 className="font-display text-2xl mt-4">Eva Rousseau</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">Couture · Spring '26</p>
          <button className="mt-6 w-full rounded-full border hairline py-2.5 text-xs uppercase tracking-[0.2em]">Edit avatar</button>
        </div>
        <div className="space-y-8">
          <Section title="Personal">
            <Field l="Full name" v="Eva Rousseau"/>
            <Field l="Email" v="eva@studio.fr"/>
            <Field l="City" v="Marseille, FR"/>
            <Field l="Portfolio" v="evarousseau.work"/>
          </Section>
          <Section title="Preferences">
            <Field l="Language" v="English"/>
            <Field l="Newsletter" v="Weekly digest"/>
            <Field l="Timezone" v="Europe/Paris"/>
          </Section>
          <Section title="Billing">
            <Field l="Plan" v="Couture · €129/mo"/>
            <Field l="Card" v="•••• 4242"/>
          </Section>
        </div>
      </div>
    </AppLayout>
  );
}
function Section({title,children}:{title:string;children:React.ReactNode}){
  return (
    <div className="rounded-2xl border hairline p-6 bg-card">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</p>
      <div className="mt-4 grid sm:grid-cols-2 gap-5">{children}</div>
    </div>
  );
}
function Field({l,v}:{l:string;v:string}){
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
      <p className="font-display text-lg mt-1">{v}</p>
      <div className="h-px bg-border mt-3"/>
    </div>
  );
}
