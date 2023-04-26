import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/route';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
   <>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {routes.map(({url, component}, index) => <Route path={url} element={component} key={index} />)}
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
