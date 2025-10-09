// src/protocols/phones.ts
export type Phone = {
  id: number;
  number: string;
  name: string;
  description: string;
  carrierId: number;
  customerId: number;
  active: boolean;
};

export type NewPhoneDTO = {
  number: string;
  name: string;
  description: string;
  carrierId: number;
  customerId: number;
  active?: boolean;
};
