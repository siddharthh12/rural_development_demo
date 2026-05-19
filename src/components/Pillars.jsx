import React from 'react';
import { BookOpen, Sprout, HardHat, FileSearch, Fingerprint, Heart } from 'lucide-react';

const Pillars = () => {
  const pillars = [
    {
      id: 1,
      title: "शिक्षा",
      desc: "गांव के बच्चों को डिजिटल लर्निंग, छात्रवृत्ति और बेहतर स्कूल संसाधनों से जोड़ना।",
      metric: "4 नए स्मार्ट क्लासरूम",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      color: "bg-brand-primary"
    },
    {
      id: 2,
      title: "किसान सशक्तिकरण",
      desc: "फसल सहायता, पंजीकरण, बाजार जानकारी और योजनाओं तक आसान पहुंच।",
      metric: "ऑनलाइन फसल बिक्री सहायता",
      icon: <Sprout className="w-8 h-8 text-white" />,
      color: "bg-brand-secondary"
    },
    {
      id: 3,
      title: "सड़क और आधारभूत ढांचा",
      desc: "बेहतर सड़क, जल निकासी, स्ट्रीट लाइट और मजबूत आधारभूत संरचना।",
      metric: "100% पक्की सड़कें",
      icon: <HardHat className="w-8 h-8 text-white" />,
      color: "bg-brand-saffron"
    },
    {
      id: 4,
      title: "पंचायत पारदर्शिता",
      desc: "सूचनाओं, बैठकों, योजनाओं और बजट में अधिक पारदर्शिता।",
      metric: "ई-ग्राम सभा अपडेट",
      icon: <FileSearch className="w-8 h-8 text-white" />,
      color: "bg-brand-teal"
    },
    {
      id: 5,
      title: "डिजिटल पहचान",
      desc: "हर परिवार और नागरिक को डिजिटल सेवाओं से जोड़ने वाली पहचान प्रणाली।",
      metric: "वन-क्लिक योजना एक्सेस",
      icon: <Fingerprint className="w-8 h-8 text-white" />,
      color: "bg-brand-dark"
    },
    {
      id: 6,
      title: "महिला एवं परिवार कल्याण",
      desc: "स्वयं सहायता समूहों का समर्थन और मातृ स्वास्थ्य सेवाओं का सुदृढ़ीकरण।",
      metric: "25 नए स्वयं सहायता समूह",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "bg-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">विकास के मुख्य स्तंभ</h2>
          <p className="text-lg text-brand-muted">
            सूर्यपुरा की प्रगति छह प्रमुख दिशाओं में सुनिश्चित की जा रही है, ताकि हर वर्ग तक विकास का लाभ पहुंच सके।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className="bg-white rounded-2xl p-8 border border-brand-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`${pillar.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading text-brand-dark mb-3">
                {pillar.title}
              </h3>
              <p className="text-brand-muted leading-relaxed mb-6">
                {pillar.desc}
              </p>
              <div className="inline-block bg-brand-bg px-4 py-2 rounded-lg text-sm font-semibold text-brand-dark border border-brand-border">
                {pillar.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
