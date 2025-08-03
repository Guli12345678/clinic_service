import { MedicineType } from "../../../generated/prisma";

export class CreateMedicineDto {
  type: MedicineType;
  name: string;
  ingredients: string;
}
