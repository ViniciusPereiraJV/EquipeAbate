
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="início" 
      className="relative h-screen flex items-center justify-center bg-white"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(150,70,30,0.8)), url("https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Equipe Abate
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md animate-fade-in">
          Qualidade e excelência no abate de suínos, bovinos, caprinos e ovinos
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white text-[	#000000] hover:bg-agro-beige"
            onClick={() => document.getElementById('serviços')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Nossos Serviços
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-4/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#serviços" 
          className="flex flex-col items-center text-white"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('serviços')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm mb-2">Saiba mais</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
