
import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  animalType: 'bovino' | 'suíno' | 'ovino' | 'caprino';
  featured?: boolean;
};

const productsData: Product[] = [
  {
    id: 1,
    name: "Carne Bovina Premium",
    description: "Cortes selecionados de alta qualidade, provenientes de gado criado em condições ideais.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    animalType: "bovino",
    featured: true
  },
  {
    id: 2,
    name: "Cortes Suínos Especiais",
    description: "Variedade de cortes suínos preparados com cuidado para preservar o sabor e a textura.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    animalType: "suíno"
  },
  {
    id: 3,
    name: "Carne de Cordeiro",
    description: "Carne ovina de animais jovens, conhecida por sua maciez e sabor característico.",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    animalType: "ovino",
    featured: true
  },
  {
    id: 4,
    name: "Carne Caprina Selecionada",
    description: "Cortes selecionados de caprinos, com sabor único e qualidade garantida.",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
    animalType: "caprino"
  },
  {
    id: 5,
    name: "Costela Bovina",
    description: "Peças selecionadas de costela, ideal para churrascos e assados especiais.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    animalType: "bovino"
  },
  {
    id: 6,
    name: "Linguiça Artesanal",
    description: "Linguiça suína preparada artesanalmente com temperos exclusivos.",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    animalType: "suíno",
    featured: true
  },
  {
    id: 7,
    name: "Pernil de Cordeiro",
    description: "Corte nobre de cordeiro, perfeito para ocasiões especiais.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    animalType: "ovino"
  },
  {
    id: 8,
    name: "Cabrito Inteiro",
    description: "Cabrito inteiro preparado para assados tradicionais, com carne macia e saborosa.",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    animalType: "caprino"
  }
];

const Products = () => {
  const [activeTab, setActiveTab] = useState<string>("todos");
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

  const filteredProducts = activeTab === "todos" 
    ? productsData 
    : productsData.filter(product => product.animalType === activeTab);

  return (
    <section id="produtos" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agro-green mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça nossa linha de produtos de alta qualidade, frutos de um processo de abate cuidadoso 
            e responsável. Oferecemos variedade para atender diferentes preferências e necessidades.
          </p>
        </div>

        <Tabs defaultValue="todos" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-agro-beige/30">
              <TabsTrigger value="todos" className="text-sm md:text-base">Todos</TabsTrigger>
              <TabsTrigger value="bovino" className="text-sm md:text-base">Bovinos</TabsTrigger>
              <TabsTrigger value="suíno" className="text-sm md:text-base">Suínos</TabsTrigger>
              <TabsTrigger value="ovino" className="text-sm md:text-base">Ovinos</TabsTrigger>
              <TabsTrigger value="caprino" className="text-sm md:text-base">Caprinos</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id}
                  className={`overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-md ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 right-2 bg-agro-green">Destaque</Badge>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full border-agro-green text-agro-green hover:bg-agro-green hover:text-white">
                      Mais Detalhes
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Products;
