import React, { useState } from "react";
import { toast } from "sonner";
import { submitInquiry } from "../lib/api";

const PATHWAY_LABELS = {
  sell: "Sell Through DFC",
  buy: "Buy Through DFC",
  partner: "Partner With DFC",
  invest: "Investment Inquiry",
  press: "Press Inquiry",
  general: "General Inquiry",
};

const InquiryForm = ({
  pathway,
  pathwayOptions,
  submitLabel = "Submit",
  className = "",
  testIdPrefix = "inquiry",
}) => {
  const [form, setForm] = useState({
    pathway: pathway || (pathwayOptions ? pathwayOptions[0] : "general"),
    name: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | done

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setStatus("submitting");
    try {
      await submitInquiry(form);
      setStatus("done");
      toast.success("Thank you — DFC will be in touch shortly.");
    } catch (err) {
      setStatus("idle");
      toast.error("Something went wrong submitting your inquiry. Please try again.");
    }
  };

  if (status === "done") {
    return (
      <div className={`border border-parchment-line bg-white px-6 py-8 ${className}`} data-testid={`${testIdPrefix}-success`}>
        <p className="font-serif text-[20px] text-ink mb-2">Inquiry received.</p>
        <p className="text-ink-soft text-[15px]">
          A member of the DFC team will follow up on your {PATHWAY_LABELS[form.pathway] || "inquiry"} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} data-testid={`${testIdPrefix}-form`}>
      {pathwayOptions && (
        <div>
          <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">I want to</label>
          <select
            className="dfc-field"
            value={form.pathway}
            onChange={update("pathway")}
            data-testid={`${testIdPrefix}-pathway`}
          >
            {pathwayOptions.map((p) => (
              <option key={p} value={p}>{PATHWAY_LABELS[p] || p}</option>
            ))}
          </select>
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Full name *</label>
          <input
            required
            className="dfc-field"
            value={form.name}
            onChange={update("name")}
            data-testid={`${testIdPrefix}-name`}
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Email *</label>
          <input
            required
            type="email"
            className="dfc-field"
            value={form.email}
            onChange={update("email")}
            data-testid={`${testIdPrefix}-email`}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Company</label>
          <input
            className="dfc-field"
            value={form.company}
            onChange={update("company")}
            data-testid={`${testIdPrefix}-company`}
          />
        </div>
        <div>
          <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Country</label>
          <input
            className="dfc-field"
            value={form.country}
            onChange={update("country")}
            data-testid={`${testIdPrefix}-country`}
          />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-semibold text-ink-soft mb-1.5">Message *</label>
        <textarea
          required
          rows={4}
          className="dfc-field"
          value={form.message}
          onChange={update("message")}
          data-testid={`${testIdPrefix}-message`}
        />
      </div>
      <button type="submit" className="btn btn-coral" disabled={status === "submitting"} data-testid={`${testIdPrefix}-submit`}>
        {status === "submitting" ? "Submitting…" : submitLabel}
      </button>
    </form>
  );
};

export default InquiryForm;
