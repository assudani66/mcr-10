import { itemType } from "./constants";

export const filterCount = ({
  data,
  condition,
  variable,
}: {
  data: itemType[];
  condition: (item: itemType) => boolean;
  variable: string;
}): number => {
  return data.reduce((acc, curr) => {
    if (condition(curr)) {
      return acc + curr[variable];
    } else {
      return acc;
    }
  }, 0);
};

export const filterAmmount = ({
  data,
  condition,
  variable,
}: {
  data: itemType[];
  condition: (item: itemType) => boolean;
  variable: string;
}) => {
  return data.filter((item) => condition(item)).length;
};
