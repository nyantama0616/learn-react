import { useState, useCallback } from 'react';

export default function useCounter() {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount(prev => prev + 1), []);
    const decrement = useCallback(() => setCount(prev => prev - 1), []);
    
    console.log("useCounter"); //TODO: "greeterのせいでこれが毎秒呼ばれる。大問題"

    return {
        count,
        increment,
        decrement
    }
    
}
