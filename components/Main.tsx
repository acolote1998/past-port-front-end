import { View } from "react-native";
import CountryData from "./testData/countries.json";
import { useState, useEffect } from "react";
import Trip from "./Trip";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Navbar from "./Navbar";
import { CountryType } from "./types/CountryType";
import Country from "./Country";

export function Main() {
  const [countries, setCountries] = useState<CountryType[]>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setCountries(CountryData);
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Navbar></Navbar>
      {countries?.map((country) => {
        return (
          <View className="mb-2" key={country.countryId}>
            <Country
              trips={country.trips}
              rankeable={country.rankeable}
              countryName={country.countryName}
              countryId={country.countryId}
              key={country.countryId}
            ></Country>
          </View>
        );
      })}
    </View>
  );
}
