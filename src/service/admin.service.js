const {
    STATUS_SERVER_ERROR,
    STATUS_SUCCESS,
    STATUS_AUTHORIZED,
} = require("../constants/response.status");

const { AUTHORIZED_TEXT, LOGOUT_SUCCESS } = require("../constants/response.text");
const { adminModel, accountModel } = require("../models");
const { setCookies } = require("../utils/cookie");
const { signTokenJwt } = require("../utils/jwt");

async function adminSignup(req, res) {
    try {
        const { username, password } = req.body;
        delete req.body.username;
        delete req.body.password;
        const resultAccount = await accountModel.create({ username, password });
        const accountId = resultAccount.get("id");
        const resultAdmin = await adminModel.create({...req.body, accountId });
        const token = signTokenJwt(resultAdmin, 60 * 60);
        setCookies(res, token, 60 * 60);
        res.status(STATUS_SUCCESS).send(resultAdmin);
    } catch (err) {
        res.status(STATUS_SERVER_ERROR).send(err);
    }
}

async function adminLogin(req, res) {
    try {
        const { username, password } = req.body;

        const resultAccount = await accountModel.findOne({ where: { username } });
        const stateLogin = resultAccount.handleLogin(
            password,
            resultAccount.get("password")
        );

        if (stateLogin) {
            adminModel
                .findOne({ accountId: resultAccount.get("id") })
                .then((result) => {
                    const token = signTokenJwt(result, 60 * 60);
                    setCookies(res, token, 60 * 60);
                    res.status(200).send(result);
                });
            return;
        }
        res.status(STATUS_AUTHORIZED).send(AUTHORIZED_TEXT);
    } catch (err) {
        res.status(STATUS_SERVER_ERROR).send(err);
    }
}

async function adminLogout(req, res) {
    try {
        setCookies(res, null, 0);
        res.status(200).send(LOGOUT_SUCCESS);
    } catch (error) {
        res.status(STATUS_SERVER_ERROR).send(err);
    }
}




module.exports = {
    adminSignup,
    adminLogin,
    adminLogout,
};