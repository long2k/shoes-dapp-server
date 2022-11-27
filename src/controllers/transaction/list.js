const { getTxsOf } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const transactions = JSON.parse(JSON.parse(await getTxsOf(id)));
        console.log(transactions);
        if (transactions) {
            return res.ok(transactions);
        }
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
