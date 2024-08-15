"use client";

import FilterCars from "@/components/FilterCars";
import UiContextProvider from "@/context/provider";

export default function Home() {
  return (
    <UiContextProvider>
      <FilterCars />
    </UiContextProvider>
  );
}
