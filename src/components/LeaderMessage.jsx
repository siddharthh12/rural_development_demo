import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';

const LeaderMessage = () => {
  return (
    <section className="py-24 bg-brand-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <polygon fill="currentColor" points="0,100 100,0 100,100" className="text-brand-secondary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Image Side */}
          <div className="w-full lg:w-2/5 h-80 lg:h-auto relative bg-slate-200">
             <img 
               src="/images/leader_portrait.png" 
               alt="ग्राम विकास दूत - सूर्यपुरा विकास प्रेरक" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl font-bold font-heading">राम सिंह पटेल</h3>
                  <p className="text-brand-saffron font-medium">सूर्यपुरा विकास प्रेरक</p>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center bg-brand-surface">
            <Quote className="w-12 h-12 text-brand-saffron/30 mb-6" />
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
              "विकास तब पूरा होता है जब गांव का हर परिवार सम्मान, सुविधा और अवसर से जुड़ता है।"
            </h2>
            
            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              हमारा लक्ष्य केवल आधारभूत संरचना बनाना नहीं है, बल्कि एक ऐसा पारदर्शी और सुलभ मंच तैयार करना है जहाँ हर नागरिक अपनी प्रगति का हिस्सा बन सके। डिजिटल सूर्यपुरा इसी दिशा में हमारा सबसे मजबूत कदम है।
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                <span className="font-bold text-brand-dark">सेवा</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                <span className="font-bold text-brand-dark">पारदर्शिता</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                <span className="font-bold text-brand-dark">प्रगति</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LeaderMessage;
