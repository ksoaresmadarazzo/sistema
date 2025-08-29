import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Nav from './components/Nav'
import Footer from './components/Footer'
function App() {
  

  return (
    //HABILITA A NAVEGAÇÃO POR ROTAS NA APLICAÇÃO
    <BrowserRouter>
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* ROTA PARA LIDAR COM AS URL NÃO ENCONTRADAS */}
        <Route path='*' element={<Error/>}/>

        <Route path='/' element={<Home/>}/>

          <Route path='/cliente' element={<Cliente/>}/>
        

      </Routes>
    </main>
    <Footer/> 
    </BrowserRouter>
    
  )
}

export default App
