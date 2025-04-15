
import { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const AboutUs = () => {
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

  const benefits = [
    "Mais de 15 anos de experiência no mercado",
    "Equipamentos modernos e de alta tecnologia",
    "Rigoroso controle de qualidade",
    "Equipe altamente treinada e especializada",
    "Compromisso com sustentabilidade ambiental"
  ];

  return (
    <section id="sobre" className="section-padding bg-agro-beige/30" ref={sectionRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transition: 'all 0.7s ease-out' }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1452960962994-acf4fd70b632" 
                alt="Rebanho de ovelhas" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-agro-green text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Anos de experiência</p>
              </div>
            </div>
          </div>
          
          <div 
            className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transition: 'all 0.7s ease-out', transitionDelay: '200ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-agro-green mb-6">
              Sobre a Best Agro Gado
            </h2>
            <p className="text-gray-700 mb-6">
              Fundada há mais de 15 anos, a Best Agro Gado se destaca no mercado de abate e processamento 
              de animais, oferecendo serviços de alta qualidade para suínos, bovinos, caprinos e ovinos.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa empresa investe constantemente em tecnologia e treinamento para garantir que todos os 
              processos sigam os mais rigorosos padrões de qualidade, higiene e bem-estar animal. 
              Nosso compromisso é entregar produtos que atendam às expectativas dos nossos clientes.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-agro-brown">Por que escolher nossos serviços?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-agro-green mr-2 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
