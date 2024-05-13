import { ChargeAccountServices } from "../services/charge-account.service";

export const generate = async ({ commit }, entry) => {
  return await new ChargeAccountServices().generate(entry)
};
