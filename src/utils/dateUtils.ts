export const steps = ["Shipping address", "Payment details", "Review your order"];

export enum dateOptions {
  TODAY = 'TODAY',
  DATE = 'DATE',
}
export type dateType = dateOptions.TODAY | dateOptions.DATE