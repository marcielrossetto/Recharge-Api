export interface Recharge {
  id: number;
  phone_id: number;
  amount: number;
  created_at: Date;
}

export type CreateRechargeInput = Omit<Recharge, "id" | "created_at">;