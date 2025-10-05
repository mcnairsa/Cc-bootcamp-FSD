export default function Button() {
    const handleClick = () => {
        alert("Ouch! You clicked me!")
    };
    return <button onClick={handleClick}>Click Me!</button>
}