import React from 'react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-brand-primary">
        <div className="absolute inset-0 bg-[url('/images/village_progress.png')] mix-blend-overlay opacity-20 object-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary to-transparent opacity-80"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6 leading-tight">
          आइए, मिलकर सूर्यपुरा को विकास की नई पहचान दें
        </h2>
        <p className="text-xl text-brand-surface/90 mb-10 max-w-2xl mx-auto">
          पोर्टल से जुड़ें और अपने परिवार की डिजिटल पहचान बनाकर सभी सरकारी योजनाओं का लाभ उठाएं।
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-saffron text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300">
            सेवा से जुड़ें
          </button>
          <button className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-brand-surface hover:-translate-y-1 transition-all duration-300">
            पोर्टल देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
