import {use} from "react";
import type { countryType } from "../Type";

export interface CountriesProps {
    countriesPromise: Promise<countryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {
    const countries = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h2>Countries: </h2>
            <ul>
                {countries.map((country) => (
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ul>
        </div>
    );
};
