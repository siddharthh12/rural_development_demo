import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const SocialPreview = () => {
  return (
    <section className="py-20 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-brand-dark mb-4">हमारी डिजिटल पहुंच</h2>
          <p className="text-lg text-brand-muted">
            सूर्यपुरा की प्रगति को सोशल मीडिया पर भी साझा करें और जन-जन तक पहुंचाएं।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Post 1 */}
          <div className="bg-white border border-brand-border rounded-2xl shadow-sm overflow-hidden max-w-[400px] mx-auto w-full">
            <div className="p-4 flex items-center justify-between border-b border-brand-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xs">सू</div>
                <p className="font-semibold text-sm text-brand-dark">surypura_vikas</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-brand-muted" />
            </div>
            
            {/* Post Content - 1:1 Aspect Ratio Square */}
            <div className="aspect-square bg-brand-primary relative overflow-hidden group">
              <img 
                src="/images/village_progress.png" 
                alt="Village background" 
                className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-xs font-bold mb-4 border border-white/30">
                  प्रगति रिपोर्ट 2026
                </div>
                <h3 className="text-4xl font-bold font-heading text-white mb-2 shadow-sm">
                  सूर्यपुरा<br/><span className="text-brand-saffron">बदल रहा है</span>
                </h3>
                <p className="text-white/90 text-sm font-medium mb-6">
                  सड़क, शिक्षा, किसान और पंचायत सेवाओं में नई प्रगति
                </p>
                <div className="grid grid-cols-3 gap-2 w-full mt-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <p className="text-xl font-bold text-brand-saffron">12</p>
                    <p className="text-[10px] text-white">सड़कें</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <p className="text-xl font-bold text-white">850+</p>
                    <p className="text-[10px] text-white">किसान</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/20">
                    <p className="text-xl font-bold text-brand-saffron">100%</p>
                    <p className="text-[10px] text-white">पारदर्शिता</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-3">
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-brand-dark hover:text-red-500 cursor-pointer" />
                  <MessageCircle className="w-6 h-6 text-brand-dark cursor-pointer" />
                  <Send className="w-6 h-6 text-brand-dark cursor-pointer" />
                </div>
                <Bookmark className="w-6 h-6 text-brand-dark cursor-pointer" />
              </div>
              <p className="font-semibold text-sm mb-1">342 likes</p>
              <p className="text-sm"><span className="font-semibold mr-2">surypura_vikas</span>गांव की प्रगति से जुड़ें! हमारा सूर्यपुरा अब पूरी तरह से डिजिटल और आधुनिक हो रहा है। #Surypura #GramVikas</p>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-white border border-brand-border rounded-2xl shadow-sm overflow-hidden max-w-[400px] mx-auto w-full">
            <div className="p-4 flex items-center justify-between border-b border-brand-border/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xs">सू</div>
                <p className="font-semibold text-sm text-brand-dark">surypura_vikas</p>
              </div>
              <MoreHorizontal className="w-5 h-5 text-brand-muted" />
            </div>
            
            {/* Post Content - 1:1 Aspect Ratio Square */}
            <div className="aspect-square bg-brand-surface relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-saffron/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-500 border border-brand-border">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Z"></path><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold font-heading text-brand-dark mb-3">
                  डिजिटल पहचान,<br/>हर परिवार तक
                </h3>
                <p className="text-brand-muted text-sm font-medium px-4">
                  अब सेवाएं, प्रमाणपत्र और योजनाएं<br/>एक ही मंच पर
                </p>
                <div className="mt-8 bg-brand-dark text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">
                  आज ही पंजीकरण करें
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex justify-between mb-3">
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-brand-dark hover:text-red-500 cursor-pointer" />
                  <MessageCircle className="w-6 h-6 text-brand-dark cursor-pointer" />
                  <Send className="w-6 h-6 text-brand-dark cursor-pointer" />
                </div>
                <Bookmark className="w-6 h-6 text-brand-dark cursor-pointer" />
              </div>
              <p className="font-semibold text-sm mb-1">289 likes</p>
              <p className="text-sm"><span className="font-semibold mr-2">surypura_vikas</span>क्या आपने अपना परिवार डिजिटल पहचान कार्ड बनवाया? आज ही पोर्टल पर जाएँ। #DigitalIndia #Surypura</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialPreview;
