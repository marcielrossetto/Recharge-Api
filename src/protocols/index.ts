export type Carrier = { id: number; name: string; code: number };

export type CustomerRow = {
  id: number;
  document: string;   // CPF
  name: string;
  created_at: Date;
};

export type PhoneRow = {
  id: number;
  number: string;
  name: string;
  description: string;
  carrier_id: number;
  customer_id: number;
  active: boolean;        // sua tabela tem essa coluna
  created_at: Date;
};

export type RechargeStatus = "pending" | "completed" | "failed" | string;

export type RechargeRow = {
  id: number;
  phone_id: number;
  value: number;          // ← usar 'value' (NUMERIC)
  amount_cents?: number;  // opcional no tipo (nem sempre é selecionado nas queries)
  status?: RechargeStatus;
  created_at: Date;
};

export type PhoneWithCarrier = Omit<PhoneRow, "carrier_id" | "customer_id"> & {
  carrier: Carrier;
};

export type Recharge = Pick<RechargeRow, "id" | "value" | "created_at">;

export type Summary = {
  document: string;
  phones: Array<PhoneWithCarrier & { recharges: Recharge[] }>;
};
