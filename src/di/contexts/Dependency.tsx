import React, { createContext, useContext } from 'react';
import useGreeterEnglish from '../hooks/useGreeterEnglish';
import useGreeterJapanese from '../hooks/useGreeterJapanese';
import useCounter from '../hooks/useCounter';
import IGreeter from '../interfaces/IGreeter';
import ICounter from '../interfaces/ICounter';

interface DependencyContextType {
    greeter: IGreeter
    counter: ICounter
}

const DependencyContext = createContext<DependencyContextType | null>(null);

export function useDependency() {
    return useContext(DependencyContext);
}

interface DependencyProviderProps {
    children: React.ReactNode
}
export function DependencyProvider({children}: DependencyProviderProps) {
    const greeter = useGreeterEnglish();
    // const greeter = useGreeterJapanese();
    
    const counter = useCounter();

    return (
        <DependencyContext.Provider value={{greeter, counter}}>
            {children}
        </DependencyContext.Provider>
    );
}
