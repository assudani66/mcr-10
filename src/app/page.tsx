import { InventoryIndicator, NavBarCard } from "@/components";
import { homeNavFilters } from "@/libs/constants";
import { inventoryData } from "@/libs/data";
import { filterAmmount, filterCount } from "@/libs/filters";

export default function Home() {
  return (
    <main>
      <nav>
        {homeNavFilters.map(({ name, condition, variable, method }) => (
          <NavBarCard key={name}>
            <InventoryIndicator number={
              method === "COUNT" ?
                filterCount({ data: inventoryData, condition, variable }) :
                filterAmmount({ data: inventoryData, condition, variable })
            } />
            <p>{name}</p>
          </NavBarCard>
        ))}
      </nav>
    </main>
  );
}
