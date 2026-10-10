import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CakeSlice, ImageOff, Loader2, Lock, LogOut, RefreshCw, Star } from "lucide-react";
import { SITE } from "../siteData";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "fcb_admin_token";

const formatError = (detail) => {
  if (detail == null) return "Something went wrong.";
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((e) => e?.msg || JSON.stringify(e)).join(" ");
  return String(detail);
};

export default function AdminPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [enquiries, setEnquiries] = useState(null);
  const [busyId, setBusyId] = useState(null);

  const load = useCallback(
    async (t) => {
      try {
        const res = await axios.get(`${API}/enquiries`, { headers: { Authorization: `Bearer ${t}` } });
        setEnquiries(res.data);
      } catch (e) {
        if (e.response?.status === 401) {
          sessionStorage.removeItem(TOKEN_KEY);
          setToken(null);
        } else {
          toast.error("Could not load enquiries");
        }
      }
    },
    []
  );

  useEffect(() => {
    if (token) load(token);
  }, [token, load]);

  const login = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(`${API}/auth/login`, { email, password });
      sessionStorage.setItem(TOKEN_KEY, res.data.token);
      setToken(res.data.token);
    } catch (err) {
      setError(formatError(err.response?.data?.detail));
    }
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setEnquiries(null);
  };

  const toggleFeature = async (id) => {
    setBusyId(id);
    try {
      const res = await axios.post(`${API}/admin/enquiries/${id}/feature`, {}, { headers: { Authorization: `Bearer ${token}` } });
      setEnquiries((prev) => prev.map((en) => (en.id === id ? { ...en, is_featured: res.data.is_featured } : en)));
      toast.success(res.data.is_featured ? "Added to public gallery" : "Removed from gallery");
    } catch (e) {
      toast.error(formatError(e.response?.data?.detail));
    } finally {
      setBusyId(null);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-[#140F0E] flex items-center justify-center px-4">
        <form onSubmit={login} data-testid="admin-login-form" className="w-full max-w-sm bg-[#1E1614] border border-[rgba(212,175,55,0.25)] rounded-3xl p-8">
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-9 h-9 rounded-full bg-[#EC4899]/15 border border-[#EC4899]/40 flex items-center justify-center">
              <CakeSlice className="w-5 h-5 text-[#EC4899]" />
            </span>
            <span className="font-serif-display font-bold text-lg text-amber-50">FCB Admin</span>
          </div>
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Email</label>
          <input data-testid="admin-input-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#140F0E] border border-[rgba(212,175,55,0.2)] focus:border-[#D4AF37] outline-none rounded-xl px-4 py-3 text-sm text-amber-50 mb-4" />
          <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Password</label>
          <input data-testid="admin-input-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#140F0E] border border-[rgba(212,175,55,0.2)] focus:border-[#D4AF37] outline-none rounded-xl px-4 py-3 text-sm text-amber-50" />
          {error && <p data-testid="admin-login-error" className="mt-3 text-sm text-red-400">{error}</p>}
          <button type="submit" data-testid="admin-login-button" className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#E5B869] text-[#140F0E] font-semibold py-3 rounded-full transition-colors">
            <Lock className="w-4 h-4" /> Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#140F0E] text-amber-50">
      <header className="border-b border-[rgba(212,175,55,0.15)] glass sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <span className="font-serif-display font-bold text-lg">Enquiries <span className="text-[#EC4899]">& Gallery</span></span>
          <div className="flex items-center gap-3">
            <button data-testid="admin-refresh-button" onClick={() => load(token)} className="p-2 text-neutral-300 hover:text-[#D4AF37] transition-colors" aria-label="Refresh">
              <RefreshCw className="w-4 h-4" />
            </button>
            <a href="/" data-testid="admin-back-link" className="text-sm text-neutral-400 hover:text-amber-100 transition-colors">View Site</a>
            <button data-testid="admin-logout-button" onClick={logout} className="inline-flex items-center gap-1.5 text-sm text-neutral-300 hover:text-red-400 transition-colors">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10">
        <p className="text-sm text-neutral-400 mb-8">
          Tap <span className="text-[#D4AF37] font-semibold">Feature in Gallery</span> on any enquiry with a photo to publish it on the website's gallery. Customer names and phone numbers are never shown publicly.
        </p>
        {enquiries === null ? (
          <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-[#D4AF37]" /></div>
        ) : enquiries.length === 0 ? (
          <p data-testid="admin-empty-state" className="text-neutral-400 text-sm">No enquiries yet.</p>
        ) : (
          <div data-testid="admin-enquiries-list" className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {enquiries.map((en) => (
              <article key={en.id} data-testid={`admin-enquiry-${en.id}`} className="bg-[#1E1614] border border-[rgba(212,175,55,0.15)] rounded-2xl p-5 flex gap-4">
                {en.photo_path ? (
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/api/files/${en.photo_path}`} alt={`${en.cake_type} reference`} className="w-24 h-24 rounded-xl object-cover border border-[rgba(212,175,55,0.25)] shrink-0" />
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-[#140F0E] border border-white/10 flex items-center justify-center shrink-0">
                    <ImageOff className="w-5 h-5 text-neutral-600" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-sm">{en.name} <span className="text-neutral-500 font-normal">· {en.phone}</span></p>
                      <p className="text-xs text-[#D4AF37] mt-0.5">{en.cake_type}{en.weight ? ` · ${en.weight}` : ""}{en.event_date ? ` · by ${en.event_date}` : ""}</p>
                    </div>
                    {en.is_featured && (
                      <span data-testid={`admin-featured-badge-${en.id}`} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-[#EC4899] shrink-0">
                        <Star className="w-3 h-3 fill-[#EC4899]" /> In Gallery
                      </span>
                    )}
                  </div>
                  {en.message && <p className="text-xs text-neutral-400 mt-2 line-clamp-2">{en.message}</p>}
                  <div className="mt-3 flex items-center gap-3">
                    {en.photo_path && (
                      <button
                        data-testid={`admin-feature-btn-${en.id}`}
                        disabled={busyId === en.id}
                        onClick={() => toggleFeature(en.id)}
                        className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors disabled:opacity-50 ${
                          en.is_featured
                            ? "border border-[#EC4899]/50 text-[#EC4899] hover:bg-[#EC4899]/10"
                            : "bg-[#D4AF37] hover:bg-[#E5B869] text-[#140F0E]"
                        }`}
                      >
                        {busyId === en.id ? "…" : en.is_featured ? "Remove from Gallery" : "Feature in Gallery"}
                      </button>
                    )}
                    <span className="text-[11px] text-neutral-600">{new Date(en.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
