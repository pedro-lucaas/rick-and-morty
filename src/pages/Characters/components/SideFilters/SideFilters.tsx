import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Filter, FilterType } from "../Filter";
import { ShowHideButton, SideFilterContainer, SideFilterWrapper } from "./SideFilter.style";

export type SideFiltersProps = {
  initialFilters: FilterType[];
  applyFilters: (filter: FilterType[]) => void;
};

const SideFilters: React.FC<SideFiltersProps> = ({ initialFilters, applyFilters }) => {
  const [filters, setFilters] = React.useState<FilterType[]>(initialFilters);
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const setFilter = (filter: FilterType) => {
    setFilters((prev) => {
      const index = prev.findIndex((f) => f.key === filter.key);
      if (index === -1) {
        return [...prev, filter];
      }
      const newFilters = [...prev];
      newFilters[index] = filter;
      return newFilters;
    });
  };


  return (
    <SideFilterContainer>
      <SideFilterWrapper show={show}>
        <h2>Filters</h2>
        {filters.map((filter) => (
          <Filter key={filter.label} filter={filter} setFilter={setFilter} />
        ))}
        <button onClick={() => applyFilters(filters)}>Apply</button>
      </SideFilterWrapper>
      <ShowHideButton
        onClick={toggleShow}
      >
        Filters
        <AiOutlineArrowRight />
      </ShowHideButton>
    </SideFilterContainer>
  );
};

export default React.memo(SideFilters);