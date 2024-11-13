import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrando os componentes necessários para gráficos de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Mychart() {
  const [amount, setAmount] = useState<number>(0);
  const [savingsData, setSavingsData] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value) * 12; // Multiplica por 12 para obter o valor anual
    setAmount(newAmount);

    // Calcular economia anual com energia solar (80% de economia)
    const savings = Array.from({ length: 6 }, (_, i) => {
      const positiveVariation = 1 + Math.random() * 0.05; // Variação entre 0% e +5%
      return newAmount * 0.8 * positiveVariation * Math.pow(1.02, i); // Incremento leve de 2% a cada ano
    });

    setSavingsData(savings);
  };

  const data = {
    labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
    datasets: [
      {
        label: 'Economia Anual com Energia Solar',
        data: savingsData,
        backgroundColor: 'rgba(250, 204, 21, 1)', // cor amarela
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: 'y' as const, // Configura o eixo horizontal para barras
    plugins: {
      legend: {
        position: 'top' as const,
      },
      /*title: {
        display: true,
        text: 'Economia Anual com Energia Solar',
      },*/
    },
    scales: {
      x: {
        beginAtZero: true,
        barThickness: 75, // Aumenta a altura das barras
        categoryPercentage: 1.0, // Aumenta o espaçamento entre as barras
        barPercentage: 0.9, // Aumenta a largura das barras dentro da categoria
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-1">
      <div className="mb-4 -mt-10 px-2 ">
        <label className="block text-sm font-medium text-gray-700">Valor mensal da conta de luz:</label>
        <input
          type="number"
          value={amount / 12} // Divide por 12 para exibir o valor mensal no input
          onChange={handleAmountChange}
          placeholder="Insira o valor mensal da conta"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
        />
      </div>
      {/* Ajuste de margem superior para subir o gráfico */}
      <div className="h-full w-full max-w-[600px] max-h-[600px] mt-6 px-2"> {/* Aqui está o ajuste */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
