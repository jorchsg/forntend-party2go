import React, { createContext, useEffect } from "react";
import axios from "axios";
import config from "../../config";

const AppProvider = ({ children }) => {
  const [state, setState] = React.useState({
    salones: [],
    mesas: [],
    sillas: [],
    sonidos: [],
    salonSelected: undefined,
    mesaSelected: undefined,
    sillaSelected: undefined,
    sonidoSelected: undefined,
    dateEvent: undefined,
    peopleQuantity: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const salones_response = await axios.get(`${config.backendURL}salones`);
        const mesas_response = await axios.get(`${config.backendURL}mesas`);
        const sillas_response = await axios.get(`${config.backendURL}sillas`);
        const sonido_response = await axios.get(`${config.backendURL}sonido`);
        setState({
          ...state,
          salones: salones_response.data.Data,
          mesas: mesas_response.data,
          sillas: sillas_response.data,
          sonidos: sonido_response.data,
        });
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
export default AppProvider;
