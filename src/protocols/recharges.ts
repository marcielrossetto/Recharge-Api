// src/protocols/recharges.ts
export type NewRechargeDTO = {
  phone_id: number;
  value: number;
  status?: "PENDING" | "CONFIRMED" | "FAILED" | "CANCELED";
};
