// const User = require("../../models/user.model");
const { signToken } = require("../../helper/user-helper");
const { keyStore, NETWORK_ID, ACCOUNT_ID, account } = require("../../near");
const { PublicKey } = require("near-api-js/lib/utils");

module.exports = async (req, res) => {
    try {
        const { signature, publicKey } = req.body;
        //Validate input
        console.log(req.body)
        if (!signature || !publicKey) return res.error("Invalid Fields.");
        //Access to key store
        // const key = await keyStore.getKey(NETWORK_ID, ACCOUNT_ID);
        //Validate signature with a message
        const isValidSignature = PublicKey.from(publicKey).verify(
            Buffer.from("admin"),
            Buffer.from(signature)
        );
        // const isValidSignature = key.verify(
        //     "admin",
        //     Uint8Array.from(signature)
        // );
        if (!isValidSignature) return res.unauthorized();

        //Check public key exist
        const accessKeys = await (await account).getAccessKeys();
        const isValidPublicKey = accessKeys.some(
            (keys) => keys.public_key === publicKey
        );
        if (!isValidPublicKey) return res.unauthorized();
        //Sign and return jwt
        const token = await signToken(ACCOUNT_ID);
        return res.ok({ token });
    } catch (error) {
        console.log(error);
        return res.serverError(error);
    }
};