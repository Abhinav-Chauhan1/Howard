"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full px-4 py-3 border text-sm outline-none focus:border-[var(--accent)] transition-colors";
const inputStyle = {
  borderColor: "var(--muted)",
  backgroundColor: "var(--bg)",
  fontFamily: "var(--font-body)",
  color: "var(--text)",
};
const labelStyle = {
  fontFamily: "var(--font-heading)",
  color: "var(--text)",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-10 text-center border"
        style={{ borderColor: "var(--accent)", backgroundColor: "var(--muted)" }}
      >
        <span className="text-4xl mb-4 block">✅</span>
        <h3
          className="text-2xl font-normal mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          Message Sent!
        </h3>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-body)", color: "var(--text)", opacity: 0.65 }}
        >
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm underline"
          style={{ fontFamily: "var(--font-heading)", color: "var(--accent)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={labelStyle}>
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full name"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={labelStyle}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={labelStyle}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={labelStyle}>
            Subject
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
            style={inputStyle}
          >
            <option value="">Select subject</option>
            <option value="Admissions Enquiry">Admissions Enquiry</option>
            <option value="Fee Structure">Fee Structure</option>
            <option value="Academic Information">Academic Information</option>
            <option value="Infrastructure">Infrastructure</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={labelStyle}>
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Write your message here..."
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" style={{ fontFamily: "var(--font-body)" }}>
          Failed to send message. Please try WhatsApp or call us directly.
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        disabled={status === "loading"}
        className="w-full justify-center"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
