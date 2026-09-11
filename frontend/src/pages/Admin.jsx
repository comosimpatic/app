import React, { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import Seo from "../components/Seo";
import { adminLogin, fetchInquiries } from "../lib/api";

const TOKEN_KEY = "dfc_admin_token";

const PATHWAY_LABELS = {
  sell: "Sell Through DFX",
  buy: "Buy Through DFX",
  partner: "Partner With DFX",
  invest: "Investment Inquiry",
  press: "Press Inquiry",
  general: "General Inquiry",
};

const PATHWAY_STYLES = {
  sell: "bg-teal/10 text-teal",
  buy: "bg-coral/10 text-coral",
  partner: "bg-navy/10 text-navy",
  invest: "bg-teal/10 text-teal",
  press: "bg-ink-soft/10 text-ink-soft",
  general: "bg-ink-soft/10 text-ink-soft",
};

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return iso;
  }
};

const LoginForm = ({ onLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { token } = await adminLogin(password);
      localStorage.setItem(TOKEN_KEY, token);
      onLoggedIn(token);
    } catch (err) {
      toast.error("Incorrect password.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-5">
      <form onSubmit={handleSubmit} className="w-full max-w-sm border border-parchment-line p-8">
        <h1 className="font-serif text-[22px] mb-1">DFX Admin</h1>
        <p className="text-ink-soft text-[14px] mb-6">Enter the admin password to view submitted inquiries.</p>
        <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Password</label>
        <input
          type="password"
          required
          autoFocus
          className="dfc-field mb-5"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="admin-password"
        />
        <button type="submit" className="btn btn-coral w-full justify-center" disabled={submitting} data-testid="admin-login-submit">
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </section>
  );
};

const InquiriesTable = ({ inquiries, onLogout, onRefresh, loading }) => {
  const [filter, setFilter] = useState("All");
  const pathways = ["All", ...Object.keys(PATHWAY_LABELS)];
  const visible = filter === "All" ? inquiries : inquiries.filter((i) => i.pathway === filter);

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
          <div>
            <p className="text-[13px] font-semibold text-coral mb-2">DFX Admin</p>
            <h1 className="font-serif text-[26px] sm:text-[32px]">Submitted inquiries</h1>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={onRefresh} className="btn btn-outline-dark" data-testid="admin-refresh">
              {loading ? "Refreshing…" : "Refresh"}
            </button>
            <button type="button" onClick={onLogout} className="btn btn-outline-dark" data-testid="admin-logout">
              Log Out
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {pathways.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-3.5 py-1.5 text-[13px] font-medium border transition-colors ${
                filter === p
                  ? "bg-navy text-cream border-navy"
                  : "border-parchment-line text-ink-soft hover:border-teal hover:text-teal"
              }`}
              data-testid={`admin-filter-${p.toLowerCase()}`}
            >
              {p === "All" ? "All" : PATHWAY_LABELS[p]}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-ink-soft text-[15px] py-10 text-center border-t border-parchment-line">
            {inquiries.length === 0 ? "No inquiries submitted yet." : "No inquiries match this filter."}
          </p>
        ) : (
          <div className="space-y-4">
            {visible.map((i) => (
              <div key={i.id} className="border border-parchment-line p-6" data-testid="admin-inquiry-row">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`text-[11.5px] font-semibold px-2.5 py-1 ${PATHWAY_STYLES[i.pathway] || "bg-ink-soft/10 text-ink-soft"}`}>
                      {PATHWAY_LABELS[i.pathway] || i.pathway}
                    </span>
                    <span className="font-serif text-[17px]">{i.name}</span>
                  </div>
                  <span className="text-[13px] text-ink-soft">{formatDate(i.created_at)}</span>
                </div>
                <dl className="grid sm:grid-cols-3 gap-x-8 gap-y-1.5 text-[14px] text-ink-soft mb-3">
                  <div><dt className="inline text-ink-soft/60">Email &middot; </dt><dd className="inline text-ink">{i.email}</dd></div>
                  <div><dt className="inline text-ink-soft/60">Company &middot; </dt><dd className="inline text-ink">{i.company || "—"}</dd></div>
                  <div><dt className="inline text-ink-soft/60">Country &middot; </dt><dd className="inline text-ink">{i.country || "—"}</dd></div>
                </dl>
                <p className="text-[14.5px] text-ink whitespace-pre-wrap">{i.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Admin = () => {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  const load = useCallback(async (t) => {
    setLoading(true);
    try {
      const data = await fetchInquiries(t);
      setInquiries(data);
    } catch (err) {
      if (err?.response?.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        toast.error("Your session expired. Please sign in again.");
      } else {
        toast.error("Could not load inquiries. Please try again.");
      }
    } finally {
      setLoading(false);
      setChecked(true);
    }
  }, []);

  useEffect(() => {
    if (token) load(token);
    else setChecked(true);
  }, [token, load]);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  return (
    <>
      <Seo title="Admin" noIndex />
      {!checked ? null : !token ? (
        <LoginForm onLoggedIn={setToken} />
      ) : (
        <InquiriesTable
          inquiries={inquiries}
          onLogout={handleLogout}
          onRefresh={() => load(token)}
          loading={loading}
        />
      )}
    </>
  );
};

export default Admin;
