import { memo } from "react";
import Select from "@/components/Select";
import { useUiDispatch } from "@/context/hooks";
import { apiFetch } from "@/api";

async function VehicleTypeSelect() {
  const dispatch = useUiDispatch();

  const vehicleResponse = await apiFetch(
    "vehicles/GetMakesForVehicleType/car?format=json",
    { cache: "force-cache" },
  );

  const vehicleSelectors = vehicleResponse.Results.reduce((result, item) => {
    return [
      ...result,
      {
        id: item.MakeId,
        name: item.MakeName,
      },
    ];
  }, []);

  const handleSelectChange = (vehicle) => {
    dispatch({ vehicle });
  };

  return (
    <div>
      <Select
        title="Choose vehicle type:"
        selectors={vehicleSelectors}
        onSelectChange={handleSelectChange}
      />
    </div>
  );
}

export default memo(VehicleTypeSelect, () => true);
