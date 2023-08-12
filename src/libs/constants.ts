export type itemType = {
  id: number;
  department: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  supplier: string;
  delivered: number;
  imageUrl: string;
  [key: string]: any;
};

export const homeNavFilters = [
  {
    name: "Total Stock",
    condition(item: itemType) {
      return true;
    },
    variable: "stock",
    method: "COUNT",
  },
  {
    name: "Total Delivered",
    condition(item: itemType) {
      return true;
    },
    variable: "delivered",
    method: "COUNT",
  },
  {
    name: "Low Stock Item",
    condition(item: itemType) {
      return item.stock < 10;
    },
    variable: "stock",
    method: "AMOUNT",
  },
];