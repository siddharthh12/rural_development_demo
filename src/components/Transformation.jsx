import React from 'react';
import { ArrowRight, History, Zap, Map } from 'lucide-react';

const Transformation = () => {
  return (
    <section className="py-20 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-4">बदलाव की कहानी</h2>
          <p className="text-lg text-brand-muted">
            सूर्यपुरा ने पारंपरिक तरीकों से डिजिटल और पारदर्शी व्यवस्था तक का सफर तय किया है।
          </p>
        </div>

        {/* Before vs After */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-100 p-3 rounded-full">
                <History className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">पहले की स्थिति</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-muted">
                <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0"></span>
                <span>बिखरी हुई पंचायत सेवाएँ और कम जानकारी।</span>
              </li>
              <li className="flex items-start gap-3 text-brand-muted">
                <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0"></span>
                <span>सरकारी योजनाओं तक पहुंचने में कठिनाई और लंबी कतारें।</span>
              </li>
              <li className="flex items-start gap-3 text-brand-muted">
                <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0"></span>
                <span>बुनियादी ढांचे की मरम्मत में देरी और पारदर्शिता की कमी।</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-brand-primary/10 to-brand-bg p-8 rounded-2xl border border-brand-primary/20 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-primary p-3 rounded-full">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary">अब (डिजिटल सूर्यपुरा)</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-dark font-medium">
                <span className="w-2 h-2 mt-2 rounded-full bg-brand-primary flex-shrink-0"></span>
                <span>सभी डिजिटल सेवाएँ एक ही पोर्टल पर उपलब्ध।</span>
              </li>
              <li className="flex items-start gap-3 text-brand-dark font-medium">
                <span className="w-2 h-2 mt-2 rounded-full bg-brand-primary flex-shrink-0"></span>
                <span>साफ प्रक्रिया, तेज पंजीकरण और मोबाइल पर सूचना।</span>
              </li>
              <li className="flex items-start gap-3 text-brand-dark font-medium">
                <span className="w-2 h-2 mt-2 rounded-full bg-brand-primary flex-shrink-0"></span>
                <span>योजनाओं में स्थानीय भागीदारी और पूरी पारदर्शिता।</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-brand-border">
          <div className="flex items-center gap-3 mb-10">
            <Map className="w-8 h-8 text-brand-saffron" />
            <h3 className="text-2xl font-bold font-heading text-brand-dark">प्रगति का रोडमैप</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-brand-border -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { year: "2024", title: "बुनियादी सर्वे", desc: "गांव की जरूरतों का डिजिटल मैपिंग" },
                { year: "2025", title: "डिजिटलीकरण", desc: "पंचायत सेवाओं का ऑनलाइन विस्तार" },
                { year: "2026", title: "एकीकरण", desc: "शिक्षा और किसान प्लेटफॉर्म का जुड़ाव" },
                { year: "2027", title: "स्मार्ट विलेज", desc: "पूर्ण स्मार्ट और समावेशी सूर्यपुरा (Vision)" },
              ].map((item, index) => (
                <div key={index} className="relative bg-brand-surface p-6 rounded-xl border border-brand-border z-10 md:-mt-6">
                  <div className="md:absolute md:-top-10 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand-saffron border-4 border-white shadow-sm mb-4 md:mb-0"></div>
                  <h4 className="text-xl font-bold text-brand-primary mb-1">{item.year}</h4>
                  <p className="font-bold text-brand-dark mb-2">{item.title}</p>
                  <p className="text-sm text-brand-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Transformation;
