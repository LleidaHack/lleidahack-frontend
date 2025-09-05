export const SuccessFeedback = ({ 
  title, 
  text, 
  hasButton, 
  buttonText, 
  onButtonClick 
}) => (
  <div className="text-center py-12">
    <div className="border rounded-lg p-8 max-w-2xl mx-auto">
      <div className="text-green-600 text-6xl mb-4">✓</div>
      <h2 className="text-2xl font-bold text-green-800 mb-4">
        {title}
      </h2>
      <p className="text-green-700 mb-6 whitespace-pre-line">
        {text}
      </p>
      {hasButton && (
        <button
          onClick={onButtonClick}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);

export const FailFeedback = ({ 
  title, 
  text, 
  hasButton, 
  buttonText, 
  italic, 
  onButtonClick 
}) => (
  <div className="text-center py-12">
    <div className=" border rounded-lg p-8 max-w-2xl mx-auto">
      <div className="text-red-600 text-6xl mb-4">✕</div>
      <h2 className="text-2xl font-bold text-red-800 mb-4">
        {title}
      </h2>
      <p className="text-red-700 mb-4">
        {text}
      </p>
      {italic && (
        <p className="text-red-600 text-sm italic mb-6 whitespace-pre-line">
          {italic}
        </p>
      )}
      {hasButton && (
        <button
          onClick={onButtonClick}
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
        >
          {buttonText}
        </button>
      )}
    </div>
  </div>
);