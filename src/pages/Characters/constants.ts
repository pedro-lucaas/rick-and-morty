import { FilterType } from "./components/Filter";

export const filters: FilterType[] = [
  {
    label: "Name",
    key: "name",
    value: "",
    type: "text"
  },
  {
    label: "Species",
    key: "species",
    value: "",
    options: [
      {
        label: "Human",
        value: "human"
      },
      {
        label: "Alien",
        value: "alien"
      }
    ],
    type: "radio"
  },
  {
    label: "Gender",
    key: "gender",
    value: "",
    options: [
      {
        label: "Male",
        value: "male"
      },
      {
        label: "Female",
        value: "female"
      },
      {
        label: "Genderless",
        value: "genderless"
      },
    ],
    type: "radio"
  },
  {
    label: "Status",
    key: "status",
    value: "",
    options: [
      {
        label: "Alive",
        value: "alive"
      },
      {
        label: "Dead",
        value: "dead"
      },
      {
        label: "Unknown",
        value: "unknown"
      },
    ],
    type: "radio"
  },
]
