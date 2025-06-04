
import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();
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
      { threshold: 0.1 }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos o seu contato. Responderemos em breve.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["+55 (11) 9999-8888", "+55 (11) 3333-2222"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@equipeabate.com", "vendas@equipeabate.com"]
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Exemplo, 123 - Bairro", "Petrolina - PE, 01234-567"]
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda a Sexta: 08h às 18h", "Sábado: 08h às 12h"]
    }
  ];

  return (
    <section id="contato" className="section-padding bg-agro-beige/30" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#eb4643] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades. Entre em contato conosco 
            para solicitar orçamentos, tirar dúvidas ou agendar uma visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transition: 'all 0.7s ease-out' }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#000000]">Envie-nos uma mensagem</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2 mb-6">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem aqui..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[#eb4643] hover:bg-[#eb4643]/90">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          <div 
            className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ transition: 'all 0.7s ease-out', transitionDelay: '200ms' }}
          >
            <div className="h-full">
              <h3 className="text-xl font-semibold mb-6 text-[#000000]">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-agro-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-[#D52B1E]" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-[200px]">
                <h4 className="font-medium text-lg mb-2">Nossa Localização</h4>
                <div className="bg-gray-200 w-full h-32 rounded-md flex items-center justify-center">
                  <p className="text-gray-500">Mapa será carregado aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
