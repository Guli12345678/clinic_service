import { Injectable } from '@nestjs/common';
import { CreatePrescriptionMedicineDto } from './dto/create-prescription_medicine.dto';
import { UpdatePrescriptionMedicineDto } from './dto/update-prescription_medicine.dto';

@Injectable()
export class PrescriptionMedicinesService {
  create(createPrescriptionMedicineDto: CreatePrescriptionMedicineDto) {
    return 'This action adds a new prescriptionMedicine';
  }

  findAll() {
    return `This action returns all prescriptionMedicines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prescriptionMedicine`;
  }

  update(id: number, updatePrescriptionMedicineDto: UpdatePrescriptionMedicineDto) {
    return `This action updates a #${id} prescriptionMedicine`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescriptionMedicine`;
  }
}
