import React from 'react';
import { Leaf, GraduationCap, FileBadge, CheckSquare, MessageSquareWarning, CreditCard, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "किसान पंजीकरण",
      desc: "फसल सहायता और योजनाओं के लिए सीधा पंजीकरण।",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-green-100 text-green-700"
    },
    {
      id: 2,
      title: "छात्रवृत्ति आवेदन",
      desc: "छात्रों के लिए शिक्षा सहायता और डिजिटल किट आवेदन।",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: 3,
      title: "जन्म/निवास प्रमाणपत्र",
      desc: "पंचायत से आवश्यक प्रमाणपत्रों के लिए ऑनलाइन आवेदन।",
      icon: <FileBadge className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: 4,
      title: "योजना पात्रता जांच",
      desc: "जानें कि आप किस सरकारी योजना के लिए पात्र हैं।",
      icon: <CheckSquare className="w-6 h-6" />,
      color: "bg-brand-saffron/20 text-brand-saffron"
    },
    {
      id: 5,
      title: "पंचायत शिकायत दर्ज करें",
      desc: "सड़क, पानी या अन्य समस्याओं की सूचना दें।",
      icon: <MessageSquareWarning className="w-6 h-6" />,
      color: "bg-red-100 text-red-700"
    },
    {
      id: 6,
      title: "परिवार डिजिटल पहचान कार्ड",
      desc: "सभी योजनाओं को एक कार्ड से जोड़ने के लिए आवेदन।",
      icon: <CreditCard className="w-6 h-6" />,
      color: "bg-brand-teal/20 text-brand-teal"
    }
  ];

  return (
    <section className="py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-4">नागरिक सेवा पोर्टल</h2>
            <p className="text-lg text-brand-muted">
              पंचायत ऑफिस जाने की जरूरत नहीं। अब सूर्यपुरा की सभी प्रमुख सेवाएँ आपके मोबाइल पर उपलब्ध हैं।
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap hidden md:block">
            सभी सेवाएँ देखें
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a 
              href="#" 
              key={service.id}
              className="bg-white p-6 rounded-2xl border border-brand-border hover:border-brand-primary hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-muted text-sm flex-grow mb-6">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-brand-primary font-medium text-sm mt-auto">
                आवेदन करें <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="btn-secondary w-full">
            सभी सेवाएँ देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
