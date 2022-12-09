// const User = require("../../models/user.model");
const { signToken } = require("../../helper/user-helper");
const {
    SHOP_CONTRACT,
    setupNear,
} = require("../../near/shop/shop.contract");
const { PublicKey } = require("near-api-js/lib/utils");

module.exports = async (req, res) => {
    try {
        const { signature, publicKey } = req.body;
        //Validate input
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
        const near = await setupNear();
        const account = await near.account(SHOP_CONTRACT);
        const accessKeys = await account.getAccessKeys();
        const isValidPublicKey = accessKeys.some(
            (keys) => keys.public_key === publicKey
        );
        if (!isValidPublicKey) return res.unauthorized();
        //Sign and return jwt
        const token = await signToken(SHOP_CONTRACT);
        return res.ok({ token });
    } catch (error) {
        console.log(error);
        return res.serverError(error);
    }
};
