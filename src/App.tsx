import { HOME } from './screens/Home';
import { Routes, Route } from 'react-router-dom';
import { Cursed } from './screens/cursed';
import { Header } from './components/header';
import './css/index.css';
import Modal from './components/modal';
import { FOOTER } from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Modal />
      <Routes>
        <Route path='/' element={<HOME />} />
        <Route path='/cursed' element={<Cursed />} />
      </Routes>
      <FOOTER/>
    </>
  );
}

export default App;
