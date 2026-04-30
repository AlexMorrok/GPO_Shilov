import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './pages/PageOne';
import SecondPage from './pages/SecondPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;