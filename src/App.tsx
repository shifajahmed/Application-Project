import "./App.css";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="font-bold text-5xl">I am learning React</h2>
        <Person></Person>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click ME
        </button>
      </div>
    </>
  );
}

function Person(){
  return <p>I am here</p>
}

export default App;
