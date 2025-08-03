export class CreatePrescriptionDto {
  reason: string;
  solution: string;
  treatmentId: number;
  requires_treatment: boolean;
  diagnosisId: number;
}
