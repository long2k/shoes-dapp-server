const { TOKEN_CONTRACT, setupNear } = require("./token.contract");
const { THREE_HUNDRED_TGAS, NO_DEPOSIT } = require("../constant");
const BN = require("bn.js");
module.exports = {
    viewMethod: async ({ method, args = {} }) => {
        try {
            const near = await setupNear();
            const res = await near.connection.provider.query({
                request_type: "call_function",
                account_id: TOKEN_CONTRACT,
                method_name: method,
                args_base64: Buffer.from(JSON.stringify(args)).toString(
                    "base64"
                ),
                finality: "optimistic",
            });
            return Buffer.from(res.result).toString();
        } catch (error) {
            throw error;
        }
    },
    callMethod: async ({
        method,
        args = {},
        gas = THREE_HUNDRED_TGAS,
        deposit = NO_DEPOSIT,
    }) => {
        try {
            const near = await setupNear();
            const account = await near.account(TOKEN_CONTRACT);
            return await account.functionCall({
                contractId: TOKEN_CONTRACT,
                methodName: method,
                args,
                gas: new BN(gas, 10),
                attachedDeposit: new BN(deposit, 10),
            });
        } catch (error) {
            throw error;
        }
    },
};
