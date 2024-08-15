import { apiFetch } from "@/api";
import VehicleResults from "@/components/VehicleResults/VehicleResults";

export async function generateStaticParams() {
  const res = await apiFetch(
    `vehicles/GetMakesForVehicleType/car?format=json`,
    { cache: "force-cache" },
  );

  return res.Results.map((result) => ({ makeId: result.makeId }));
}

const Result = ({ params }) => {
  return (
    <div>
      <VehicleResults makeId={params.makeId} year={params.year} />
    </div>
  );
};

export default Result;
