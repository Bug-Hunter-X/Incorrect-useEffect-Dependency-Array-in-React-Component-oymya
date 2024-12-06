```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Only updates when count is 0
    if (count === 0) {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => setSomeData(data));
    }
  }, [count]);

  const [someData, setSomeData] = useState(null);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {someData && <p>Data: {someData.someField}</p>}
    </div>
  );
}
```