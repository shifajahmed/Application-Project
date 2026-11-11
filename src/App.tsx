import "./App.css";
import Todo from "./assets/Todo";

function App() {
  return (
    <>
        <div className="container mx-auto text-center flex flex-col items-center">
        <h2 className="font-bold text-5xl">I am learning React</h2>
        <Person></Person>
        <Person2></Person2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click ME
        </button>
        <Todo></Todo>
      </div>
    </>
  );
}

function Person(){
  return <p>I am here</p>
}

function Person2(){
  const money = 56 * 10;
  return (
    <> 
     <p>I am not here 2</p>
     <p>Sum: {money}</p>
    </> 

  )
}

export default App;
