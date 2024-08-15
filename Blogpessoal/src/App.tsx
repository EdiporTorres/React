
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

import Cadastro from './Pages/Cadastro/Cadastro';
import Navbar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Login/Login';
import { AuthProvider } from './Context/AuthContext';
import ListaTemas from './Components/Temas/ListaTemas/ListaTemas';
import FormularioTema from './Components/Temas/FormularioTemas/FormularioTemas';
import DeletarTema from './Components/Temas/DeletarTemas/DeletarTemas';
import ListaPostagens from './Components/Postagem/ListaPostagem/ListaPostagem';
import FormularioPostagem from './Components/Postagem/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './Components/Postagem/DeletarPostagem/DeletarPostagem';
import Perfil from './Pages/Perfil/Perfil';
import { ToastContainer } from 'react-toastify';





function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;