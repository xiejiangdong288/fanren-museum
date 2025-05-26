import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import CharacterDetail from './CharacterDetail';

interface CharacterNetworkProps {
  characters: any[];
  relationshipTypes: any[];
  cultivationRanks: string[];
}

const CharacterNetwork: React.FC<CharacterNetworkProps> = ({ 
  characters, 
  relationshipTypes, 
  cultivationRanks 
}) => {
  const networkRef = useRef<HTMLDivElement>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<any>(null);
  
  // 根据修炼境界获取颜色
  const getColorByRank = (rank: string, ranks: string[]) => {
    const index = ranks.indexOf(rank);
    const hue = (index / ranks.length) * 360;
    return `hsl(${hue}, 70%, 70%)`;
  };

  useEffect(() => {
    if (!networkRef.current || !characters || characters.length === 0) return;

    // 创建节点
    const nodes = characters.map((character) => ({
      id: character.id,
      label: character.name,
      title: `${character.title}<br/>${character.cultivation}`,
      shape: 'circle', // 使用简单的圆形而不是需要图片的circularImage
      color: getColorByRank(character.cultivation, cultivationRanks),
      size: 30,
      font: {
        size: 14,
        color: '#000000'
      }
    }));

    // 创建边
    const edges: any[] = [];
    characters.forEach(character => {
      if (character.relationships && Array.isArray(character.relationships)) {
        character.relationships.forEach((rel: any) => {
          const relType = relationshipTypes.find(t => t.type === rel.type);
          edges.push({
            from: character.id,
            to: rel.target,
            label: rel.type,
            color: relType ? relType.color : '#999999',
            width: 2,
            arrows: {
              to: {
                enabled: false
              }
            }
          });
        });
      }
    });

    // 创建数据集
    const nodesDataSet = new DataSet(nodes);
    const edgesDataSet = new DataSet(edges);

    // 配置选项
    const options = {
      nodes: {
        borderWidth: 3,
        shadow: true,
        shapeProperties: {
          useBorderWithImage: true
        }
      },
      edges: {
        smooth: {
          enabled: true,
          type: "dynamic",
          forceDirection: "none",
          roundness: 0.5
        },
        font: {
          size: 12,
          align: "middle",
          background: "white"
        }
      },
      physics: {
        stabilization: {
          iterations: 100
        },
        barnesHut: {
          gravitationalConstant: -10000,
          springConstant: 0.002,
          springLength: 150
        }
      },
      interaction: {
        navigationButtons: true,
        keyboard: true
      }
    };

    // 创建网络
    const network = new Network(
      networkRef.current,
      { nodes: nodesDataSet, edges: edgesDataSet },
      options
    );

    // 点击事件
    network.on("click", function(params) {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const character = characters.find(c => c.id === nodeId);
        if (character) {
          setSelectedCharacter(character);
        }
      } else {
        setSelectedCharacter(null);
      }
    });

    return () => {
      network.destroy();
    };
  }, [characters, relationshipTypes, cultivationRanks]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div ref={networkRef} style={{ height: '600px', border: '1px solid #ddd' }}></div>
      </div>
      <div>
        {selectedCharacter ? (
          <CharacterDetail 
            character={selectedCharacter} 
            characters={characters}
            relationshipTypes={relationshipTypes} // 添加这一行
            onClose={() => setSelectedCharacter(null)} // 可选，添加关闭功能
          />
        ) : (
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">人物关系网络</h3>
            <p className="text-gray-600 mb-4">
              这个网络图展示了《凡人修仙传》中主要人物之间的关系。
            </p>
            <p className="text-gray-600 mb-4">
              不同颜色代表不同的修炼境界，连线代表人物之间的关系类型。
            </p>
            <p className="text-gray-600">
              点击任意人物节点可查看详细信息。
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterNetwork;
