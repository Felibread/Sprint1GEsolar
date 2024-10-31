import React, { useState } from 'react';

const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/paineis-solares-verdes-1536x1024.jpg",
        "/paineis-solares-verdes-1536x1024.jpg",
        "/paineis-solares-verdes-1536x1024.jpg",
        "/familia-jovem-com-uma-crianca-pequena-nos-bracos-em-um-fundo-de-paineis-solares-um-homem-e-uma-mulher-se-olham-com-amor-conceito-de-energia-solar_255667-56879.avif",
        "/Conta-antes-x-depois-reduzida02-1024x983.png"
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex justify-center bg-[#1E1E1E]"> {/* Centralizando o carrossel */}
            <div className="relative w-96 h-96 "> {/* Removido o padding */}
                <div id="default-carousel" className="relative h-full overflow-hidden rounded-lg " data-carousel="slide">
                    {slides.map((src, index) => (
                        <div key={index} className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${currentSlide === index ? 'block' : 'hidden'}`} data-carousel-item>
                            <img src={src} className="absolute block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2 rtl:space-x-reverse">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-sun-500' : 'bg-gray-300'}`}
                            aria-current={currentSlide === index}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 p-2 -translate-y-1/2 cursor-pointer group focus:outline-none" onClick={prevSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 p-2 -translate-y-1/2 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
