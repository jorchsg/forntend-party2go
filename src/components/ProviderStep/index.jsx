import React,{createContext,useEffect} from 'react';

export default ({ children }) =>{
    
    const [state,setState]=React.useState(0);
  
    
    return (            
            <StepContext.Provider value={[state,setState]}>
                {children}
            </StepContext.Provider>  
    );
}

export const StepContext = createContext();