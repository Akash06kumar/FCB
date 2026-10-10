import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CakeSlice, Send } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const CAKE_TYPES = ["Royal Special Cake", "Pineapple Cake", "Fresh Fruit Cake", "Pastries", "Custom / Wedding Cake", "Other"];
const WEIGHTS = ["500 g", "1 pound", "2 pounds", "3 pounds", "5+ pounds / tiered"];

export const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", cake_type: CAKE_TYPES[0], weight: WEIGHTS[1], event_date: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/enquiries`, form);
      toast.success("Enquiry sent! We'll call you back shortly to confirm your order.");
      setForm({ name: "", phone: "", cake_type: CAKE_TYPES[0], weight: WEIGHTS[1], event_date: "", message: "" });
    } catch (err) {
      toast.error("Could not send enquiry. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-[#140F0E] border border-[rgba(212,175,55,0.2)] focus:border-[#D4AF37] outline-none rounded-xl px-4 py-3 text-sm text-amber-50 placeholder:text-neutral-500 transition-colors";

  return (
    <section id="order" data-testid="enquiry-form-section" className="py-16 md:py-24 bg-[#140F0E] grain-overlay relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#EC4899] mb-3">Made To Order</p>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 leading-tight">
            Tell us your celebration, <span className="gold-text italic">we'll bake it</span>
          </h2>
          <p className="mt-5 text-sm text-neutral-400 leading-relaxed max-w-md">
            Birthdays, weddings, anniversaries or just a Tuesday craving — share your details and we'll call back to confirm flavours, design and delivery.
          </p>
          <div className="mt-8 flex items-center gap-4 bg-[#1E1614] border border-[rgba(212,175,55,0.2)] rounded-2xl p-5 max-w-md">
            <CakeSlice className="w-8 h-8 text-[#EC4899] shrink-0" />
            <p className="text-sm text-neutral-300">
              Custom photo cakes & two-tier designs need <span className="text-amber-100 font-semibold">24 hrs notice</span>. Same-day pickup for counter cakes.
            </p>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 bg-[#1E1614] rounded-3xl border border-[rgba(212,175,55,0.2)] p-6 sm:p-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Your Name</label>
              <input data-testid="enquiry-input-name" required minLength={2} value={form.name} onChange={set("name")} placeholder="e.g. Ritu Sharma" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Phone Number</label>
              <input data-testid="enquiry-input-phone" required minLength={8} value={form.phone} onChange={set("phone")} placeholder="10-digit mobile" className={inputCls} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Cake Type</label>
              <select data-testid="enquiry-select-cake-type" value={form.cake_type} onChange={set("cake_type")} className={inputCls}>
                {CAKE_TYPES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Size / Weight</label>
              <select data-testid="enquiry-select-weight" value={form.weight} onChange={set("weight")} className={inputCls}>
                {WEIGHTS.map((w) => (
                  <option key={w}>{w}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Needed By (Date)</label>
              <input data-testid="enquiry-input-date" type="date" value={form.event_date} onChange={set("event_date")} className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Message / Design Notes</label>
              <textarea data-testid="enquiry-input-message" rows={3} value={form.message} onChange={set("message")} placeholder="Flavour, message on cake, delivery address…" className={inputCls} />
            </div>
          </div>
          <button
            type="submit"
            data-testid="enquiry-submit-button"
            disabled={loading}
            className="mt-7 inline-flex items-center gap-2 bg-[#EC4899] hover:bg-[#F472B6] disabled:opacity-60 text-white font-semibold px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-[0_0_30px_rgba(236,72,153,0.3)]"
          >
            <Send className="w-4 h-4" /> {loading ? "Sending…" : "Send Order Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};
