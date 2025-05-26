import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 英雄区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-xl text-white p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">《凡人修仙传》网页博物馆</h1>
          <p className="text-xl mb-8">探索小说世界的数据可视化平台，为凡人修仙传爱好者提供沉浸式体验</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/novel-stats" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition-colors">
              开始探索
            </Link>
            <a href="#modules" className="bg-transparent hover:bg-white/20 border-2 border-white font-bold py-3 px-6 rounded-full transition-colors">
              了解更多
            </a>
          </div>
        </div>
      </div>
      
      {/* 模块导航 */}
      <div id="modules" className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">探索模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 小说创作统计卡片 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">小说创作统计</h3>
              <p className="text-gray-600 mb-4">探索《凡人修仙传》的创作数据，包括字数统计、更新频率、读者互动等信息。</p>
              <Link to="/novel-stats" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 修仙世界体系卡片 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">修仙世界体系</h3>
              <p className="text-gray-600 mb-4">了解小说中的修仙境界、灵根资质、三界分布和天劫数据等核心设定。</p>
              <Link to="/cultivation-system" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors">
                查看详情
              </Link>
            </div>
          </div>
          
          {/* 人物关系网络卡片 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">人物关系网络</h3>
              <p className="text-gray-600 mb-4">探索以韩立为中心的人物关系网络，了解角色之间的复杂关系和互动。</p>
              <Link to="/character-network" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors">
                查看详情
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* 项目说明 */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">关于本项目</h2>
        <p className="text-gray-700 mb-4">
          《凡人修仙传》网页博物馆是一个为小说爱好者创建的数据可视化平台，旨在通过交互式图表和可视化展示，
          帮助读者更深入地了解这部经典小说的各个方面。本项目收集并整理了小说中的各类统计数据，
          包括创作过程、修仙体系、人物关系等，以直观的方式呈现给读者。
        </p>
        <p className="text-gray-700 mb-4">
          本项目仅供《凡人修仙传》爱好者学习交流使用，所有数据均来源于小说内容和公开资料，
          如有不准确之处，欢迎指正。
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="text-blue-700">
            <strong>未来计划：</strong> 我们计划继续扩展更多模块，包括势力与地域、物品与功法、事件与战争等内容。
            如果您有任何建议或想法，欢迎与我们分享！
          </p>
        </div>
      </div>
      
      {/* 数据来源 */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">数据来源</h2>
        <p className="text-gray-700 mb-4">
          本项目的数据主要来源于以下渠道：
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>《凡人修仙传》原著小说内容</li>
          <li>作者忘语的公开访谈和说明</li>
          <li>官方发布的小说相关数据</li>
          <li>粉丝社区整理的资料和统计</li>
        </ul>
        <p className="text-gray-700">
          我们尽力确保数据的准确性和完整性，但由于小说内容庞大，可能存在遗漏或误差。
          如果您发现任何问题，欢迎指出，我们将及时更正。
        </p>
      </div>
    </div>
  );
};

export default HomePage;
