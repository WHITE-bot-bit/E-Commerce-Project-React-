import {Routes,Route} from 'react-router';
import {HomePage} from './Pages/HomePage';
import {ChechoutPage} from './Pages/CheackoutPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<ChechoutPage />} />
    </Routes>
  )
}

export default App
