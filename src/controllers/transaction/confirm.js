const { confirmOrder } = require("../../near/interface");
module.exports = async (req, res) => {
    try {
        const {id} = req.params
        const outcome = await confirmOrder(id);
        console.log("OK" + outcome);
        if (outcome.status.Failure) {
            console.log("FAil" + outcome.status.Failure);
            return res.error(outcome);
        }
        return res.ok(`Transaction ${id} confirmed`);
    } catch (error) {
        return res.serverError("error:" + error);
    }
};
