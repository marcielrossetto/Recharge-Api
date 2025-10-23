export type Carrier = {
  id: number;
  name: string;
  code: number;
};

export type Phone = {
  id: number;
  number: string;
  document: string;
  name: string;
  description?: string | null;
  carrier_id: number;
  created_at: string;
};

export type Recharge = {
  id: number;
  phone_id: number;
  amount: number;
  status: 'PENDING' | 'CONFIRMED' | 'FAILED' | 'CANCELED';
  created_at: string;
};

export type CreateRechargeInput = {
  phone_id: number;
  amount: number;
  status?: 'PENDING' | 'CONFIRMED' | 'FAILED' | 'CANCELED';
};
