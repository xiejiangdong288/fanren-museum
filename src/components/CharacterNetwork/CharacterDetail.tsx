import React from 'react';

interface CharacterDetailProps {
  character: any;
  characters?: any[];
  relationshipTypes?: any[]; // 可选属性
  onClose?: () => void;      // 可选属性
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({ 
  character, 
  characters = [], 
  relationshipTypes = [], // 设置默认值为空数组
  onClose 
}) => {
  // 根据关系类型获取颜色
  const getRelationshipColor = (type: string) => {
    // 添加空值检查
    if (!relationshipTypes || relationshipTypes.length === 0) return '#999999';
    
    const relType = relationshipTypes.find(t => t.type === type);
    return relType ? relType.color : '#999999';
  };

  // 根据ID获取角色名称
  const getCharacterName = (id: string) => {
    const char = characters.find(c => c.id === id);
    return char ? char.name : '未知角色';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {onClose && (
        <button 
          onClick={onClose}
          className="float-right text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      )}
      
      <h3 className="text-2xl font-bold mb-4">{character.name}</h3>
      
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
          {character.title || '无称号'}
        </span>
        <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded">
          {character.cultivation || '未知境界'}
        </span>
      </div>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">简介</h4>
        <p className="text-gray-700">{character.description || '暂无简介'}</p>
      </div>
      
      {character.relationships && Array.isArray(character.relationships) && character.relationships.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-2">关系网络</h4>
          <ul className="space-y-2">
            {character.relationships.map((rel: any, index: number) => (
              <li key={index} className="flex items-center">
                <span 
                  className="inline-block w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: getRelationshipColor(rel.type) }}
                ></span>
                <span className="text-gray-600 mr-2">{rel.type}:</span>
                <span className="font-medium">{getCharacterName(rel.target)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {character.achievements && Array.isArray(character.achievements) && character.achievements.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">主要成就</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {character.achievements.map((achievement: string, index: number) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
