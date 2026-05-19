import React from 'react';
import { ArrowRight, Leaf, Shield, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-bg pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-saffron/20 to-brand-bg rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-brand-primary/10 to-brand-bg rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-medium text-sm mb-6 border border-brand-primary/20">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              स्मार्ट और समावेशी पंचायत
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-[1.15]">
              सूर्यपुरा बदल रहा है,<br/>
              <span className="text-brand-primary">साथ बढ़ रहा है</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-brand-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              एक ऐसा ग्राम विकास पोर्टल जो शिक्षा, किसान सहायता, पंचायत सेवाओं, सड़क विकास और डिजिटल पहचान को एक ही मंच पर जोड़ता है।
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
                गांव की प्रगति देखें <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary w-full sm:w-auto">
                सेवाओं के लिए पंजीकरण करें
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-brand-muted font-medium">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-secondary" />
                <span>सुरक्षित पोर्टल</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-brand-secondary" />
                <span>हरित विकास</span>
              </div>
            </div>
          </div>
          
          {/* Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply z-10"></div>
              {/* Using a placeholder styled nicely for the image */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                 <img 
                   src="/images/hero_leader.png" 
                   alt="Visionary rural Indian development leader" 
                   className="object-cover w-full h-full"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent z-0"></div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute top-10 -left-6 sm:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-[bounce_5s_infinite]">
              <div className="bg-brand-teal/10 p-3 rounded-full text-brand-teal">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium">सेवा शुरू</p>
                <p className="text-sm font-bold text-brand-dark">डिजिटल पहचान</p>
              </div>
            </div>

            <div className="absolute bottom-16 -right-4 sm:-right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 z-20 animate-[bounce_6s_infinite_reverse]">
              <div className="bg-brand-saffron/10 p-3 rounded-full text-brand-saffron">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-brand-muted font-medium">योजनाएँ</p>
                <p className="text-sm font-bold text-brand-dark">किसान पंजीकरण</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
