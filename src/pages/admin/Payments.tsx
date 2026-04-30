import AppLayout from "@/components/layout/AppLayout";

const tx = [
  ["#A2401","Eva Rousseau","Couture","€1,240","Paid","Apr 28"],
  ["#A2400","Yuki Tanaka","Maison","€2,400","Paid","Apr 27"],
  ["#A2399","Léo Marchetti","Atelier","€39","Trial","Apr 27"],
  ["#A2398","Mira Hoffman","Couture","€1,240","Refunded","Apr 26"],
  ["#A2397","Olu Adeyemi","Maison","€2,400","Paid","Apr 25"],
];

export default function Payments() {
  return (
    <AppLayout kind="admin">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Treasury</p>
      <h1 className="font-display text-4xl md:text-5xl mt-2">Payments</h1>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[["Gross","€184,260"],["Refunds","€2,480"],["Net","€181,780"]].map(([l,v])=>(
          <div key={l} className="rounded-2xl border hairline p-6 bg-card">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            <p className="font-display text-3xl mt-2">{v}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border hairline bg-card">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr className="text-left">{["ID","Student","Plan","Amount","Status","Date"].map(h=>(
              <th key={h} className="p-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {tx.map(r=>(
              <tr key={r[0]} className="border-t hairline">
                <td className="p-4 font-mono text-xs">{r[0]}</td>
                <td className="p-4 font-display">{r[1]}</td>
                <td className="p-4 text-muted-foreground">{r[2]}</td>
                <td className="p-4">{r[3]}</td>
                <td className="p-4">
                  <span className={`text-[10px] uppercase tracking-[0.2em] rounded-full px-2 py-1
                    ${r[4]==="Paid"?"bg-foreground text-background":r[4]==="Refunded"?"bg-destructive/10 text-destructive":"bg-foreground/5"}`}>{r[4]}</span>
                </td>
                <td className="p-4 text-muted-foreground">{r[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
