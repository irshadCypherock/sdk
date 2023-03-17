import { MockDeviceConnection } from '@cypherock/sdk-interfaces';
import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';

import * as sdkMocks from './__mocks__/sdk';
import { ManagerApp } from '../src/index';
import fixtures from './__fixtures__/getWallets';

describe('managerApp.getWallets', () => {
  let connection: MockDeviceConnection;
  let managerApp: ManagerApp;

  beforeEach(async () => {
    connection = await MockDeviceConnection.create();
    sdkMocks.create.mockClear();

    sdkMocks.sendQuery.mockReset();
    sdkMocks.waitForResult.mockReset();

    sdkMocks.runOperation.mockClear();

    managerApp = await ManagerApp.create(connection);
  });

  afterEach(async () => {
    await managerApp.destroy();
  });

  describe('should be able to get info', () => {
    fixtures.valid.forEach(testCase => {
      test(testCase.name, async () => {
        sdkMocks.sendQuery.mockImplementationOnce(async (params: any) => {
          expect(params).toBeDefined();
          expect(params.data).toEqual(testCase.query);
          return undefined;
        });

        sdkMocks.waitForResult.mockImplementationOnce(
          async () => testCase.result,
        );

        const output = await managerApp.getWallets();
        expect(output).toEqual(testCase.output);
        expect(sdkMocks.runOperation).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('should throw error when device returns invalid data', () => {
    fixtures.error.forEach(testCase => {
      test(JSON.stringify(Array.from(testCase.result)), async () => {
        sdkMocks.sendQuery.mockImplementationOnce(async (params: any) => {
          expect(params).toBeDefined();
          expect(params.data).toEqual(testCase.query);
          return undefined;
        });

        sdkMocks.waitForResult.mockImplementationOnce(
          async () => testCase.result,
        );

        await expect(managerApp.getWallets()).rejects.toThrow(
          testCase.errorInstance,
        );
      });
    });
  });
});
