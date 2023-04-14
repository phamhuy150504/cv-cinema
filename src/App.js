import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/route';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({url, component}, index) => <Route path={url} element={component} key={index} />)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
