module.exports = {
    getCurrentDate: () => {
        return new Date().toLocaleString("vi-VN").split(" ")[1];
    },
    dateToLocalDate: (date) => {
        return date.toLocaleString("vi-VN").split(" ")[1];
    },
};
