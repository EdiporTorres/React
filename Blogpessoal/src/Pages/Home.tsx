import React, { useContext } from 'react';
import homeLogo from './../assets/home.png'
import { UserContext } from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const { nome, setNome } = useContext(UserContext);

  return (
    <div className='flex justify-center items-center'>
      <div>
        <h2 className="text-slate-900 text-5xl  my-4">Logar</h2>
        <h2 className="text-slate-900 text-4xl ">Ola user : {nome}</h2>
        <Link to="/login" className="my-4 rounded bg-indigo-400
         hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
          Voltar 
        </Link>
      </div>
      <div className="flex justify-center ">
      <img src={""} alt="" className='w-2/3' />
      </div>
      </div>
  );
}
  
export default Home;