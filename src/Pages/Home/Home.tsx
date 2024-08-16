
import './Home.css';
import ListaPostagens from '../../Components/Postagem/ListaPostagem/ListaPostagem';
import ModalPostagem from '../../Components/Postagem/modalPostagem/ModalPostagem';


function Home() {
    return (
        <>
        <div className="min-h-screen bg-gamer-pattern bg-cover bg-center text-white">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Pensamentos e Poemas.  </p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />

              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={""} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;