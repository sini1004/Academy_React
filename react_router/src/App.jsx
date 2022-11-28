import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail'

const router = createBrowserRouter([//각 페이지들 정의를 미리 해줌.
  {
    path: '/',
    element: <Root />, //Root페이지 가져오기
    errorElement: <NotFound />,

    //자식경로 만들어줌
    children: [
      { //기본적으로 보여줄 페이지
        index: true,
        element: <Home />,
      },
      {
        path: '/videos',
        element: <Videos />
      },
      {
        path: '/videos/:videoId',
        element: <VideoDetail />
        //주소창에 /videos/뒤에 아무거나 입력하면 세부페이지로 이동함
      }
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
