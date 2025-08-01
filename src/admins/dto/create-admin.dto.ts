export class CreateAdminDto {
  name: string;
  phone: string;
  email: string;
  is_creator: boolean;
  is_active: boolean;
  password: string;
  confirm_password: string;
}
