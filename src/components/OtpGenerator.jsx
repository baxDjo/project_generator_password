import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Ce composant gére le comportement principal de l'application.
 * Elle permet d'afficher un code de 6 chiffres à chaque 5 secondes quand l'utilisateur clique sur le boutton. 
 *
 * @returns {* le mot de passe qui est affiché à chaque clique de l'utilisateur} 
 */

const OTP_DURATION = 10;
const OtpGenerator = () => {
  const [count, setCount] = useState(5);
  const [codeOTP, setCodeOTP] = useState(null);

  useEffect(() => {
    if (count === 0) {
      // reset automatique
      return;
    }
    const timer = setTimeout(() => {
      setCount((count) => count - 1);
    }, 1000);

    if (count === 0 && codeOTP !== null) {
      setCodeOTP(null); // OTP expire
    }
    return () => clearTimeout(timer);
  }
    , [count, codeOTP]);

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setCodeOTP(newOtp);
    setCount(5); // 5-second validity
  };
  /* this function return the count of the gauge progress */
  const gaugeProgress =
  codeOTP && count > 0 ? (count / OTP_DURATION) * 100 : 0;

  return (
    <div className='min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center gap-6 p-6'>
      <h1 className='text-2xl font-bold text-white uppercase tracking-wide'> One Time Password Generator</h1>

      {codeOTP === null ? (<h2>"Click 'Generate OTP' to get a code"</h2>)
        : (<h2>{codeOTP}</h2>)
      }
      <p className="text-md text-gray-300 font-medium mt-2" aria-live="polite">
        {codeOTP && count > 0 && `Expires in: ${count} seconds`}
        {!codeOTP !== null && count === 0 &&
          "OTP expired. Click the button to generate a new OTP."}
      </p>
      <CircularProgress variant="determinate" value={gaugeProgress
    
      } />

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={generateOTP}
      >
        Generate OTP</button>
    </div>
  )
}

export default OtpGenerator;
