# 📏 useDimensions

A tiny custom React hook to track your window's width and height dynamically.

## Features
- ✅ Real-time updates on window resize
- ✅ Super lightweight and easy to use
- ✅ Perfect for responsive UIs

## Usage

```jsx
import useDimensions from './hooks/useDimensions';

const MyComponent = () => {
  const { width, height } = useDimensions();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
