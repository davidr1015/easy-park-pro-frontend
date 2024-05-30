import {
  DataTable,
  Card,
  EmployeesIcon,
  EquipmentIcon,
  LoanIcon,
} from "@/components";

import { DashboardICon } from "../../components/ui/Icons";
import { useEffect } from "react";
import { ParkCard } from "../../components/ui/ParkCard";
import { Payment } from "../../components/ui/Payment";
import CarCard from "../../components/ui/CarCard";
import { FormModal } from "../../components";
import { NewCar } from "./NewCar";

export function Cars() {
  return (
    <>
      <h1 className="mb-7 text-4xl font-semibold">Mis autos</h1>

      <div>
        <button className="rounded-lg bg-green-500 px-4 py-1 text-white">
          Nuevo
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid max-w-full auto-rows-min gap-6 px-3 lg:grid-cols-4 ">
          <CarCard />
        </div>
      </div>

      {/* <FormModal>
        <NewCar />
      </FormModal> */}
    </>
  );
}
