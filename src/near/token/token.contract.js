// creates keyStore from a provided file
// you will need to pass the location of the .json key pair

const { KeyPair, keyStores, connect, utils } = require("near-api-js");
const fs = require("fs");
const homedir = require("os").homedir();

const TOKEN_CONTRACT = process.env.TOKEN_CONTRACT; // NEAR account tied to the keyPair
const NETWORK_ID = "testnet";
// path to your custom keyPair location (ex. function access key for example account)
const KEY_PATH = `/.near-credentials/testnet/${TOKEN_CONTRACT}.json`;

const credentials = JSON.parse(fs.readFileSync(homedir + KEY_PATH));
const myKeyStore = new keyStores.InMemoryKeyStore();
myKeyStore.setKey(
    NETWORK_ID,
    TOKEN_CONTRACT,
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
const keyStore = myKeyStore;
const setupNear = async () => {
    const near = await connect(connectionConfig);
    return near;
};

module.exports = {
    TOKEN_CONTRACT,
    setupNear,
    keyStore,
};
