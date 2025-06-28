import { useState, useEffect } from 'react';

export default function useMousePosition() {
    //created a state for Mouse Position
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


    //function
    const updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    //to update the state
    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, []);


    return mousePosition;
}