/*
A reviver is a function that prescribes how the value originally produced by JSON.parse is transformed, before being returned.
*/

import { formatEthereumAddress } from "speedomatic";

export interface StringToBoolMap {
  [key: string]: boolean;
}

export const inputsExpectedAsAddress: StringToBoolMap = {
  account: true,
  creator: true,
  designatedReporter: true,
  parentUniverse: true,
  marketId: true,
  marketIds: true,
  reporter: true,
  feeWindow: true,
  token: true,
  universe: true,
};

export function addressFormatReviver (key: string, value: any) {
  if (inputsExpectedAsAddress[key] === true) {
    if ( typeof value === "string" ) {
      return formatEthereumAddress(value.toLowerCase());
    } else if (Array.isArray(value)) {
      return formatEthereumAddress((value).map((address) => typeof address === "string" ? address.toLowerCase() : ""));
    }
  }

  return value;
}
