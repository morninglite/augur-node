import * as Knex from "knex";

exports.seed = async (knex: Knex): Promise<any> => {
  // Deletes ALL existing entries
  return knex("markets")
    .del()
    .then(
      async (): Promise<any> => {
        // Inserts seed entries
        const seedData = [
          {
            marketId: "0x1000000000000000000000000000000000000001",
            universe: "0x100000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 8,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x000000000000000000000000000000000d00db0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000001",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400000,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.1",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 1,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1506573470,
            shortDescription: "This is a categorical test market created by b0b.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000001",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 8,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000001",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400000,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.02",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 1,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1506573470,
            shortDescription: "This is a categorical test market created by b0b.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000002",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000002",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400100,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 2,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1506573480,
            shortDescription: "This is a yesNo test market created by b0b.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000003",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x000000000000000000000000000000000000d00d",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000003",
            marketCreatorMailboxOwner: "0x000000000000000000000000000000000000d00d",
            creationBlockNumber: 1400101,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 3,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1506573500,
            shortDescription: "This is another yesNo test market created by d00d.",
            designatedReporter: "0x000000000000000000000000000000000000d00d",
            designatedReportStake: "10",
            resolutionSource: "http://www.ttp-inc.com/0000000000000000000000000000000000000003",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000011",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 8,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000011",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 4,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "This is a categorical (8) test market created by b0b awaiting round 1 reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000012",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000012",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "Finance",
            tag2: "Augur",
            volume: "10",
            sharesOutstanding: "100",
            marketStateId: 5,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "This is a yesNo test market created by b0b, designated reporting",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000013",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000013",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "Finance",
            tag2: "Augur",
            volume: "10",
            sharesOutstanding: "1000",
            marketStateId: 6,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "creator by b0b, yesNo market, in awaiting finalization",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000014",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 5,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000014",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "politics",
            tag2: "ethereum",
            volume: "10",
            sharesOutstanding: "100",
            marketStateId: 7,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "created by b0b, 5 outcomes, designated reporting state.~|>a|b|c|d|e",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000015",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 4,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000015",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "tagging it",
            tag2: "tagged it",
            volume: "10",
            sharesOutstanding: "10",
            marketStateId: 8,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "creator b0b, 4 outcomes in designated reporting state.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000016",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 7,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000016",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "tagging it",
            tag2: "tagged it",
            volume: "10",
            sharesOutstanding: "10",
            marketStateId: 9,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "creator b0b, 7 outcomes, in designated reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 949,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000017",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 7,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000017",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "tagging it",
            tag2: "tagged it",
            volume: "10",
            sharesOutstanding: "10",
            marketStateId: 10,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "creator b0b, 7 outcomes, in designated reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10003,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000018",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 7,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000018",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "tagging it",
            tag2: "tagged it",
            volume: "10",
            sharesOutstanding: "10",
            marketStateId: 11,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "creator b0b, 7 outcomes, round 1 reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10003,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000019",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 5,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000019",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "tagging it",
            tag2: "tagged it",
            volume: "10",
            sharesOutstanding: "10",
            marketStateId: 12,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            finalizationBlockNumber: 1400002,
            shortDescription: "creator b0b 5 outcomes, market finalized.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000211",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000211",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1500001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 15,
            feeWindow: "0x2000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "This is a yesNo test market created by b0b awaiting round 1 reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            initialReportSize: "10",
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000222",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000222",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1500001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 16,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 2506573480,
            shortDescription: "This is a yesNo test market created by b0b in pre_reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000233",
            universe: "CHILD_UNIVERSE",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000233",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1500001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "test tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 16,
            feeWindow: "0x4000000000000000000000000000000000000000",
            endTime: 2506573480,
            shortDescription: "This is a yesNo test market created by b0b in pre_reporting.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x00000000000000000000000000000000000000f1",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: 2,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000233",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1500001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TeSt CaTeGoRy",
            tag1: "tEsT tag 1",
            tag2: "test tag 2",
            volume: "0",
            sharesOutstanding: "0",
            marketStateId: 17,
            feeWindow: "0x4000000000000000000000000000000000000000",
            endTime: 2506573480,
            shortDescription: "This is a yesNo forking test market created by b0b in finalized.",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 1,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x0000000000000000000000000000000000000ff1",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "scalar",
            numOutcomes: 2,
            minPrice: "200",
            maxPrice: "400",
            marketCreator: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            creationBlockNumber: 2786923,
            creationFee: "0.01",
            reportingFeeRate: "0.01",
            marketCreatorFeeRate: "0",
            marketCreatorFeesBalance: "0",
            marketCreatorMailbox: "0x8dc68e6f091f4147a823dbb129005035b2cf4f18",
            marketCreatorMailboxOwner: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            initialReportSize: "349680582682291667",
            category: "CRYPTO",
            tag1: "ETH",
            tag2: "",
            volume: "9.945",
            sharesOutstanding: "0.0208",
            feeWindow: "0x436ee596d5c2996b3bc00b18fbd58a1af759a0c6",
            endTime: 1534539600,
            finalizationBlockNumber: 2943251,
            forking: 0,
            needsMigration: 0,
            marketStateId: 1024,
            shortDescription: "What will be the price of ETH on 8/17/2018 5PM EDT",
            longDescription: "As reported by Coinbase.pro (Last trade before 08/17/2018 5PM EDT)",
            scalarDenomination: "USD",
            designatedReporter: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            designatedReportStake: "0.349680582682291667",
            resolutionSource: "https://pro.coinbase.com/trade/ETH-USD",
            numTicks: "2000000",
            consensusPayoutId: null,
            disputeRounds: 0,
            isInvalid: null,
            needsDisavowal: 0,
            lastTradeBlockNumber: 2827777,
            openInterest: "4.16",
            shareVolume: "0.0665",
            validityBondSize: "10000000000000000",
            transactionHash: "`0x8486e213d47dd971b5e52123a023e53e7bef68dccb6fa78e95743207a12fdef4",
            logIndex: 1,
          },
          {
            marketId: "0xfd9d2cab985b4e1052502c197d989fdf9e7d4b1e",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "yesNo",
            numOutcomes: "2",
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0xbd355a7e5a7adb23b51f54027e624bfe0e238df6",
            creationBlockNumber: "2209",
            creationFee: "0.01",
            reportingFeeRate: "0.01",
            marketCreatorFeeRate: "0",
            marketCreatorFeesBalance: "0",
            marketCreatorMailbox: "0xc868a27eb42ca7b92366b24dd89f903ff6da4ddf",
            marketCreatorMailboxOwner: "0xbd355a7e5a7adb23b51f54027e624bfe0e238df6",
            initialReportSize: null,
            category: "TEST",
            tag1: "AUGUR",
            tag2: "",
            volume: "28.89",
            sharesOutstanding: "30",
            feeWindow: "0x0000000000000000000000000000000000000000",
            endTime: 1546290000,
            finalizationBlockNumber: "",
            forking: 0,
            needsMigration: 0,
            marketStateId: 27,
            shortDescription: "test market",
            longDescription: "",
            scalarDenomination: "",
            designatedReporter: "0xbd355a7e5a7adb23b51f54027e624bfe0e238df6",
            designatedReportStake: "0.349680582682291667",
            resolutionSource: "",
            numTicks: "10000",
            consensusPayoutId: null,
            disputeRounds: null,
            isInvalid: null,
            needsDisavowal: 0,
            lastTradeBlockNumber: 2715,
            openInterest: "30",
            shareVolume: "30",
            validityBondSize: "10000000000000000",
            transactionHash: "0xfc04f06901aa1e1f703a2974bafd9f24e496c1b0b8208f835f06bace30f4650b",
            logIndex: 13,
          },
          {
            marketId: "0x0000000000000000000000000000000000000442",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "categorical",
            numOutcomes: 3,
            minPrice: "0",
            maxPrice: "1",
            marketCreator: "0x0000000000000000000000000000000000000b0b",
            marketCreatorMailbox: "0xbbb0000000000000000000000000000000000014",
            marketCreatorMailboxOwner: "0x0000000000000000000000000000000000000b0b",
            creationBlockNumber: 1400001,
            creationFee: "10",
            reportingFeeRate: "0.02",
            marketCreatorFeeRate: "0.01",
            marketCreatorFeesBalance: "0",
            category: "TEST CATEGORY",
            tag1: "",
            tag2: "",
            volume: "10",
            sharesOutstanding: "100",
            marketStateId: 7,
            feeWindow: "0x1000000000000000000000000000000000000000",
            endTime: 1507573470,
            shortDescription: "created by b0b, 3 outcomes, designated reporting state.~|>a|b|c",
            designatedReporter: "0x0000000000000000000000000000000000000b0b",
            designatedReportStake: "10",
            resolutionSource: "http://www.trusted-third-party.com",
            numTicks: 10000,
            forking: 0,
            needsMigration: 0,
            needsDisavowal: 0,
            openInterest: "0",
            shareVolume: "0",
            validityBondSize: "0",
            logIndex: 0,
          },
          {
            marketId: "0x000000000000000000000000000000000000021c",
            universe: "0x000000000000000000000000000000000000000b",
            marketType: "scalar",
            numOutcomes: 2,
            minPrice: "50",
            maxPrice: "250",
            marketCreator: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            creationBlockNumber: 2786923,
            creationFee: "0.01",
            reportingFeeRate: "0.01",
            marketCreatorFeeRate: "0",
            marketCreatorFeesBalance: "0",
            marketCreatorMailbox: "0x8dc68e6f091f4147a823dbb129005035b2cf4f18",
            marketCreatorMailboxOwner: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            initialReportSize: "349680582682291667",
            category: "TEST CATEGORY",
            tag1: "",
            tag2: "",
            volume: "9.945",
            sharesOutstanding: "0.0208",
            feeWindow: "0x436ee596d5c2996b3bc00b18fbd58a1af759a0c6",
            endTime: 1534539600,
            finalizationBlockNumber: null,
            forking: 0,
            needsMigration: 0,
            marketStateId: 7,
            shortDescription: "What will be the price of ETH on 8/17/2018 5PM EDT",
            longDescription: "As reported by Coinbase.pro (Last trade before 08/17/2018 5PM EDT)",
            scalarDenomination: "USD",
            designatedReporter: "0x6d28fdd8f0295692eee024f53e42b6458f3f55f5",
            designatedReportStake: "0.349680582682291667",
            resolutionSource: "https://pro.coinbase.com/trade/ETH-USD",
            numTicks: "2000000",
            consensusPayoutId: null,
            disputeRounds: 0,
            isInvalid: null,
            needsDisavowal: 0,
            lastTradeBlockNumber: 2827777,
            openInterest: "4.16",
            shareVolume: "0.0665",
            validityBondSize: "10000000000000000",
            transactionHash: "`0x8486e213d47dd971b5e52123a023e53e7bef68dccb6fa78e95743207a12fdef4",
            logIndex: 1,
          },
        ];
        return knex.batchInsert("markets", seedData, seedData.length);
      },
    );
};
