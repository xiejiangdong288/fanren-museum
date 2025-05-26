import React, { useState, useEffect } from 'react';
import { useDataLoader } from '../../data/loaders';
import CharacterNetwork from '../../components/CharacterNetwork';

const CharacterNetworkPage: React.FC = () => {
  const { data, loading, error } = useDataLoader<any>(React.useCallback(() => {
    return fetch('/data/character_network.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('无法加载人物关系数据');
        }
        return response.json();
      });
  }, []));

  // 添加加载状态显示
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">加载中...</span>
          </div>
          <p className="mt-2">正在加载人物关系数据...</p>
        </div>
      </div>
    );
  }

  // 添加错误状态显示
  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">加载失败！</strong>
        <span className="block sm:inline"> {error.message}</span>
      </div>
    );
  }

  // 添加数据为空的检查
  if (!data) {
    return <div>没有找到人物关系数据</div>;
  }

  // 确保所有需要的数据都存在
  const characters = data.characters || [];
  const relationshipTypes = data.relationshipTypes || [];
  const cultivationRanks = data.cultivationRanks || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">《凡人修仙传》人物关系网络</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <CharacterNetwork 
          characters={characters}
          relationshipTypes={relationshipTypes}
          cultivationRanks={cultivationRanks}
        />
      </div>
    </div>
  );
};

export default CharacterNetworkPage;
