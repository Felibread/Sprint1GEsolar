import { FaSearchengin, FaSun, FaTools, FaUserCheck } from "react-icons/fa";
import { HeroSection } from "../components/HeroSection";
import { HiLightningBolt } from "react-icons/hi";
import Mychart from '../components/testebread';
import { useState } from "react";
import Carousel from "../components/Carousel";




export default function Empresas() {
    const [amount, setAmount] = useState(0) 
  return (
    <>
      <HeroSection
        title="Economize até 95% na sua conta de luz com energia solar fotovoltaica!"
        subtitle="Faça sua parte para o planeta e veja seu investimento pagar rapidamente."
        buttonLink="/#calculator"
        buttonLabel="Solicite um orçamento gratuito"
        imgSrc="/paineis-solares-verdes-1536x1024.jpg"
        
        
      
      />
    

   {/* Section 1 */}
   <div className="bg-[1E1E1E] text-white py-16 px-6 ">
  <h2 className="text-3xl font-bold text-center mb-12">Benefícios da energia solar</h2>
  <div className="flex flex-col md:flex-row gap-4 max-w-[1450px] mx-auto">
    
    {/*Economia Garantida*/}
    <div
      className="relative flex-1 p-8 rounded-lg flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/conta_de_energia_mcajr_abr2907221111.jpg')" }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-60 p-2 rounded">Economia Garantida</h3>
      <p className="relative bg-black bg-opacity-60 p-2 rounded">Reduza drasticamente sua conta de luz desde o primeiro mês</p>
    </div>
    

    {/*Sustentabilidade*/}
    <div
      className="relative flex-1 p-8 rounded-lg flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/familia-jovem-com-uma-crianca-pequena-nos-bracos-em-um-fundo-de-paineis-solares-um-homem-e-uma-mulher-se-olham-com-amor-conceito-de-energia-solar_255667-56879.avif')" }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-60 p-2 rounded">Sustentabilidade</h3>
      <p className="relative bg-black bg-opacity-60 p-2 rounded">Energia limpa e renovável para o futuro</p>
    </div>

    {/*Retorno sobre Investimento*/}
    <div
      className="relative flex-1 p-8 rounded-lg flex flex-col justify-center items-center text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/paineis-solares-verdes-1536x1024.jpg')" }}
    >
      <h3 className="text-2xl font-bold mb-4 bg-black bg-opacity-60 p-2 rounded">Retorno sobre Investimento</h3>
      <p className="relative bg-black bg-opacity-60 p-2 rounded">O sistema se paga em poucos anos com a economia gerada</p>
    </div>
    
  </div>
   </div>



    {/*Section 2*/}
    <div className="bg-neutral-900 h-full min-h-[75vh] w-full flex items-center justify-center flex-col py-24 px-6">
      <div className="w-full max-w-[1450px]">
        <div className="flex items-center justify-start mb-24">
          <div className="flex flex-row items-center">
            <h1 className="text-white text-2xl leading-tight font-semibold">
              Como Funciona a Instalação?
            </h1>
            <FaSun className="text-[#feae02] text-4xl ml-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-auto gap-24 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          {/* Card 1 */}
          <div className="flex items-start justify-start flex-col">
            <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
              {/* Título */}
              <h2 className="block text-2xl text-white font-black text-center">
                Consultoria e Projeto Personalizado
              </h2>
              {/* Ícone */}
              <div className="flex justify-center items-center">
                <FaUserCheck className="text-6xl text-[#feae02]" />
              </div>
              {/* Parágrafo */}
              <p className="text-base font-semibold text-neutral-300 text-center">
                Avaliação das necessidades energéticas do cliente e desenvolvimento de um sistema solar exclusivo, considerando as características do imóvel e a demanda energética.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start justify-start flex-col">
            <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
              {/* Título */}
              <h2 className="block text-2xl text-white font-black text-center">
                Instalação
              </h2>
              {/* Ícone */}
              <div className="flex justify-center items-center">
                <FaTools className="text-6xl text-[#feae02]" />
              </div>
              {/* Parágrafo */}
              <p className="text-base font-semibold text-neutral-300 text-center">
                Realizada por uma equipe especializada com equipamentos de alta qualidade, garantindo segurança e eficiência do sistema.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start justify-start flex-col">
            <div className="flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
              {/* Título */}
              <h2 className="block text-2xl text-white font-black text-center">
                Geração de Energia
              </h2>
              {/* Ícone */}
              <div className="flex justify-center items-center">
                <HiLightningBolt className="text-6xl text-[#feae02]" />
              </div>
              {/* Parágrafo */}
              <p className="text-base font-semibold text-neutral-300 text-center">
                O sistema instalado permite que o cliente comece a gerar sua própria energia limpa, reduzindo custos e impacto ambiental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*Section 3*/}
    <div className="pb-24 w-full grid grid-cols-1 grid-rows-1 gap-auto items-center lg:grid-cols-2">
    <div className="mb-4 mx-auto px-4 lg:mx-0">
    <div className="max-w-xl pb-14">
      <h1 className="mb-6 text-3xl leading-tight sm:text-4xl font-bold text-neutral-200">Veja o impacto positivo na sua <span className="text-sun-500">economia</span>!</h1>
      <ul className="max-w-xl mb-16 flex flex-col gap-4">

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>Insira o Valor: Digite o valor médio da sua conta de luz mensal.
          </li>
      </div>

      <div className="flex flex-col gap-8 w-full h full bg-neutral-800 p-8 rounded-2xl">
          <li className="flex items-center gap-6 text-white">
              <span className="text-sun-500">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                  </svg>
              </span>Visualize a Economia: O gráfico calculará automaticamente quanto você economizaria em 6 anos com energia solar.
          </li>
      </div>   


      </ul>

      
    </div>
    </div>
      
      <div>
      <div className="max-w-xl h-full flex mx-auto lg:mx-0">
          <Mychart/>

      </div>
      </div>
    </div>


    {/*Section 4*/}
    <div className="flex flex-row items-center">
              <h1 className="flex items-center text-white text-2xl font-semibold">
              Calculadora de ROI (Retorno sobre Investimento)
              </h1>
    </div>

    <div className="flex items-start gap-8 justify-start flex-col">
              <div className="items-center justify-center flex flex-col gap-8 w-full h-full bg-neutral-800 px-8 py-24 rounded-2xl">
                {/* Ícone */}
                <div className="w-full h-full max-w-lg flex justify-center items-center ">
                  <img src="/close-up-hand-typing-calculator.jpg " className="w-full h-full "/>
                </div>
                {/* Parágrafo */}
                <p className="text-base font-semibold text-neutral-300 text-center">
                A energia solar é um investimento inteligente que se paga em poucos anos devido à economia gerada. Ao instalar um sistema fotovoltaico, você reduz significativamente os gastos com a conta de luz, já que passa a produzir sua própria energia. Com a redução mensal nos custos de eletricidade, o valor investido no sistema se recupera em um prazo que varia entre 4 a 7 anos, dependendo do tamanho do projeto e da localização. Após esse período, toda a energia gerada é praticamente "gratuita", resultando em economia contínua por décadas, já que a vida útil dos painéis solares pode ultrapassar 25 anos.
                </p>
              </div>
    </div>


{/* Section 5*/}
    <div>
                
       
                <section className="py-10 bg-[#1E1E1E]">
                    <h2 className="text-2xl font-bold text-center text-white ">Depoimentos</h2>
                    <Carousel />
                </section>
                
    </div>
   
    </>
  );
}