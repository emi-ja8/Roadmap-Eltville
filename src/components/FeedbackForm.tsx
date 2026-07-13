"use client";

import { useState } from "react";
import { validateFeedback } from "@/lib/places";

type FeedbackValues = { type: string; place: string; message: string; ageGroup: string; contact: string };
const initialValues: FeedbackValues = { type: "", place: "", message: "", ageGroup: "", contact: "" };

export function FeedbackForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FeedbackValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FeedbackValues, value: string) => setValues((current) => ({ ...current, [field]: value }));
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateFeedback(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  if (submitted) return <div className="form-success" role="status"><span className="success-icon">✓</span><h3>Danke für deinen Hinweis!</h3><p>Dein Hinweis wurde nur als Demo verarbeitet und wird nicht automatisch veröffentlicht. Für einen echten Versand braucht es später ein geprüftes, datenschutzkonformes Backend.</p><button className="text-button" onClick={() => { setSubmitted(false); setValues(initialValues); }}>Noch einen Hinweis senden</button></div>;

  return <form className="feedback-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <label htmlFor="feedback-type">Worum geht es? <select id="feedback-type" value={values.type} onChange={(event) => update("type", event.target.value)} aria-invalid={Boolean(errors.type)} aria-describedby={errors.type ? "feedback-type-error" : undefined}><option value="">Bitte auswählen</option><option value="new-place">Neuen Ort vorschlagen</option><option value="improvement">Verbesserung melden</option><option value="feedback">Meinung zur Roadmap teilen</option></select>{errors.type && <span id="feedback-type-error" className="field-error">{errors.type}</span>}</label>
      <label htmlFor="feedback-place">Welcher Ort? <input id="feedback-place" value={values.place} onChange={(event) => update("place", event.target.value)} placeholder="z. B. ein Spielplatz" /></label>
      <label className="form-grid__full" htmlFor="feedback-message">Dein Hinweis <textarea id="feedback-message" value={values.message} onChange={(event) => update("message", event.target.value)} placeholder="Was möchtest du uns erzählen?" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "feedback-message-error" : undefined} />{errors.message && <span id="feedback-message-error" className="field-error">{errors.message}</span>}</label>
      <label htmlFor="feedback-age">Altersgruppe (optional) <select id="feedback-age" value={values.ageGroup} onChange={(event) => update("ageGroup", event.target.value)}><option value="">Möchte ich nicht sagen</option><option value="7-12">7–12 Jahre</option><option value="13-17">13–17 Jahre</option><option value="adult">Erwachsene Person</option></select></label>
      <label htmlFor="feedback-contact">Kontakt (optional) <input id="feedback-contact" type="email" value={values.contact} onChange={(event) => update("contact", event.target.value)} placeholder="name@beispiel.de" aria-invalid={Boolean(errors.contact)} aria-describedby={errors.contact ? "feedback-contact-error" : undefined} />{errors.contact && <span id="feedback-contact-error" className="field-error">{errors.contact}</span>}</label>
    </div>
    <div className="form-footer"><p>Bitte keine persönlichen Daten von Kindern eintragen. Das Formular ist im Prototyp nur eine lokale Demo.</p><button className="button button--orange" type="submit">Hinweis absenden <span aria-hidden="true">→</span></button></div>
  </form>;
}
