The Profiler tab shows you exactly which components are slow:

```javascript
// Example: Slow component that needs optimization
function ExpensiveList({ items, filter }) {
  // This runs on every render - could be slow!
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedItems = filteredItems.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      {sortedItems.map((item) => (
        <ExpensiveItem key={item.id} item={item} />
      ))}
    </div>
  );
}

// Optimized version
function OptimizedList({ items, filter }) {
  const processedItems = useMemo(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }, [items, filter]);

  return (
    <div>
      {processedItems.map((item) => (
        <ExpensiveItem key={item.id} item={item} />
      ))}
    </div>
  );
}
```

**Using the Profiler:**

1. Open Profiler tab in React DevTools
2. Click the record button (blue circle)
3. Interact with your app (type, click, etc.)
4. Stop recording
5. Analyze the flame graph!
