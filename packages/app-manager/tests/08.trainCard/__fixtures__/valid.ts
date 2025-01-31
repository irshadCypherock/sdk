import { ITrainCardTestCase } from './types';

const withNoWallets: ITrainCardTestCase = {
  name: 'No wallets',
  query: new Uint8Array([58, 2, 10, 0]),
  result: new Uint8Array([58, 2, 10, 0]),
  output: {
    walletList: [],
  },
};

const withOneWallet: ITrainCardTestCase = {
  name: 'With 1 wallet',
  query: new Uint8Array([58, 2, 10, 0]),
  result: new Uint8Array([
    58, 29, 10, 27, 10, 25, 10, 12, 172, 202, 213, 11, 207, 28, 212, 148, 211,
    254, 190, 172, 18, 9, 67, 121, 112, 104, 101, 114, 111, 99, 107,
  ]),
  output: {
    walletList: [
      {
        id: new Uint8Array([
          172, 202, 213, 11, 207, 28, 212, 148, 211, 254, 190, 172,
        ]),
        name: 'Cypherock',
      },
    ],
  },
};

const withFourWallets: ITrainCardTestCase = {
  name: 'With 4 wallet',
  query: new Uint8Array([58, 2, 10, 0]),
  result: new Uint8Array([
    58, 137, 1, 10, 134, 1, 10, 25, 10, 12, 172, 202, 213, 11, 207, 28, 212,
    148, 211, 254, 190, 172, 18, 9, 67, 121, 112, 104, 101, 114, 111, 99, 107,
    10, 36, 10, 16, 20, 180, 243, 105, 94, 24, 43, 158, 169, 152, 195, 4, 65,
    16, 127, 216, 18, 16, 87, 97, 108, 108, 101, 116, 32, 114, 97, 110, 100,
    111, 109, 33, 33, 33, 10, 41, 10, 22, 160, 47, 195, 132, 26, 22, 63, 61, 10,
    41, 91, 123, 129, 33, 225, 87, 190, 17, 252, 63, 185, 225, 18, 15, 109, 121,
    64, 101, 109, 97, 105, 108, 32, 119, 97, 108, 108, 101, 116, 10, 24, 10, 22,
    52, 159, 176, 31, 243, 146, 57, 72, 187, 198, 171, 176, 73, 19, 198, 239,
    200, 22, 59, 4, 107, 252,
  ]),
  output: {
    walletList: [
      {
        id: new Uint8Array([
          172, 202, 213, 11, 207, 28, 212, 148, 211, 254, 190, 172,
        ]),
        name: 'Cypherock',
      },
      {
        id: new Uint8Array([
          20, 180, 243, 105, 94, 24, 43, 158, 169, 152, 195, 4, 65, 16, 127,
          216,
        ]),
        name: 'Wallet random!!!',
      },
      {
        id: new Uint8Array([
          160, 47, 195, 132, 26, 22, 63, 61, 10, 41, 91, 123, 129, 33, 225, 87,
          190, 17, 252, 63, 185, 225,
        ]),
        name: 'my@email wallet',
      },
      {
        id: new Uint8Array([
          52, 159, 176, 31, 243, 146, 57, 72, 187, 198, 171, 176, 73, 19, 198,
          239, 200, 22, 59, 4, 107, 252,
        ]),
        name: '',
      },
    ],
  },
};

const valid: ITrainCardTestCase[] = [
  withNoWallets,
  withOneWallet,
  withFourWallets,
];

export default valid;
