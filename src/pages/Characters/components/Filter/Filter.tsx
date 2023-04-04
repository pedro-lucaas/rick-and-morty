import React from "react";
import { InputCheckbox, InputText } from "./Filter.style";

export type FilterType = {
  label: string;
  key: string;
  value: string;
  options?: {
    label: string;
    value: string;
  }[];
  type: 'radio' | 'text';
}

export interface IFilter {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const Filter: React.FC<IFilter> = ({ filter, setFilter }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, value: e.target.value });
  };

  return (
    <div>
      <h3>{filter.label}</h3>
      {filter.type === "text" && (
        <InputText
          type="text"
          name={filter.label}
          onChange={handleFilterChange}
          value={filter.value}
        />
      )}
      {filter.type === "radio" && (
        <div>
          <InputCheckbox
            type="checkbox"
            name={filter.label}
            value=""
            onChange={handleFilterChange}
            checked={filter.value === ""}
          />  All
          {filter.options?.map((option) => (
            <div key={option.value}>
              <InputCheckbox
                type="checkbox"
                name={filter.label}
                value={option.value}
                onChange={handleFilterChange}
                checked={filter.value === option.value}
              /> {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
