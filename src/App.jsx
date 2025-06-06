import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/mainLayout';
import Home from './pages/home';


// import About from './pages/About';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
