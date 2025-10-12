export type Phone = {
  id: number;
  document: string;      // CPF (apenas números)
  number: string;        // com DDD, apenas números
  name: string;
  description: string;
  carrier_id: number;
  created_at: string;
};

export type CreatePhoneInput = {
  document: string;
  number: string;
  name: string;
  description: string;
  carrier_id: number;
};
