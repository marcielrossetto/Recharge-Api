export type RechargeInsert = {
phoneId: number;
amount: number; // 10..1000
};


export type RechargeRow = {
id: number;
phone_id: number;
amount: string; // vindo do PG como string
created_at: string;
};

export type NewRechargeDTO = {
  phoneId: number;
  amount: number;     // ex.: 10, 15, 20...
};
