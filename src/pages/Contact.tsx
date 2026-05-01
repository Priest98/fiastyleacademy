import PublicLayout from "@/components/layout/PublicLayout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PublicLayout>
      <section className="editorial-container section-padding-lg">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="label text-gold mb-6 block">Contact Us</span>
              <h1 className="text-balance mb-12">
                Begin Your <br />
                <span className="italic text-gold">Application</span>
              </h1>
              <div className="space-y-10">
                <div>
                  <p className="label text-muted-foreground mb-2">General Inquiries</p>
                  <p className="font-display text-2xl uppercase">studio@fiatstyle.academy</p>
                </div>
                <div>
                  <p className="label text-muted-foreground mb-2">WhatsApp / Phone</p>
                  <p className="font-display text-2xl uppercase">+234 813 204 9363</p>
                </div>
                <div>
                  <p className="label text-muted-foreground mb-2">Location</p>
                  <p className="font-display text-2xl uppercase">Ilorin, Nigeria</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 md:space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <Field label="Full Name" placeholder="e.g. Adebayo Roland" />
                <Field label="Email Address" type="email" placeholder="email@domain.com" />
              </div>
              <Field label="Program of Interest" placeholder="e.g. Intermediate Class" />
              <div>
                <label className="label text-muted-foreground block mb-4">Your Vision</label>
                <textarea 
                  rows={3} 
                  placeholder="Tell us about your background and design goals..."
                  className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-2 md:py-4 text-base md:text-lg font-light transition-all resize-none" 
                />
              </div>
              <button className="btn-luxury-primary px-16 py-6 w-full md:w-auto">
                Request Admission
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div className="w-full">
      <label className="label text-muted-foreground block mb-4">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-black/20 focus:border-black outline-none py-4 text-lg font-light transition-all" 
      />
    </div>
  );
}
