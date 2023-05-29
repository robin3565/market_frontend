exports.HOME_PATH =
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";
exports.BACK_PATH =
process.env.NODE_ENV === "development" ? "http://localhost:8085" : "http://43.201.186.140:8085";
exports.proxyUrl = 'https://cors-anywhere.herokuapp.com/';
