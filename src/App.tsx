import './App.css';

import PostDetail from './component/postDetail';
import PostList from './component/postList';

export const App = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-3/4 w-5/6 border-2 grid grid-cols-2 border-red-400 rounded-lg overflow-hidden">
        {/* Left Column: PostList */}
        <div className="border-dashed border-r-2 border-red-300 h-full py-1 overflow-hidden">
          <PostList />
        </div>
        {/* Right Column: PostDetail */}
        <div className="h-full overflow-hidden">
          <PostDetail />
        </div>
      </div>
    </div>
  );
};
