export const SuccessFeedback = ({ handleGoHome }) => (
  <div className="text-center py-12">
    <div className="bg-green-50 border border-green-200 rounded-lg p-8 max-w-2xl mx-auto">
      <div className="text-green-600 text-6xl mb-4">✓</div>
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        Missatge enviat correctament.
      </h2>
      <p className="text-green-700 mb-6">
        Gràcies per contactar amb nosaltres. El teu missatge s'ha enviat
        correctament. En cas que necessitem ficar-nos en contacte amb tu, ho
        farem amb el correu que ens has proporcionat.
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

export const FailFeedback = ({ handleRetry }) => (
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
        Torna a intentar-ho novament. En cas que segueixi fallant, contacta amb
        nosaltres utilitzant les nostres xarxes socials que trobaràs a la part
        inferior de la pantalla.
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
