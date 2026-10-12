import { useState } from "react";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const initial = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name (at least 2 characters).";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email, like name@example.com.";
  if (values.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);

  const errors = validate(values);
  const show = (field) => touched[field] && errors[field];

  const handleChange = (e) => {
    setSent(false);
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleBlur = (e) => setTouched({ ...touched, [e.target.name]: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) return;

    // No backend: open the visitor's email app with the message filled in.
    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setValues(initial);
    setTouched({});
  };

  const field = (name) =>
    `mt-1 w-full rounded-xl border bg-surface px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-accent ${
      show(name) ? "border-red-400" : "border-ink/25"
    }`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Let's work together">
        Have a brand, campaign or video in mind? Send a message and I'll get back to you.
      </SectionHeading>

      <div className="grid gap-12 lg:grid-cols-2">
        <ul className="space-y-5 text-lg">
          <li>
            <span className="block text-sm text-ink/60">Email</span>
            <a className="font-medium text-accent-soft underline underline-offset-4" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>
          <li>
            <span className="block text-sm text-ink/60">Phone</span>
            <a className="font-medium" href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <span className="block text-sm text-ink/60">Behance</span>
            <a className="font-medium text-accent-soft underline underline-offset-4" href={profile.behance} target="_blank" rel="noreferrer">
              behance.net/busantevisuals
            </a>
          </li>
          <li>
            <span className="block text-sm text-ink/60">Location</span>
            <span className="font-medium">{profile.location}</span>
          </li>
        </ul>

        <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
          <div>
            <label htmlFor="name" className="font-medium">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} onBlur={handleBlur} className={field("name")} aria-invalid={!!show("name")} aria-describedby="name-error" />
            <p id="name-error" className="mt-1 min-h-5 text-sm text-red-400" role="alert">{show("name")}</p>
          </div>
          <div>
            <label htmlFor="email" className="font-medium">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={field("email")} aria-invalid={!!show("email")} aria-describedby="email-error" />
            <p id="email-error" className="mt-1 min-h-5 text-sm text-red-400" role="alert">{show("email")}</p>
          </div>
          <div>
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} onBlur={handleBlur} className={field("message")} aria-invalid={!!show("message")} aria-describedby="message-error" />
            <p id="message-error" className="mt-1 min-h-5 text-sm text-red-400" role="alert">{show("message")}</p>
          </div>

          <button type="submit" className="rounded-full bg-accent px-7 py-3 font-medium text-white transition hover:brightness-110 active:scale-95">
            Send message
          </button>

          {sent && (
            <p className="rounded-xl bg-emerald-500/15 px-4 py-3 text-emerald-300" role="status">
              Message ready. Your email app should open so you can send it.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
