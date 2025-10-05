export default function Button() {
  const handleClick = () => {
    alert("You clicked me, WHy!!!!!!!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

// export default function Button() {
//   return <button>Click Me</button>;
// }
