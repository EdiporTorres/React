import{ useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'



function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
     <div className='w-full bg-gradient-to-r from-gray-800  to-slate-500  text-white flex justify-center py-4'>
      
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='hover:underline'>Inicio</Link>
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>
  
            <div className='flex gap-4'>
            <Link to='/postagens' className='hover:underline'>Postagens</Link>
            <Link to='/temas' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    
  )
}

return (
<>
  {navbarComponent}
</>
)
}

export default Navbar