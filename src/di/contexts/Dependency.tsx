import React, { createContext, useContext } from 'react';
import useGreeterEnglish from '../hooks/useGreeterEnglish';
import useGreeterJapanese from '../hooks/useGreeterJapanese';
import IGreeter from '../interfaces/IGreeter';

interface DependencyContextType {
    greeter: IGreeter
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

    return (
        <DependencyContext.Provider value={{greeter}}>
            {children}
        </DependencyContext.Provider>
    );
}
