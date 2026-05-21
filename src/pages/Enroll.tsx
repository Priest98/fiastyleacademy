import PublicLayout from "@/components/layout/PublicLayout";
import { Check, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const steps = ["Program", "Details", "Payment"];

const programs = [
  { n: "3 Month Intermediate Class", p: "₦100,000", priceVal: 100000 },
  { n: "3 Month Advanced Class", p: "₦100,000", priceVal: 100000 },
  { n: "1 Month Corsetry Masterclass", p: "₦50,000", priceVal: 50000 }
];

export default function Enroll() {
  const [step, setStep] = useState(0);
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'flutterwave' | 'bank_transfer' | null>(null);
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get("course");

  useEffect(() => {
    if (courseParam) {
      if (courseParam === "intermediate-class") {
        setSelectedProgramIndex(0);
      } else if (courseParam === "advanced-class") {
        setSelectedProgramIndex(1);
      } else if (courseParam === "corsetry-masterclass") {
        setSelectedProgramIndex(2);
      }
    }
  }, [courseParam]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    portfolioLink: ""
  });

  const selectedProgram = programs[selectedProgramIndex];

  const getWhatsappLink = (method: 'flutterwave' | 'bank_transfer') => {
    const message = method === 'flutterwave' 
      ? `Hello Fiatstyle Academy,

I have successfully made an online payment via Flutterwave for:
• Name: ${formData.firstName.trim()} ${formData.lastName.trim()}
• Email: ${formData.email.trim()}
• Program: ${programs[selectedProgramIndex].n}
• Amount: ${programs[selectedProgramIndex].p}`
      : `Hello Fiatstyle Academy,

I have completed a manual Bank Transfer for my enrollment:
• Name: ${formData.firstName.trim()} ${formData.lastName.trim()}
• Email: ${formData.email.trim()}
• Program: ${programs[selectedProgramIndex].n}
• Amount: ${programs[selectedProgramIndex].p}

I am sending my payment receipt for manual verification.`;

    return `https://wa.me/2348105073034?text=${encodeURIComponent(message)}`;
  };

  const handleNextStep = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
        alert("Please fill in the required fields: First name, Last name, and Email.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      handleFlutterwavePayment();
    }
  };

  const handleFlutterwavePayment = () => {
    if (!formData.email || !formData.firstName || !formData.lastName) {
      alert("Please complete the details step to fill in your contact information.");
      setStep(1);
      return;
    }

    const pubKey = (import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string) || "FLWPUBK_TEST-e0fa65d958561ea9082ef850406ef5a6-X";
    console.log("Initializing Flutterwave payment with Public Key:", pubKey);

    // Dynamic config for Flutterwave Checkout standard popup
    const flutterwaveConfig = {
      public_key: pubKey,
      tx_ref: `FS-${Date.now()}`,
      amount: selectedProgram.priceVal,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      customer: {
        email: formData.email.trim(),
        phone_number: formData.phone.trim(),
        name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
      },
      customizations: {
        title: "Fiatstyle Fashion Academy",
        description: `Enrollment fee for ${selectedProgram.n}`,
        logo: "https://fiatstyleacademy.com/logo.png",
      },
      callback: (data: any) => {
        console.log("Payment response:", data);
        if (data.status === "successful" || data.status === "completed") {
          setPaymentMethod('flutterwave');
          setStep(3); // Success Screen
          window.open(getWhatsappLink('flutterwave'), "_blank");
        } else {
          alert("Payment was not successful. Please try again.");
        }
      },
      onclose: () => {
        console.log("Payment modal closed by user");
      }
    };

    // Trigger Flutterwave inline checkout popup
    if ((window as any).FlutterwaveCheckout) {
      (window as any).FlutterwaveCheckout(flutterwaveConfig);
    } else {
      const script = document.createElement("script");
      script.src = "https://checkout.flutterwave.com/v3.js";
      script.onload = () => {
        (window as any).FlutterwaveCheckout(flutterwaveConfig);
      };
      document.body.appendChild(script);
    }
  };

  return (
    <PublicLayout>
      <section className="editorial-container section-padding-lg">
        <p className="label text-muted-foreground">Enrollment · 2026 Intake</p>
        <h1 className="mt-4">Reserve your seat.</h1>
        <p className="mt-4 text-lg text-muted-foreground font-light italic">"Takes less than 1 minute — Secure your future in fashion."</p>

        {/* Form Steps Progress */}
        {step < 3 && (
          <div className="mt-8 md:mt-12 flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 shrink-0">
                <div className={`h-10 w-10 rounded-full grid place-items-center text-[10px] font-mono ${i <= step ? "bg-foreground text-background" : "bg-foreground/10"}`}>
                  {i + 1}
                </div>
                <span className="label">{s}</span>
                {i < steps.length - 1 && <span className="w-8 md:w-12 h-px bg-border mx-2 md:mx-3" />}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 md:mt-12 grid lg:grid-cols-[1fr_360px] gap-8 md:gap-10">
          <div className="rounded-xl border border-black/5 p-6 md:p-8 bg-card min-h-[300px]">
            {/* Step 0: Program Choice */}
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-display text-xl md:text-2xl">Choose your program</h2>
                {programs.map((item, i) => (
                  <label 
                    key={i} 
                    className={`flex items-center gap-4 p-4 md:p-5 rounded-none border cursor-pointer hover:bg-neutral-50 transition-all ${
                      selectedProgramIndex === i ? "border-black bg-neutral-50/50" : "border-black/10"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="prog" 
                      checked={selectedProgramIndex === i}
                      onChange={() => setSelectedProgramIndex(i)}
                      className="accent-black" 
                    />
                    <div className="flex flex-col">
                      <span className="font-display text-base md:text-lg uppercase tracking-tight">{item.n}</span>
                      <span className="text-xs text-muted-foreground">{item.p}</span>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {/* Step 1: Details */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-display text-xl md:text-2xl mb-4">Your Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="label text-muted-foreground mb-2 block">First name *</label>
                    <input 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Olu"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="label text-muted-foreground mb-2 block">Last name *</label>
                    <input 
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Adeyemi"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="label text-muted-foreground mb-2 block">Email *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. olu@example.com"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="label text-muted-foreground mb-2 block">Phone</label>
                    <input 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 812 345 6789"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="label text-muted-foreground mb-2 block">City</label>
                    <input 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Lagos"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                  <div>
                    <label className="label text-muted-foreground mb-2 block">Portfolio link (Optional)</label>
                    <input 
                      value={formData.portfolioLink}
                      onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                      placeholder="e.g. behance.net/yourname"
                      className="mt-2 w-full bg-transparent border-b border-black/10 focus:border-black outline-none py-2 text-sm transition-all" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="space-y-6 md:space-y-8">
                <h2 className="font-display text-xl md:text-2xl">Payment Selection</h2>
                
                {/* Bank Transfer Box */}
                <div className="rounded-xl border border-black/5 p-8 bg-neutral-50 shadow-soft space-y-4">
                  <div>
                    <p className="label text-muted-foreground">Bank Transfer (Manual verification)</p>
                    <p className="mt-2 font-display text-lg text-black">Guaranty Trust Bank</p>
                    <p className="font-mono text-sm tracking-widest mt-1 text-neutral-800">0123456789 · Fiatstyle Academy</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
                      Send proof of payment to admissions@fiatstyleacademy.com
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setPaymentMethod('bank_transfer');
                      setStep(3);
                      window.open(getWhatsappLink('bank_transfer'), "_blank");
                    }}
                    className="w-full py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                  >
                    I've Made The Transfer (Send Receipt)
                  </button>
                </div>

                {/* Online secure gateway payment options */}
                <div className="space-y-4">
                  <p className="label text-muted-foreground">Secure Online Payment</p>
                  <button 
                    onClick={handleFlutterwavePayment}
                    className="btn-luxury-primary w-full py-3.5 text-[11px] tracking-[0.25em] font-bold bg-black text-white hover:bg-neutral-900 transition-all flex items-center justify-center gap-3 rounded-none shadow-soft"
                  >
                    <CreditCard className="h-4 w-4" /> Pay with Flutterwave (₦{selectedProgram.priceVal.toLocaleString()})
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Success Screen */}
            {step === 3 && (
              <div className="text-center py-10 space-y-6">
                <div className="h-16 w-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto shadow-soft">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight">
                  {paymentMethod === 'bank_transfer' ? "Admission Requested!" : "Enrollment Confirmed!"}
                </h2>
                
                {paymentMethod === 'bank_transfer' ? (
                  <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed font-light">
                    Thank you, <strong>{formData.firstName}</strong>. We have received your admission request for the <strong>{selectedProgram.n}</strong>. Please send your bank transfer proof/receipt to verify your payment and finalize your enrollment.
                  </p>
                ) : (
                  <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed font-light">
                    Thank you for enrolling in our <strong>{selectedProgram.n}</strong>. A confirmation email has been sent to <strong>{formData.email}</strong>. We have automatically opened WhatsApp so you can connect with us directly.
                  </p>
                )}

                <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                  {paymentMethod && (
                    <a 
                      href={getWhatsappLink(paymentMethod)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury-primary px-8 py-3 text-[10px] bg-green-600 text-white rounded-none hover:bg-green-700 transition-colors uppercase tracking-[0.2em] flex items-center gap-2 border-none"
                    >
                      {paymentMethod === 'bank_transfer' ? "Send Receipt via WhatsApp" : "Open WhatsApp"}
                    </a>
                  )}
                  <Link to="/" className="btn-luxury-primary px-8 py-3 text-[10px] bg-black text-white rounded-none hover:bg-neutral-900 transition-colors uppercase tracking-[0.2em] border-none">
                    Return to Homepage
                  </Link>
                </div>
              </div>
            )}

            {/* Previous & Next Buttons */}
            {step < 3 && (
              <div className="mt-12 flex justify-between items-center border-t border-black/5 pt-6">
                <button 
                  onClick={() => setStep(s => Math.max(0, s - 1))} 
                  disabled={step === 0}
                  className={`text-[10px] uppercase tracking-[0.3em] transition-colors ${
                    step === 0 ? "text-neutral-300 cursor-not-allowed" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  ← Previous
                </button>
                {step < 2 && (
                  <button onClick={handleNextStep} className="btn-luxury-primary px-6 py-2.5 text-[10px]">
                    Next Step
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Sidebar Bill Summary */}
          {step < 3 && (
            <aside className="rounded-xl border border-black/5 p-8 bg-neutral-50 h-max shadow-luxury">
              <p className="label text-muted-foreground">Application Details</p>
              <div className="mt-4 space-y-3 text-sm">
                <Row l={selectedProgram.n} v={selectedProgram.p} />
                <Row l="Tax / Fees" v="Included" />
              </div>
              <div className="mt-8 pt-8 border-t border-black/5 flex justify-between items-end">
                <span className="label">Total</span>
                <span className="font-display text-4xl">{selectedProgram.p}</span>
              </div>
              <ul className="mt-10 space-y-4 text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
                {["Secure SSL Payment", "Lifetime Alumni Group", "2026 Batch Enrollment", "Join 1,000+ Successful Alumni"].map(x => (
                  <li key={x} className="flex gap-3 items-center">
                    <Check className="h-3 w-3 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-neutral-50 border border-black/5 rounded-lg">
                <p className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground leading-relaxed">
                  "Fiatstyle Academy transformed my career. The technical depth is unmatched."
                </p>
                <p className="mt-2 text-[10px] font-bold text-gold uppercase tracking-widest">— Olu Adeyemi, Alumni</p>
              </div>
            </aside>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

function Row({ l, v }: { l: string; v: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{l}</span>
      <span>{v}</span>
    </div>
  );
}
