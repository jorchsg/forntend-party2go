import React, { createContext, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { StepContext } from "../../components/ProviderStep";
export default ({ children }) => {
  const [state, setState] = React.useState(undefined);
  const [step, setStep] = React.useContext(StepContext);

  var pagina;
  switch (step) {
    case 0:
      {
        pagina = "salones";
      }
      break;
    case 1:
      {
        pagina = "mesas";
      }

      break;
    case 2:
      {
        pagina = "sillas";
      }
      break;
    case 3:
      {
        pagina = "sonido";
      }
      break;

    default:
      break;
  }
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${config.backendURL}${pagina}`);
        setState(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [step]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
