
import { use } from "react";
import type { CountryType } from "../Type";

interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const countries = use(countriesPromise);

  return (
    <div>
      <h2 className="font-bold text-2xl mt-6">Countries:</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {countries.map((country) => (
          <div
            key={country.name.common}
            className="border rounded-lg p-4 shadow"
          >
            <h3 className="font-bold text-xl">
              {country.name.common}
            </h3>

            <p>{country.name.official}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
