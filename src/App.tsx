import { useState } from 'react';
import reactapp from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <body>

      <div className="container">
        <h1>資管3C姚育祺</h1>
        <div style={{ height: '200px' }}>
          <img src="about.jpg" alt="About me" style={{ height: '100%' }} />
        </div>


        <p>你好，敝姓姚，名叫育祺。</p>

        <h2>身家調查</h2>
        <ul>
          <li>年齡：<em>20歲</em></li>
          <li>哪裡人：<em>台北</em></li>
          <li>就讀：<em>淡江大學</em></li>
        </ul>

        <h2>興趣愛好</h2>
        <p>我喜歡：</p>
        <ol>
          <li>看電影</li>
          <li>看夜景</li>
          <li>看你</li>
        </ol>

        <h2>我的經歷</h2>
        <p>曾經...</p>
        <ul>
          <li>2004年出生</li>
          <li>2017年接觸銅管樂器</li>
          <li>2020年擔任高中社團幹部</li>
          <li>2022年入學淡江大學資訊管理學系</li>
        </ul>

        <h2>聯絡我</h2>
        <p>這是我的唉雞 <a href="https://discord.com/channels/@me/1120022730885058591/1286220120729063424">_yyyxi_</a></p>
        <p>Email: 411631269@o365.tku.edu.tw</p>
      </div>

    </body>
  );
}

export default App;
