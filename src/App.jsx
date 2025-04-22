import useDimensions from "./hooks/useDimensions";

function App() {
  const { width, height } = useDimensions();

  return (
    <div>
      <article>
        <p>Width of your window: {width}</p>
      </article>
      <article>
        <p>Height of your window: {height}</p>
      </article>
    </div>
  );
}

export default App;
