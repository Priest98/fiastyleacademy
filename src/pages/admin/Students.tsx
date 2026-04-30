import AppLayout from "@/components/layout/AppLayout";
import { Search } from "lucide-react";

const rows = [
  ["Eva Rousseau","eva@studio.fr","Couture","58%","Active"],
  ["Yuki Tanaka","yuki@tk.jp","Maison","92%","Active"],
  ["Léo Marchetti","leo@mi.it","Atelier","31%","Trial"],
  ["Amina Kessler","amina@de.com","Couture","100%","Alumni"],
  ["Priya Shah","priya@in.com","Maison","74%","Active"],
];

export default function Students() {
  return (
    <AppLayout kind="admin">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cohort</p>
          <h1 className="font-display text-4xl md:text-5xl mt-2">Students</h1>
        </div>
        <div className="flex items-center gap-2 rounded-full border hairline px-4 py-2 bg-card">
          <Search className="h-3.5 w-3.5 text-muted-foreground"/>
          <input placeholder="Search students…" className="bg-transparent outline-none text-sm w-48"/>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border hairline bg-card">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr className="text-left">
              {["Name","Email","Tier","Progress","Status",""].map(h=>(
                <th key={h} className="p-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r[1]} className="border-t hairline">
                <td className="p-4 font-display text-base">{r[0]}</td>
                <td className="p-4 text-muted-foreground">{r[1]}</td>
                <td className="p-4">{r[2]}</td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1 bg-foreground/10 rounded-full overflow-hidden"><div className="h-full bg-foreground" style={{width:r[3]}}/></div>
                    <span className="font-mono text-xs">{r[3]}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] rounded-full px-2 py-1 bg-foreground/5">{r[4]}</span>
                </td>
                <td className="p-4 text-right text-muted-foreground">→</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  );
}
