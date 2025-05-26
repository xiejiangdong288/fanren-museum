import React from 'react';

// 数据加载钩子
export const useDataLoader = <T,>(loadFunction: () => Promise<T>) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await loadFunction();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('未知错误'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [loadFunction]);

  return { data, loading, error };
};

// 加载小说统计数据
export const loadNovelStats = async () => {
  const response = await fetch('/data/novel_stats.json');
  if (!response.ok) {
    throw new Error('无法加载小说统计数据');
  }
  return response.json();
};

// 加载修仙体系数据
export const loadCultivationSystem = async () => {
  const response = await fetch('/data/cultivation.json');
  if (!response.ok) {
    throw new Error('无法加载修仙体系数据');
  }
  return response.json();
};

// 加载人物关系网络数据
export const loadCharacterNetwork = async () => {
  const response = await fetch('/data/character_network.json');
  if (!response.ok) {
    throw new Error('无法加载人物关系数据');
  }
  return response.json();
};
