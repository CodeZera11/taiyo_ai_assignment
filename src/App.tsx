import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import EditContact from './components/EditContact';
import ChartsAndMaps from './components/ChartsAndMaps';

function App() {
  return (
    <div className='w-full h-[100vh] bg-pink-200'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<ContactList />} />
        <Route path='/add-contact' element={<AddContact />} />
        <Route path='/contacts/:id' element={<ContactDetail />} />
        <Route path='/edit-contact/:id' element={<EditContact />} />
        <Route path='/charts-and-maps' element={<ChartsAndMaps />} />
      </Routes>
    </div>
  );
}

export default App;
