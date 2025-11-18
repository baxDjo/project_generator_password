import { useState } from 'react'
import OtpGenerator from './components/OtpGenerator';


/**
 * fonction principale App qui appelle le composant OtpGenerator
 *
 * @returns {*le rendu final de l'application} 
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <OtpGenerator/>
    </>
  )
}

export default App
