import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('cleaning up!');
            clearInterval(interval);
        }
    }, [])
    // const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log('count 2 effect');
    //     document.title = count2;
    // }, [count2]);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
            {/* <button onClick={
                () => setCount2(count2 => count2 + 1)
            }>
                Increment Count 2({count2})
            </button> */}
        </div>
    )
}

export default UseEffectCounter