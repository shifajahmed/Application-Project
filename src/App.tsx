import { Suspense } from "react";
import "./App.css";
import type { countryType } from "./Type";
import Countries from "./components/Contries";

const countriesPromise = async (): Promise<countryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}
function App() {
  return (
    <>
      <div className="text-center items-center justify-center mt-4 container mx-auto ">
        <h2 className="font-bold text-5xl">Word on the go</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Countries countriesPromise={countriesPromise} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
