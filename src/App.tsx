import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import { QueryClient, QueryClientProvider } from 'react-query';
// import Datatest from './components/datatest';
import Layout from './layout/layout';
import Main from './main/main';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            {/* <Route path="/product/*" element={<Product />}></Route> */}

            {/* <Datatest /> */}
            {/* 검색창 */}
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
