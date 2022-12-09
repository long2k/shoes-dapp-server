const { utils } = require("near-api-js");

module.exports = {
    THREE_HUNDRED_TGAS: utils.format.parseNearAmount("0.0000000003"),
    NO_DEPOSIT: "0",
};
