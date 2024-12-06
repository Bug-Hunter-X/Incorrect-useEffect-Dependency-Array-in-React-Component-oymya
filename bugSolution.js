```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [someData, setSomeData] = useState(null);

  useEffect(() => {
    // Correct logic: Always fetches data when count changes
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setSomeData(data));
  }, [count]); //Correct Dependency Array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {someData && <p>Data: {someData.someField}</p>}
    </div>
  );
}
```