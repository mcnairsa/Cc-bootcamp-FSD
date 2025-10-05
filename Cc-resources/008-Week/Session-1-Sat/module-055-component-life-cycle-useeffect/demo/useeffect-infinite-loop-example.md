```javascript
// Exercise 1: Find and fix the infinite loop
function BrokenCounter() {
  const [count, setCount] = useState(0);
  const [doubled, setDoubled] = useState(0);

  useEffect(() => {
    setDoubled(count * 2);
  }, [doubled]); // ❌ Bug: What's wrong here?

  return <div>Count: {count}, Doubled: {doubled}</div>;
}
```

// change the dependency from doubled => count

