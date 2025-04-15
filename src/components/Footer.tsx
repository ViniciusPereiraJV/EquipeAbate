
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-agro-green text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4 md:px-0">
          <div>
            <h3 className="text-lg font-bold mb-4">Best Agro Gado</h3>
            <p className="text-white/80 mb-4">
              Excelência no abate e processamento de suínos, bovinos, caprinos e ovinos.
              Qualidade e compromisso em todos os nossos produtos.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white/70 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white/70 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Serviços', 'Sobre', 'Produtos', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {['Abate de Bovinos', 'Abate de Suínos', 'Abate de Ovinos', 'Abate de Caprinos'].map((item) => (
                <li key={item}>
                  <a 
                    href="#serviços"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">+55 (11) 9999-8888</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">contato@bestagrogado.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              &copy; {currentYear} Best Agro Gado. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
