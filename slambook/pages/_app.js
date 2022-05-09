import { createContext, useState } from 'react';
import Layout from '../comps/Layout'
import '../styles/globals.css'

export const stateContext = createContext();


function MyApp({ Component, pageProps }) {
  const [Cse , setCse] = useState(false)
  const [Ee, setEe] = useState(false)
  const [Me, setMe] = useState(false)
  return <> 
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
<stateContext.Provider value={{Cse, Me, Ee, setCse, setEe, setMe}}>
  <Layout><Component {...pageProps} /> </Layout>
  </stateContext.Provider>
  </>
  

}

export default MyApp
