import React from 'react';
import { Route, Users, GraduationCap, Smartphone, FileText } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 1,
      name: "नई सड़क परियोजनाएँ",
      value: "12",
      icon: <Route className="w-6 h-6 text-brand-saffron" />,
      color: "bg-brand-saffron/10"
    },
    {
      id: 2,
      name: "किसान पंजीकृत",
      value: "850+",
      icon: <Users className="w-6 h-6 text-brand-primary" />,
      color: "bg-brand-primary/10"
    },
    {
      id: 3,
      name: "छात्र डिजिटल शिक्षा से जुड़े",
      value: "430+",
      icon: <GraduationCap className="w-6 h-6 text-brand-teal" />,
      color: "bg-brand-teal/10"
    },
    {
      id: 4,
      name: "परिवार डिजिटल पहचान से कवर",
      value: "95%",
      icon: <Smartphone className="w-6 h-6 text-brand-secondary" />,
      color: "bg-brand-secondary/10"
    },
    {
      id: 5,
      name: "पंचायत सेवाएँ ऑनलाइन",
      value: "24",
      icon: <FileText className="w-6 h-6 text-brand-dark" />,
      color: "bg-brand-dark/10"
    }
  ];

  return (
    <section className="bg-white py-12 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group cursor-default">
              <div className={`${stat.color} p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <p className="text-3xl font-bold font-heading text-brand-dark mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-brand-muted leading-snug">{stat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
