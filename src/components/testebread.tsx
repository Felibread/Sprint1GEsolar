import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrando os componentes necessários para gráficos
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Mychart() {
  const [amount, setAmount] = useState<number>(0);
  const [savingsData, setSavingsData] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);

    // Calcular economia anual com energia solar (80% de economia)
    // Adicionamos uma variação anual positiva entre 0% e 5%
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
        label: 'Economia com Energia Solar',
        data: savingsData,
        borderColor: 'rgba(250, 204, 21, 1) ', 
        backgroundColor: 'rgba(250, 204, 21, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Economia anual com Energia Solar',
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Valor da conta de luz:</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Insira o valor da conta"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sun-500 focus:border-sun-500 sm:text-sm"
        />
      </div>
      <div className="h-full w-full max-w-[400px] max-h-[400px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
