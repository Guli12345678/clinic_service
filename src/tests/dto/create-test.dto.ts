import { TestType } from "../../../generated/prisma";

export class CreateTestDto {
  type: TestType;
  name: string;
  description: string;
  reason: string;
  price: number;
}
