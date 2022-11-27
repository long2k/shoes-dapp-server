// creates keyStore from a provided file
// you will need to pass the location of the .json key pair

const { KeyPair, keyStores, connect } = require("near-api-js");
const fs = require("fs");
const homedir = require("os").homedir();

export const ACCOUNT_ID = process.env.ACCOUNT_ID; // NEAR account tied to the keyPair
export const NETWORK_ID = "testnet";
// path to your custom keyPair location (ex. function access key for example account)
const KEY_PATH = `/.near-credentials/testnet/${ACCOUNT_ID}.json`;

const credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));
const myKeyStore = new keyStores.InMemoryKeyStore();
myKeyStore.setKey(
    NETWORK_ID,
    ACCOUNT_ID,
    KeyPair.fromString(credentials.private_key)
);

const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, // first create a key store
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
};
export const account = (async () => {
    const nearConnection = await connect(connectionConfig);
    return await nearConnection.account(ACCOUNT_ID);
})();
export const keyStore = myKeyStore;
