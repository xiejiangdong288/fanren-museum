import React, { useState, useEffect } from 'react';
import BarChart from '../../components/Charts/BarChart';
import PieChart from '../../components/Charts/PieChart';
import { useDataLoader } from '../../data/loaders';

const CultivationSystemPage: React.FC = () => {
  const { data, loading, error } = useDataLoader<any>(React.useCallback(() => {
    return fetch('/data/cultivation.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('无法加载修仙体系数据');
        }
        return response.json();
      });
  }, []));

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">加载中...</span>
          </div>
          <p className="mt-2">正在加载修仙体系数据...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">加载失败！</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    );
  }

  if (!data) {
    return <div>没有找到修仙体系数据</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">《凡人修仙传》修仙世界体系</h1>
      
      {/* 修仙境界表 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">修仙境界详解</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">境界</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">描述</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">寿元</th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">代表人物</th>
              </tr>
            </thead>
            <tbody>
              {data.cultivationSystem.ranks.map((rank: any, index: number) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4 border-b border-gray-200 font-medium">{rank.name}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{rank.description}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{rank.lifespan}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{rank.examples.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* 三界修士分布 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">三界修士人口分布</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <BarChart 
              title="各界修士数量对比"
              labels={data.populationDistribution.realms.map((r: any) => r.name)}
              datasets={[
                {
                  label: '修士数量',
                  data: data.populationDistribution.realms.map((r: any) => r.population),
                  backgroundColor: 'rgba(54, 162, 235, 0.5)', // 使用单一颜色
                }
              ]}
              height={300}
            />
          </div>
          <div>
            <PieChart 
              title="人界修士境界分布"
              labels={data.populationDistribution.humanRealm.map((r: any) => r.rank)}
              data={data.populationDistribution.humanRealm.map((r: any) => r.count)}
              height={300}
            />
          </div>
        </div>
      </div>
      
      {/* 灵根资质分布 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">灵根资质分布</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <PieChart 
              title="灵根类型分布"
              labels={data.spiritRoots.types.map((t: any) => t.name)}
              data={data.spiritRoots.types.map((t: any) => t.percentage)}
              height={300}
            />
          </div>
          <div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">灵根资质说明</h3>
              <ul className="space-y-3">
                {data.spiritRoots.types.map((type: any, index: number) => (
                  <li key={index} className="flex">
                    <div className="w-4 h-4 rounded-full mt-1 mr-2" style={{ backgroundColor: `rgba(${index * 50}, ${150 - index * 20}, ${200 - index * 30}, 0.5)` }}></div>
                    <div>
                      <span className="font-medium">{type.name}：</span>
                      <span>{type.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* 天劫与寿元 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">天劫与寿元数据</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <BarChart 
              title="各境界天劫威力对比"
              labels={data.tribulation.levels.map((t: any) => t.rank)}
              datasets={[
                {
                  label: '天劫威力指数',
                  data: data.tribulation.levels.map((t: any) => t.power),
                  backgroundColor: 'rgba(153, 102, 255, 0.5)',
                }
              ]}
              height={300}
            />
          </div>
          <div>
            <BarChart 
              title="天劫生存率"
              labels={data.tribulation.levels.map((t: any) => t.rank)}
              datasets={[
                {
                  label: '生存率 (%)',
                  data: data.tribulation.levels.map((t: any) => t.survivalRate),
                  backgroundColor: 'rgba(75, 192, 192, 0.5)',
                }
              ]}
              height={300}
            />
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">修仙者寿元对比</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">境界</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">自然寿元</th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">可延寿方式</th>
                </tr>
              </thead>
              <tbody>
                {data.cultivationSystem.ranks.map((rank: any, index: number) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b border-gray-200 font-medium">{rank.name}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{rank.lifespan}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{rank.lifeExtension || '无特殊方式'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultivationSystemPage;
