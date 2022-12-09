const User = require("../../models/user.model");
const { getCurrentDate, dateToLocalDate } = require("../../utils");
const { transferTokens } = require("../../near/interface");

//Total sum = 1
const probabilities = [
    [10, 0.01],
    [5, 0.05],
    [2, 0.12],
    [1, 0.82],
];

const spin = () => {
    const randomValue = Math.random();
    let rewardAmount;
    probabilities.reduce((total, [tokenAmount, prob], index, arr) => {
        if (randomValue > total + prob)
            // 0.01 -> 0.06 -> 0.18 -> 1
            return total + prob;
        rewardAmount = tokenAmount; //randomValue <= total + prob, update
        arr.splice(index); //Early stop
    }, 0);
    return rewardAmount || 0;
};

module.exports = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            accountId: id,
        });
        //User existed
        if (user) {
            //Check spin date
            user.lastSpin.toDateString;
            const currentDate = getCurrentDate();
            const lastSpinDate = dateToLocalDate(user.lastSpin);
            if (currentDate === lastSpinDate) {
                return res.error("User received today reward");
            }
        }
        //SPIN!!
        const amount = spin();
        if (amount > 0) await transferTokens(id, amount.toString());
        else return res.serverError("Something went wrong");
        //UPSERT: update if user exist otherwise insert one
        await User.findOneAndUpdate(
            { accountId: id },
            {
                lastSpin: new Date(),
            },
            { upsert: true }
        );
        return res.ok({ message: `You got ${amount} tokens` });
    } catch (error) {
        console.log(error);
        return res.serverError(error);
    }
};
