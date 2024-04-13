import React, { useEffect, useState } from 'react';

export const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please select your advice");
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    async function getAdvice() {
        try {
            const res = await fetch("https://api.adviceslip.com/advice");
            if (!res.ok) {
                throw new Error('Failed to fetch advice');
            }
            const data = await res.json();
            console.log(data);
            setAdvice(data.slip.advice);
            setCount((c) => c + 1);
            setError(null);
        } catch (error) {
            console.error('Error fetching advice:', error.message);
            setError('Failed to fetch advice. Please try again.');
        }
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <>
            <div>
                <h1>{advice}</h1>
                <button onClick={getAdvice}>Get Advice</button>
                <p>This count <b>{count}</b> reached.</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </>
    );
};
