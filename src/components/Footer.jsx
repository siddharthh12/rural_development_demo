import React from 'react';
import { Sun, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-16 pb-8 border-t-4 border-brand-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-saffron p-2 rounded-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-white leading-tight">सूर्यपुरा</span>
                <span className="text-xs font-semibold text-brand-saffron tracking-wider">ग्राम विकास पोर्टल</span>
              </div>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              सूर्यपुरा पंचायत को पूरी तरह से डिजिटल, पारदर्शी और समावेशी बनाने की एक पहल।
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-saffron transition-colors font-bold text-sm">
                Fb
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-saffron transition-colors font-bold text-sm">
                X
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-saffron transition-colors font-bold text-sm">
                In
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6">त्वरित लिंक</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">मुखपृष्ठ</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">विकास योजनाएँ</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">किसान सेवा</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">पंचायत</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">संपर्क करें</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6">नागरिक सेवाएँ</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">प्रमाणपत्र आवेदन</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">छात्रवृत्ति फॉर्म</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">ई-ग्राम सभा</a></li>
              <li><a href="#" className="text-brand-muted hover:text-white transition-colors text-sm">शिकायत निवारण</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-heading mb-6">संपर्क</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-saffron flex-shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">ग्राम पंचायत कार्यालय, सूर्यपुरा, जिला - विकास नगर</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-saffron flex-shrink-0" />
                <span className="text-brand-muted text-sm">+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-saffron flex-shrink-0" />
                <span className="text-brand-muted text-sm">info@surypuravikas.in</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs text-center md:text-left">
            © 2026 सूर्यपुरा ग्राम विकास पोर्टल। सर्वाधिकार सुरक्षित।
          </p>
          <p className="text-brand-saffron text-xs font-semibold bg-brand-saffron/10 px-3 py-1 rounded-full text-center md:text-right border border-brand-saffron/20">
            * यह एक रचनात्मक डेमो प्रोजेक्ट है, वास्तविक सरकारी पोर्टल नहीं।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
