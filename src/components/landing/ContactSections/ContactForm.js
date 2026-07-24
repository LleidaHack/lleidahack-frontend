import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { contacte } from "src/services/AuthenticationService";

/* ── Feedback states ── */
const SuccessState = ({ onGoHome }) => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6">
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
      style={{ background: "rgba(20, 212, 85, 0.12)" }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#14D455" strokeWidth="2.5">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold mb-3" style={{ color: "#232323" }}>
      Missatge enviat!
    </h2>
    <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: "#777" }}>
      Gràcies per contactar amb LleidaHack. Et respondrem al correu que ens has proporcionat.
    </p>
    <button
      onClick={onGoHome}
      className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200"
      style={{ background: "#FF7430" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#e55010")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#FF7430")}
    >
      Tornar al inici
    </button>
  </div>
);

const ErrorState = ({ onRetry }) => (
  <div className="flex flex-col items-center justify-center text-center py-16 px-6">
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
      style={{ background: "rgba(229, 80, 16, 0.12)" }}
    >
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E55010" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
    <h2 className="text-2xl font-bold mb-3" style={{ color: "#232323" }}>
      Quelcom ha fallat
    </h2>
    <p className="text-base leading-relaxed mb-2 max-w-sm" style={{ color: "#777" }}>
      No hem pogut enviar el teu missatge. Torna-ho a intentar o contacta'ns directament.
    </p>
    <p className="text-sm mb-8" style={{ color: "#aaa" }}>
      Alternativament, escriu-nos a{" "}
      <a href="mailto:info@lleidahack.dev" className="no-underline" style={{ color: "#FF7430" }}>
        info@lleidahack.dev
      </a>
    </p>
    <button
      onClick={onRetry}
      className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200"
      style={{ background: "#E55010" }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      Tornar a intentar
    </button>
  </div>
);

/* ── Input helper ── */
const Field = ({ label, required, error, children }) => (
  <div>
    <label
      className="block text-sm font-medium mb-1.5"
      style={{ color: "#374151" }}
    >
      {label}
      {required && <span className="ml-1" style={{ color: "#FF7430" }}>*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1.5 text-xs flex items-center gap-1" style={{ color: "#E55010" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        {error.message}
      </p>
    )}
  </div>
);

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl border text-sm transition-all duration-200 outline-none focus:ring-2 ${
    hasError
      ? "border-red-300 bg-red-50 focus:ring-red-200"
      : "border-gray-200 bg-gray-50 focus:border-orange-400 focus:ring-orange-100 focus:bg-white"
  }`;

/* ── Main form ── */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [mailSended, setMailSended] = useState(false);
  const [mailStatus, setMailStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = {
        name: data.nom + " " + data.cognoms,
        email: data.email,
        title: data.assumpte,
        message: data.missatge,
      };
      const success = await contacte(formData);
      setMailStatus(success);
      setMailSended(true);
      if (success) reset();
    } catch {
      setMailStatus(false);
      setMailSended(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => { setMailSended(false); setMailStatus(false); };
  const handleGoHome = () => { window.location.href = "/lleidahack/"; };

  if (mailSended) {
    return mailStatus
      ? <SuccessState onGoHome={handleGoHome} />
      : <ErrorState onRetry={handleRetry} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      {/* Nom + Cognoms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom" required error={errors.nom}>
          <input
            type="text"
            placeholder="El teu nom"
            className={inputClass(errors.nom)}
            {...register("nom", {
              required: "El nom no pot estar buit",
              minLength: { value: 2, message: "Mínim 2 caràcters" },
            })}
            disabled={isLoading}
          />
        </Field>
        <Field label="Cognoms" required error={errors.cognoms}>
          <input
            type="text"
            placeholder="Els teus cognoms"
            className={inputClass(errors.cognoms)}
            {...register("cognoms", {
              required: "Els cognoms no poden estar buits",
              minLength: { value: 2, message: "Mínim 2 caràcters" },
            })}
            disabled={isLoading}
          />
        </Field>
      </div>

      {/* Email + Assumpte */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Correu electrònic" required error={errors.email}>
          <input
            type="email"
            placeholder="correu@exemple.com"
            className={inputClass(errors.email)}
            {...register("email", {
              required: "El correu és obligatori",
              pattern: { value: /^\S+@\S+$/i, message: "El correu no és vàlid" },
            })}
            disabled={isLoading}
          />
        </Field>
        <Field label="Assumpte" required error={errors.assumpte}>
          <input
            type="text"
            placeholder="Sobre què ens escrius?"
            className={inputClass(errors.assumpte)}
            {...register("assumpte", {
              required: "L'assumpte no pot estar buit",
              minLength: { value: 3, message: "Mínim 3 caràcters" },
            })}
            disabled={isLoading}
          />
        </Field>
      </div>

      {/* Missatge */}
      <Field label="Missatge" required error={errors.missatge}>
        <textarea
          placeholder="Explica'ns en detall en què et podem ajudar..."
          rows="6"
          className={`${inputClass(errors.missatge)} resize-y`}
          {...register("missatge", {
            required: "El missatge no pot estar buit",
            minLength: { value: 10, message: "Mínim 10 caràcters" },
          })}
          disabled={isLoading}
        />
      </Field>

      {/* LOPD */}
      <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
        T'informem que les dades facilitades s'usaran exclusivament per gestionar
        la teva petició, d'acord amb la normativa LOPD vigent.
        Pots exercir els teus drets escrivint a{" "}
        <a href="mailto:info@lleidahack.dev" className="no-underline" style={{ color: "#FF7430" }}>
          info@lleidahack.dev
        </a>.
      </p>

      {/* Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="acceptConditions"
          className="mt-0.5 h-4 w-4 flex-shrink-0 rounded"
          style={{ accentColor: "#FF7430" }}
          {...register("acceptConditions", {
            required: "Has d'acceptar les condicions per continuar",
          })}
          disabled={isLoading}
        />
        <label htmlFor="acceptConditions" className="text-sm cursor-pointer" style={{ color: "#374151" }}>
          He llegit i accepto la{" "}
          <a href="/lleidahack/legalinfo" className="no-underline font-medium" style={{ color: "#FF7430" }}>
            política de privadesa
          </a>
        </label>
      </div>
      {errors.acceptConditions && (
        <p className="text-xs" style={{ color: "#E55010" }}>
          {errors.acceptConditions.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full sm:w-auto px-10 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 flex items-center justify-center gap-2"
        style={{
          background: isLoading ? "#d1d5db" : "#FF7430",
          cursor: isLoading ? "not-allowed" : "pointer",
          boxShadow: isLoading ? "none" : "0 4px 20px rgba(255,116,48,0.35)",
        }}
        onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = "#e55010"; }}
        onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.background = "#FF7430"; }}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Enviant...
          </>
        ) : (
          <>
            Enviar missatge
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
