import {useState, useMemo, useEffect} from 'react';
import IGreeter from '../interfaces/IGreeter';

const messages = ["こんにちは", "世界", "笑笑笑"];

export default function useGreeterJapanese(): IGreeter {
    const [index, setIndex] = useState(0);
    const message = useMemo(() => messages[index], [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index) => (index + 1) % messages.length);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return {
        message: message,
    };
}
