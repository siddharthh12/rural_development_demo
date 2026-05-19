import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "पहले बीज और खाद की जानकारी के लिए कई बार पंचायत जाना पड़ता था। अब इस पोर्टल से हमें मौसम और योजनाओं की जानकारी सीधे मोबाइल पर मिल जाती है।",
      name: "रामलाल गुर्जर",
      role: "किसान",
      avatar: "/images/avatar_farmer.png"
    },
    {
      id: 2,
      quote: "छात्रवृत्ति के लिए आवेदन करना अब बहुत आसान हो गया है। मुझे कहीं जाने की जरूरत नहीं पड़ी और मेरे दस्तावेज सुरक्षित रूप से अपलोड हो गए।",
      name: "सुनीता देवी",
      role: "छात्रा",
      avatar: "/images/avatar_student.png"
    },
    {
      id: 3,
      quote: "हमारे स्वयं सहायता समूह को अब नई सरकारी योजनाओं की जानकारी समय पर मिलती है। डिजिटल पहचान से हमारा काम बहुत पारदर्शी हो गया है।",
      name: "मीना शर्मा",
      role: "स्वयं सहायता समूह सदस्य",
      avatar: "/images/avatar_woman.png"
    }
  ];

  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-4">समुदाय की आवाज़</h2>
          <p className="text-lg text-brand-muted">
            सूर्यपुरा के नागरिकों के अनुभव, जो डिजिटल प्रगति के साथ बदल रहे हैं।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm flex flex-col">
              <div className="flex gap-1 mb-6 text-brand-saffron">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-brand-dark font-medium italic mb-8 flex-grow">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-bg"
                />
                <div>
                  <h4 className="font-bold text-brand-dark">{item.name}</h4>
                  <p className="text-sm text-brand-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
