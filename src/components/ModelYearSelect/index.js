import Select from "@/components/Select";
import { useUiDispatch } from "@/context/hooks";

const START_YEAR = 2015;

const generateYears = () => {
  const endYear = new Date().getFullYear();
  const years = [];

  for (let year = START_YEAR; year <= endYear; year++) {
    years.push({ id: year, name: year });
  }

  return years;
};

export default function ModelYeatSelect() {
  const dispatch = useUiDispatch();

  const handleSelectChange = (year) => {
    dispatch({ year });
  };

  return (
    <div>
      <Select
        title="Choose year of car:"
        selectors={generateYears()}
        onSelectChange={handleSelectChange}
      />
    </div>
  );
}
