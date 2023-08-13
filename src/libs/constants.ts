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

export const sideNavBar = [
  {
    name: "DashBoard",
    route: "/",
  },
  {
    name: "Departments",
    route: "/department",
  },
  {
    name: "Products",
    route: "/products",
  },
];

export const departmentNavBar = [
  {
    name: "Kitchen",
    route: "/products/kitchen",
  },
  {
    name: "Clothing",
    route: "/products/clothing",
  },
  {
    name: "Toys",
    route: "/products/toys",
  },
];

export const sortCategory = [
  { name: "Name", keyValue: "name" },
  { name: "Price", keyValue: "price" },
  { name: "Stock", keyValue: "stock" },
];

export const dataFields = [
  "Image",
  "Name",
  "Description",
  "Price",
  "Stock",
  "Supplier",
];
