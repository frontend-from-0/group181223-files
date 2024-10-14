The `useEffect` hook is a fundamental part of React that allows you to perform side effects in function components. 

## What is a Side Effect?
In React, a side effect is any operation that affects something outside the scope of the function component. This includes actions like:
- Fetching data from an API
- Directly manipulating the DOM
- Setting up subscriptions or timers

## How useEffect Works
The useEffect hook takes two arguments:
- Effect Function: A function that contains the side effect logic you want to execute.
- Dependency Array: An array that tells React when to re-run the effect. If you leave it empty, the effect runs only once when the component mounts. If you include variables in the array, the effect will run whenever those variables change.


```
useEffect(() => {
  // Your side effect logic here

  return () => {
    // Optional cleanup logic
  };
}, [dependencies]);
```

Common Use Cases
1. Data Fetching
You can use useEffect to fetch data from an API when a component mounts. This is a common pattern for loading data when a page first loads.
```
useEffect(() => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => setData(data));
}, []);
```

2. Subscriptions
useEffect can manage subscriptions, such as WebSocket connections or event listeners. It's important to clean up these subscriptions to prevent memory leaks.
```
useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

3. Cleanup
The return statement in useEffect is used for cleanup. This is crucial for removing timers, subscriptions, or any other resources that need to be cleaned up when the component unmounts or before the effect runs again.
```
useEffect(() => {
  const timer = setTimeout(() => {
    console.log('Tick');
  }, 1000);

  return () => clearTimeout(timer);
}, []);
```