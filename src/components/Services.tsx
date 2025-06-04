
import { useState, useEffect, useRef } from 'react';
import { Beef, Utensils, Scissors, GanttChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesData = [
  {
    title: "Abate de Bovinos",
    description: "Abate humanizado e processamento de carne bovina seguindo os mais rigorosos padrões de qualidade e higiene.",
    icon: Beef
  },
  {
    title: "Abate de Suínos",
    description: "Processo completo desde a recepção até o processamento final, garantindo produtos suínos de excelência.",
    icon: Utensils
  },
  {
    title: "Abate de Ovinos",
    description: "Abate e processamento de ovinos com técnicas especializadas para preservar o sabor e a qualidade da carne.",
    icon: GanttChart
  },
  {
    title: "Abate de Caprinos",
    description: "Serviços completos para o processamento de caprinos, atendendo às necessidades específicas deste tipo de carne.",
    icon: Scissors
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="serviços" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff5537] mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços especializados de abate para diferentes tipos de animais, 
            sempre priorizando a qualidade, higiene e respeito às normas sanitárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServicesData.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' 
              }}
            >
              <CardHeader className="pb-2">
                <div className="bg-agro-green/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-[#ff5537]" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
