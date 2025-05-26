import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // 检查当前路径以高亮对应的导航项
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold">凡人修仙传博物馆</Link>
            
            <nav className="hidden md:flex space-x-1">
              <Link to="/" className={`px-3 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/')}`}>
                首页
              </Link>
              <Link to="/novel-stats" className={`px-3 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/novel-stats')}`}>
                小说创作统计
              </Link>
              <Link to="/cultivation-system" className={`px-3 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/cultivation-system')}`}>
                修仙世界体系
              </Link>
              <Link to="/character-network" className={`px-3 py-2 rounded hover:bg-blue-700 transition-colors ${isActive('/character-network')}`}>
                人物关系网络
              </Link>
            </nav>
            
            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* 移动端导航菜单 - 默认隐藏 */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 rounded text-base font-medium hover:bg-blue-700 transition-colors ${isActive('/')}`}>
              首页
            </Link>
            <Link to="/novel-stats" className={`block px-3 py-2 rounded text-base font-medium hover:bg-blue-700 transition-colors ${isActive('/novel-stats')}`}>
              小说创作统计
            </Link>
            <Link to="/cultivation-system" className={`block px-3 py-2 rounded text-base font-medium hover:bg-blue-700 transition-colors ${isActive('/cultivation-system')}`}>
              修仙世界体系
            </Link>
            <Link to="/character-network" className={`block px-3 py-2 rounded text-base font-medium hover:bg-blue-700 transition-colors ${isActive('/character-network')}`}>
              人物关系网络
            </Link>
          </div>
        </div>
      </header>
      
      {/* 主要内容区域 */}
      <main className="flex-grow bg-gray-100">
        {children}
      </main>
      
      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">凡人修仙传网页博物馆</h3>
              <p className="text-gray-400 mt-1">为小说爱好者创建的数据可视化平台</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="mb-4 md:mb-0">
                <h4 className="font-semibold mb-2">导航</h4>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">首页</Link></li>
                  <li><Link to="/novel-stats" className="text-gray-400 hover:text-white transition-colors">小说创作统计</Link></li>
                  <li><Link to="/cultivation-system" className="text-gray-400 hover:text-white transition-colors">修仙世界体系</Link></li>
                  <li><Link to="/character-network" className="text-gray-400 hover:text-white transition-colors">人物关系网络</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">关于</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">项目说明</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">数据来源</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 凡人修仙传网页博物馆 - 仅供粉丝交流使用</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
