export interface Carrier {
  id: number;
  name: string;
  code: number; // ✅ Mudou de string para number
}

export type CreateCarrierInput = Omit<Carrier, "id">;