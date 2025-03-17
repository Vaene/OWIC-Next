//TransitionContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value:boolean) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider value={{ completed, toggleCompleted }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
    const context = useContext(TransitionContext);
    if(!context){
        throw new Error("useTransitionContext must be used within a TransitionProvider");
    }
    return context;
}

export default TransitionContext;