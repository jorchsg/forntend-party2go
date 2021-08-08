import React, { createContext } from "react";

const StepProvider = ({ children }) => {
  const [state, setState] = React.useState(0);

  return (
    <StepContext.Provider value={[state, setState]}>
      {children}
    </StepContext.Provider>
  );
};

export const StepContext = createContext();
export default StepProvider;
