import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// 注册Chart.js组件
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  labels: string[];
  data: number[];
  backgroundColor?: string[];
  borderColor?: string[];
  height?: number;
}

const PieChart: React.FC<PieChartProps> = ({ 
  title, 
  labels, 
  data, 
  backgroundColor, 
  borderColor,
  height = 300 
}) => {
  // 默认颜色
  const defaultBackgroundColors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(199, 199, 199, 0.5)',
    'rgba(83, 102, 255, 0.5)',
    'rgba(40, 159, 64, 0.5)',
    'rgba(210, 199, 199, 0.5)',
  ];

  const defaultBorderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(199, 199, 199, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(40, 159, 64, 1)',
    'rgba(210, 199, 199, 1)',
  ];

  // 配置选项
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
      },
    },
  };

  // 准备数据
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: backgroundColor || defaultBackgroundColors,
        borderColor: borderColor || defaultBorderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: height }}>
      <Pie options={options} data={chartData} />
    </div>
  );
};

export default PieChart;
