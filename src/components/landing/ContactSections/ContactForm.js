import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// Importa tu servicio de contacto
// import { contacte } from "src/services/AuthenticationService";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [mailSended, setMailSended] = useState(false);
  const [mailStatus, setMailStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Mapeo de campos para que coincidan con tu backend
      const formData = {
        name: data.nom + ' ' + data.cognoms, // Combina nom y cognoms
        email: data.email,
        title: data.assumpte,
        message: data.missatge
      };

      // Descomenta esta línea cuando importes tu servicio
      // const success = await contacte(formData);
      
      // Simulación para testing (eliminar cuando uses tu servicio real)
      const success = await new Promise(resolve => {
        setTimeout(() => resolve(Math.random() > 0.3), 1500); // 70% success rate
      });
      
      setMailStatus(success);
      setMailSended(true);
      
      if (success) {
        reset(); // Reset form only on success
      }
      
    } catch (error) {
      console.error('Error enviando el formulario:', error);
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
    // Navegar al inicio - ajusta según tu router
    window.location.href = '/#home';
  };

  // Componente de feedback de éxito
  const SuccessFeedback = () => (
    <div className="text-center py-12">
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Missatge enviat correctament.
        </h2>
        <p className="text-green-700 mb-6">
          Gràcies per contactar amb nosaltres. El teu missatge s'ha enviat correctament.
          En cas que necessitem ficar-nos en contacte amb tu, ho farem amb el correu
          que ens has proporcionat.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Tornar al inici
        </button>
      </div>
    </div>
  );

  // Componente de feedback de error
  const FailFeedback = () => (
    <div className="text-center py-12">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-2xl mx-auto">
        <div className="text-red-600 text-6xl mb-4">✕</div>
        <h2 className="text-2xl font-bold text-red-800 mb-4">
          Error enviant el teu missatge.
        </h2>
        <p className="text-red-700 mb-4">
          Sembla que algo ha fallat mentre registràvem el teu missatge.
        </p>
        <p className="text-red-600 text-sm italic mb-6">
          Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb nosaltres utilitzant
          les nostres xarxes socials que trobaràs a la part inferior de la pantalla.
        </p>
        <button
          onClick={handleRetry}
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Intentar novament
        </button>
      </div>
    </div>
  );

  // Si el mail ha sido enviado, mostrar feedback
  if (mailSended) {
    return mailStatus ? <SuccessFeedback /> : <FailFeedback />;
  }

  // Formulario principal
  return (
    <div className="px-16 py-16 p-6 bg-white">
      <div className="space-y-6">
        {/* Primera fila - Nom y Cognoms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nom"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.nom ? 'bg-pink-100 border-red-300' : 'bg-white border-gray-300'
              }`}
              {...register('nom', { 
                required: 'El nom no pot estar buit',
                minLength: { value: 2, message: 'El nom ha de tenir almenys 2 caràcters' }
              })}
              disabled={isLoading}
            />
            {errors.nom && (
              <p className="mt-1 text-sm text-red-400">{errors.nom.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cognoms <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Cognoms"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.cognoms ? 'bg-pink-100 border-red-300' : 'bg-white border-gray-300'
              }`}
              {...register('cognoms', { 
                required: 'Els cognoms no poden estar buits',
                minLength: { value: 2, message: 'Els cognoms han de tenir almenys 2 caràcters' }
              })}
              disabled={isLoading}
            />
            {errors.cognoms && (
              <p className="mt-1 text-sm text-red-400">{errors.cognoms.message}</p>
            )}
          </div>
        </div>

        {/* Segunda fila - Correu electrònic y Assumpte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correu electrònic <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Correu electrònic"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'bg-pink-100 border-red-300' : 'bg-white border-gray-300'
              }`}
              {...register('email', { 
                required: 'Et falta indicar-nos el teu correu de contacte',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'El correu no és vàlid'
                }
              })}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Assumpte <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Assumpte"
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.assumpte ? 'bg-pink-100 border-red-300' : 'bg-white border-gray-300'
              }`}
              {...register('assumpte', { 
                required: 'El títol no pot estar buit',
                minLength: { value: 3, message: 'El títol ha de tenir almenys 3 caràcters' }
              })}
              disabled={isLoading}
            />
            {errors.assumpte && (
              <p className="mt-1 text-sm text-red-400">{errors.assumpte.message}</p>
            )}
          </div>
        </div>

        {/* Tercera fila - Missatge */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Missatge <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Indica'ns en què et podem ajudar."
            rows="6"
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${
              errors.missatge ? 'bg-pink-100 border-red-300' : 'bg-white border-gray-300'
            }`}
            {...register('missatge', { 
              required: 'El missatge no pot estar buit',
              minLength: { value: 10, message: 'El missatge ha de tenir almenys 10 caràcters' }
            })}
            disabled={isLoading}
          />
          {errors.missatge && (
            <p className="mt-1 text-sm text-red-400">{errors.missatge.message}</p>
          )}
        </div>

        {/* Texto informativo */}
        <div className="text-xs text-gray-500 leading-relaxed">
          T'informem que les dades personals que facilitis passaran a formar part d'un fitxer responsabilitat de l'ajuntament per a gestionar la teva petició. Pots exercir els drets d'accés, rectificació, cancel·lació i oposició al tractament de les teves dades a l'adreça de correu següent: exemple@ajuntament.cat.
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="acceptConditions"
            className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            {...register('acceptConditions', { 
              required: 'Has de llegir i acceptar les condicions' 
            })}
            disabled={isLoading}
          />
          <label htmlFor="acceptConditions" className="text-sm text-gray-700">
            He llegit i accepto les condicions i la Llei de tractament de dades.
          </label>
        </div>
        {errors.acceptConditions && (
          <p className="text-sm text-red-400">{errors.acceptConditions.message}</p>
        )}

        {/* Botón Enviar */}
        <div>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            className={`px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 ${
              isLoading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {isLoading ? 'Enviant...' : 'Enviar'}
          </button>
        </div>
      </div>
    </div>
  );
}