"use client";

import { Suspense } from "react";
import { useUiSelector } from "@/context/hooks";
import VehicleTypeSelect from "@/components/VehiclesTypeSelect";
import ModelYeatSelect from "@/components/ModelYearSelect";
import { useRouter } from "next/navigation";

const FilterCars = () => {
  const router = useRouter();
  const { vehicle, year } = useUiSelector((state) => ({
    vehicle: state.vehicle,
    year: state.year,
  }));

  const handleNextClick = () => {
    router.push(`result/${vehicle.id}/${year.name}`);
  };

  return (
    <div className="p-10">
      <div className="flex items-center gap-10 mb-10 flex-wrap">
        <Suspense fallback={<div className="min-w-[400px]">Loading...</div>}>
          <VehicleTypeSelect />
        </Suspense>

        <ModelYeatSelect />
      </div>
      <div>
        <button
          disabled={!year || !vehicle}
          type="submit"
          className="block w-full px-4 py-2 pl-0 text-left text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          onClick={handleNextClick}
        >
          {"Next ->"}
        </button>
      </div>
    </div>
  );
};

export default FilterCars;
