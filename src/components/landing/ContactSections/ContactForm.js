import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SuccessFeedback, FailFeedback } from "./Feedback";
import { contacte } from "src/services/AuthenticationService";

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

  const handleRetry = () => {
    setMailSended(false);
    setMailStatus(false);
  };

  const handleGoHome = () => {
    window.location.href = "/lleidahack/#home";
  };

  const handleButtonClick = () => {
    handleRetry();
  };

  if (mailSended) {
    return mailStatus ? (
      <SuccessFeedback
        title="Missatge enviat correctament."
        text={`Gràcies per contactar amb LleidaHack. El teu missatge s'ha enviat correctament. \n En cas que necessitem ficar-nos en contacte amb tu, ho farem amb el correu 
        que ens has proporcionat.`}
        hasButton={true}
        buttonText="Tornar al inici"
        onButtonClick={handleGoHome}
      />
    ) : (
      <FailFeedback
        title={`Error enviant el teu missatge.`}
        text={`Sembla que algo ha fallat mentre registràvem el teu missatge.`}
        hasButton={true}
        buttonText={`Intentar novament`}
        italic={`Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb nosaltres utilitzant \n les nostres xarxes socials que trobaràs a la part inferior de la pantalla.`}
        onButtonClick={handleButtonClick}
      />
    );
  }

  return (
    <div className="px-16 py-16 p-6 bg-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Primera fila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nom"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.nom
                  ? "bg-pink-100 border-red-300"
                  : "bg-white border-gray-300"
              }`}
              {...register("nom", {
                required: "El nom no pot estar buit",
                minLength: {
                  value: 2,
                  message: "El nom ha de tenir almenys 2 caràcters",
                },
              })}
              disabled={isLoading}
            />
            {errors.nom && (
              <p className="mt-1 text-sm text-red-400">{errors.nom.message}</p>
            )}
          </div>

          {/* Cognoms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cognoms <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Cognoms"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.cognoms
                  ? "bg-pink-100 border-red-300"
                  : "bg-white border-gray-300"
              }`}
              {...register("cognoms", {
                required: "Els cognoms no poden estar buits",
                minLength: {
                  value: 2,
                  message: "Els cognoms han de tenir almenys 2 caràcters",
                },
              })}
              disabled={isLoading}
            />
            {errors.cognoms && (
              <p className="mt-1 text-sm text-red-400">
                {errors.cognoms.message}
              </p>
            )}
          </div>
        </div>

        {/* Segunda fila */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correu electrònic <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Correu electrònic"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email
                  ? "bg-pink-100 border-red-300"
                  : "bg-white border-gray-300"
              }`}
              {...register("email", {
                required: "Et falta indicar-nos el teu correu de contacte",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "El correu no és vàlid",
                },
              })}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Assumpte */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assumpte <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Assumpte"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.assumpte
                  ? "bg-pink-100 border-red-300"
                  : "bg-white border-gray-300"
              }`}
              {...register("assumpte", {
                required: "El títol no pot estar buit",
                minLength: {
                  value: 3,
                  message: "El títol ha de tenir almenys 3 caràcters",
                },
              })}
              disabled={isLoading}
            />
            {errors.assumpte && (
              <p className="mt-1 text-sm text-red-400">
                {errors.assumpte.message}
              </p>
            )}
          </div>
        </div>

        {/* Missatge */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Missatge <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Indica'ns en què et podem ajudar."
            rows="6"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
              errors.missatge
                ? "bg-pink-100 border-red-300"
                : "bg-white border-gray-300"
            }`}
            {...register("missatge", {
              required: "El missatge no pot estar buit",
              minLength: {
                value: 10,
                message: "El missatge ha de tenir almenys 10 caràcters",
              },
            })}
            disabled={isLoading}
          />
          {errors.missatge && (
            <p className="mt-1 text-sm text-red-400">
              {errors.missatge.message}
            </p>
          )}
        </div>

        {/* Info legal */}
        <div className="text-xs text-gray-500 leading-relaxed">
          T'informem que les dades personals que facilitis passaran a formar
          part d'un fitxer responsabilitat de Lleidahack per a gestionar la teva
          petició. Pots exercir els drets d'accès, rectificació, cancel·lació o
          oposició al tractament de les teves dades a l'adreça de correu
          senyalada example@lleidahack.dev.
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="acceptConditions"
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            {...register("acceptConditions", {
              required: "Has de llegir i acceptar les condicions",
            })}
            disabled={isLoading}
          />
          <label htmlFor="acceptConditions" className="text-sm text-gray-700">
            He llegit i accepto les condicions...
          </label>
        </div>
        {errors.acceptConditions && (
          <p className="text-sm text-red-400">
            {errors.acceptConditions.message}
          </p>
        )}

        {/* Botón */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 ${
              isLoading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {isLoading ? "Enviant..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
