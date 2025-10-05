// src/types/midtrans-client.d.ts
declare module "midtrans-client" {
  interface TransactionDetails {
    order_id: string;
    gross_amount: number;
  }

  interface CustomerDetails {
    first_name: string;
    last_name?: string;
    email: string;
    phone?: string;
  }

  interface ItemDetails {
    id: string;
    price: number;
    quantity: number;
    name: string;
  }

  interface TransactionParams {
    transaction_details: TransactionDetails;
    customer_details?: CustomerDetails;
    item_details?: ItemDetails[];
    callbacks?: {
      finish?: string;
      error?: string;
      pending?: string;
    };
    [key: string]: any;
  }

  interface TransactionResponse {
    token: string;
    redirect_url: string;
    transaction_id: string;
    order_id: string;
    gross_amount: string;
    payment_type?: string;
    transaction_time?: string;
    [key: string]: any;
  }

  class Snap {
    constructor(config: {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    });

    createTransaction(params: TransactionParams): Promise<TransactionResponse>;
  }

  export { Snap, TransactionParams, TransactionResponse };
}
