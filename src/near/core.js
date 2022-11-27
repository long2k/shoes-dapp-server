import {
    ACCOUNT_ID,
    NETWORK_ID,
    NO_DEPOSIT,
    setupNear,
    THREE_HUNDRED_TGAS,
} from ".";
const BN = require("bn.js");
export const viewMethod = async ({ method, args = {} }) => {
    try {
        const near = await setupNear();
        const res = await near.connection.provider.query({
            request_type: "call_function",
            account_id: ACCOUNT_ID,
            method_name: method,
            args_base64: Buffer.from(JSON.stringify(args)).toString("base64"),
            finality: "optimistic",
        });
        return Buffer.from(res.result).toString();
    } catch (error) {
        throw error;
    }
};

export const callMethod = async ({
    method,
    args = {},
    gas = THREE_HUNDRED_TGAS,
    deposit = NO_DEPOSIT,
}) => {
    try {
        const near = await setupNear();
        const account = await near.account(ACCOUNT_ID);
        return await account.functionCall({
            contractId: ACCOUNT_ID,
            methodName: method,
            args,
            gas: new BN(gas, 10),
            attachedDeposit: new BN(deposit, 10),
        });
    } catch (error) {
        throw error;
    }
};
