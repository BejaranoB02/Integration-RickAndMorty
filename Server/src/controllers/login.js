const users = require("../utils/users")

const login = (req, res) => {
    const { email, password } = req.query;
    if (users.email === email && users.password === password) {
        res.status(200).json({ access: true });
    }
    res.status(200).json({ access: false })
};

module.exports = login;