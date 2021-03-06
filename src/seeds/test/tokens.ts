import * as Knex from "knex";

exports.seed = async (knex: Knex): Promise<any> => {
  // Deletes ALL existing entries
  return knex("tokens").del().then(async (): Promise<any> => {
    // Inserts seed entries
    const seedData = [{
      contractAddress: "0x7a305d9b681fb164dc5ad628b5992177dc66aec8",
      symbol: "REP",
      marketId: null,
      outcome: null,
    }, {
      contractAddress: "REP_TOKEN",
      symbol: "REP",
      marketId: null,
      outcome: null,
    }, {
      contractAddress: "0x0200000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000001",
      outcome: 1,
    }, {
      contractAddress: "0x0100000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000001",
      outcome: 0,
    }, {
      contractAddress: "0xa200000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x1000000000000000000000000000000000000001",
      outcome: 1,
    }, {
      contractAddress: "0xa100000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x1000000000000000000000000000000000000001",
      outcome: 0,
    }, {
      contractAddress: "0xe0e1900000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000019",
      outcome: 0,
    }, {
      contractAddress: "FEE_TOKEN_02_1",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000002",
      outcome: 0,
    }, {
      contractAddress: "SHARE_TOKEN_ADDRESS",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000003",
      outcome: 0,
    }, {
      contractAddress: "TOKEN_ADDRESS",
      symbol: "shares",
      marketId: "0x1000000000000000000000000000000000000001",
      outcome: 2,
    }, {
      contractAddress: "0x0123000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000211",
      outcome: 0,
    }, {
      contractAddress: "0x0124000000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000211",
      outcome: 1,
    }, {
      contractAddress: "0x0124A00000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000442",
      outcome: 0,
    }, {
      contractAddress: "0x0124B00000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000442",
      outcome: 1,
    }, {
      contractAddress: "0x0124C00000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x0000000000000000000000000000000000000442",
      outcome: 2,
    }, {
      contractAddress: "0x0124100000000000000000000000000000000000",
      symbol: "shares",
      marketId: "0x000000000000000000000000000000000000021c",
      outcome: 1,
    }];
    return knex.batchInsert("tokens", seedData, seedData.length);
  });
};
