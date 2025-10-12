export interface Recharge {
  id: number;
  phone_id: number;
  value: number;
  amount_cents: number;
  status: string;
  external_ref?: string | null;
  created_at: Date;
  confirmed_at?: Date | null;
  paid_with?: string | null;
}

export type CreateRechargeInput = Pick<Recharge, "phone_id" | "value">;