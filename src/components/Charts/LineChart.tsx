import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// 注册Chart.js组件
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
  }[];
  height?: number;
}

const LineChart: React.FC<LineChartProps> = ({ title, labels, datasets, height = 300 }) => {
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
      borderColor: dataset.borderColor || 'rgba(75, 192, 192, 1)',
      backgroundColor: dataset.backgroundColor || 'rgba(75, 192, 192, 0.2)',
      tension: dataset.tension || 0.1,
    })),
  };

  return (
    <div style={{ height: height }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
