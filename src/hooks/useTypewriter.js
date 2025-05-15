import { useState, useEffect } from 'react';

export default function useTypewriter(text = '', speed = 100) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(i));
            i++;
            if (i === text.length) clearInterval(timer);
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);

    return displayText;
}