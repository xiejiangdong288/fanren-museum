import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// 注册Chart.js组件
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ title, labels, datasets, height = 300 }) => {
  // 配置选项
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // 准备数据
  const data = {
    labels,
    datasets: datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.data,
      backgroundColor: dataset.backgroundColor || 'rgba(54, 162, 235, 0.5)',
      borderColor: dataset.borderColor || 'rgba(54, 162, 235, 1)',
      borderWidth: dataset.borderWidth || 1,
    })),
  };

  return (
    <div style={{ height: height }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
