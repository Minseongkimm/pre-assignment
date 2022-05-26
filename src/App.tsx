import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Datatest from './components/datatest';

import Layout from './layout/layout';
import Main from './main/main';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          {/* <Route path="/product/*" element={<Product />}></Route> */}

          {/* <Datatest /> */}
          {/* 검색창 */}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
