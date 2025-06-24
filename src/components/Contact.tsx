import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xzzgjror", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    if (response.ok) {
      toast({
        title: "Mensagem enviada!",
        description: "Agradecemos o seu contato. Responderemos em breve.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  } catch (error) {
    toast({
      title: "Erro de conexão",
      description: "Verifique sua conexão com a internet.",
      variant: "destructive",
    });
  }
};


  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["+55 (87) 999395418"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["equipeabatepetrolina@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rod. Estrada Jatobá Carneiro SN", "Petrolina - PE, 56332-210"],
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda a Sexta: 08h às 18h", "Sábado: 08h às 18h"],
    },
  ];

  return (
    <section
      id="contato"
      className="section-padding bg-agro-beige/30"
      ref={sectionRef}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#eb4643] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos à disposição para atender suas necessidades. Entre em
            contato conosco para solicitar orçamentos, tirar dúvidas ou agendar
            uma visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transition: "all 0.7s ease-out" }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6 text-[#000000]">
                Envie-nos uma mensagem
              </h3>

              <form onSubmit={handleSubmit} >
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

                <Button
                  type="submit"
                  className="w-full bg-[#eb4643] hover:bg-[#eb4643]/90"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          <div
            className={`${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{
              transition: "all 0.7s ease-out",
              transitionDelay: "200ms",
            }}
          >
            <div className="h-full">
              <h3 className="text-xl font-semibold mb-6 text-[#000000]">
                Informações de Contato
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="bg-agro-green/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-[#D52B1E]" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-medium text-lg mb-4">Nossa Localização</h4>
                <div className="w-full h-64 rounded-md overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3936.268760265749!2d-40.46671892191306!3d-9.397794966645419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjMnNTIuMSJTIDQwwrAyNyc0Mi43Ilc!5e0!3m2!1spt-PT!2spt!4v1750103534525!5m2!1spt-PT!2spt"
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
