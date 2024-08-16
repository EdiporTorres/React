import  { useContext } from 'react'

import { AuthContext } from '../../Context/AuthContext'

function Footer() {


  const { usuario, } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
    <>
      <div className="bg-primary py-6 mt-8 container mx-auto text-center text-white">
        <p className="italic">"As pessoas só morrem quando são esquecidas"</p>
        <p className="text-sm mt-2">- Hiriluk- One piece</p>
        <div className="mt-4 space-x-4">

          <div className="mt-4 space-x-4">
            <a href="https://www.instagram.com/etipo.rei/" className="text-accent">Instagram</a>
            <a href="https://www.linkedin.com/in/edipo-torres" className="text-accent">Linkedin</a>
          </div>
          <p className="mt-4">Blog pessoal Édipo Reis | Copyright © :  {data}</p>
        </div>
      </div>
    </>
      )
    }
  
     return (
      <>
        {footerComponent}
      </>
  )
}

export default Footer