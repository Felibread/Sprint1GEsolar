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
    
<div className="fixed bottom-4 right-4">
    <button type="button" className="flex items-center justify-center gap-3 px-4 py-2 max-w-[225px] bg-[#2ecc71] text-neutral-50 z-50 rounded-full md:max-w-full md:bottom-6 hover:bg-[#29b765] hover:text-neutral-300 focus:outline-none transition-colors duration-200">
        <span className="flex items-center justify-center">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="33" width="33" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
        </span>
        <span>Orçamento via whatsapp</span>
    </button> 
</div>

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