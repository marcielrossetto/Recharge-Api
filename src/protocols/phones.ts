export type PhoneInsert = {
number: string; // 11971234567
name: string;
description: string;
carrierId: number;
document: string; // CPF do dono
};


export type PhoneRow = {
id: number;
number: string;
name: string;
description: string;
carrier_id: number;
customer_id: number;
created_at: string;
};

export type NewPhoneDTO = {
  customerId: number;
  number: string;     // 10–11 dígitos
  carrierId: number;
};
