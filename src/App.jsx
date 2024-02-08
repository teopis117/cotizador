import AppSeguro from "./components/AppSeguro";
import Formulario from "./components/Formulario";
import { CotizadorProvider } from "./context/CotizadorProvider";
import useCotizador from "./hooks/useCotizador";

function App() {


  return (
   
    <CotizadorProvider>
    <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
