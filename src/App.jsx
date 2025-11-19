import { useState } from 'react'
import OtpGenerator from './components/OtpGenerator';
import Footer from './components/Footer';


/**
 * fonction principale App qui appelle le composant OtpGenerator
 *
 * @returns {*le rendu final de l'application} 
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main class="bg-gray-900">
        <OtpGenerator />
        <Footer />
      </main>
    </>
  )
}

export default App
