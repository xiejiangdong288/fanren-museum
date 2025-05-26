import React, { useState, useEffect } from 'react';
import BarChart from '../../components/Charts/BarChart';
import PieChart from '../../components/Charts/PieChart';
import LineChart from '../../components/Charts/LineChart';
import { useDataLoader } from '../../data/loaders';

const NovelStatsPage: React.FC = () => {
  const { data, loading, error } = useDataLoader<any>(React.useCallback(() => {
    return fetch('/data/novel_stats.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('无法加载小说统计数据');
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
          <p className="mt-2">正在加载小说统计数据...</p>
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
    return <div>没有找到小说统计数据</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">《凡人修仙传》小说创作统计</h1>
      
      {/* 基本信息卡片 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">基本信息</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">总字数</p>
            <p className="text-3xl font-bold text-blue-600">{data.totalWordCount.toLocaleString()}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">总章节数</p>
            <p className="text-3xl font-bold text-green-600">{data.totalChapters}</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">创作时长</p>
            <p className="text-3xl font-bold text-purple-600">{data.writingYears}年</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">平均日更新</p>
            <p className="text-3xl font-bold text-yellow-600">{data.averageDailyUpdate.toLocaleString()}字</p>
          </div>
        </div>
      </div>
      
      {/* 各卷字数统计 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">各卷字数统计</h2>
        <BarChart 
          title="各卷字数对比"
          labels={data.volumeStats.map((v: any) => v.name)}
          datasets={[
            {
              label: '字数',
              data: data.volumeStats.map((v: any) => v.wordCount),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            }
          ]}
          height={400}
        />
      </div>
      
      {/* 更新频率分析 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">更新频率分析</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <LineChart 
              title="月度更新字数趋势"
              labels={data.updateFrequency.months}
              datasets={[
                {
                  label: '月更新字数',
                  data: data.updateFrequency.wordCounts,
                  borderColor: 'rgba(75, 192, 192, 1)',
                }
              ]}
              height={300}
            />
          </div>
          <div>
            <PieChart 
              title="更新时段分布"
              labels={data.updateTimeDistribution.map((item: any) => item.timeSlot)}
              data={data.updateTimeDistribution.map((item: any) => item.percentage)}
              height={300}
            />
          </div>
        </div>
      </div>
      
      {/* 读者互动数据 */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">读者互动数据</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <BarChart 
              title="各卷评论数量"
              labels={data.readerInteraction.volumes}
              datasets={[
                {
                  label: '评论数',
                  data: data.readerInteraction.comments,
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
              ]}
              height={300}
            />
          </div>
          <div>
            <BarChart 
              title="热门章节点击量"
              labels={data.readerInteraction.popularChapters.map((c: any) => c.title)}
              datasets={[
                {
                  label: '点击量',
                  data: data.readerInteraction.popularChapters.map((c: any) => c.views),
                  backgroundColor: 'rgba(153, 102, 255, 0.5)',
                }
              ]}
              height={300}
            />
          </div>
        </div>
      </div>
      
      {/* 小说影响力 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">小说影响力分析</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">累计阅读量</p>
            <p className="text-3xl font-bold text-gray-800">{data.influence.totalReads.toLocaleString()}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">衍生作品数</p>
            <p className="text-3xl font-bold text-gray-800">{data.influence.derivativeWorks}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-600 text-sm">讨论帖数量</p>
            <p className="text-3xl font-bold text-gray-800">{data.influence.discussionThreads.toLocaleString()}</p>
          </div>
        </div>
        <div>
          <PieChart 
            title="读者年龄分布"
            labels={data.readerDemographics.ageGroups.map((a: any) => a.group)}
            data={data.readerDemographics.ageGroups.map((a: any) => a.percentage)}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default NovelStatsPage;
