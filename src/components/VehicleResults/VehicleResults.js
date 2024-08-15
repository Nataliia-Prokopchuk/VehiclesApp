"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/api";

const HEADERS = [
  { label: "Make ID", key: "Make_ID" },
  { label: "Make Name", key: "Make_Name" },
  { label: "Model ID", key: "Model_ID" },
  { label: "Model Name", key: "Model_Name" },
];
const VehicleResults = memo(({ makeId, year }) => {
  const [vehicleList, setVehicleList] = useState([]);

  useEffect(() => {
    async function fetchVehicle() {
      const res = await apiFetch(
        `vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
        { cache: "force-cache" },
      );
      setVehicleList(res?.Results || []);
    }

    fetchVehicle();
  }, []);

  return (
    <div className="p-10">
      <div className="overflow-x-auto mb-10">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              {HEADERS.map((header) => (
                <th
                  key={header.key}
                  className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((vehicle, index) => (
              <tr key={index}>
                {HEADERS.map((header) => (
                  <td
                    key={header.key}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {vehicle[header.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link href="/">{"<- Back"}</Link>
    </div>
  );
});

export default VehicleResults;
