const getMain = (req, res) => {
    res.status(200).json({ msg: "sucess...!" });
};

const getSecond = (req, res) => {
    res.status(404).json({ msg: "server not fount" });
};

module.exports = {
    getMain,
    getSecond,
};
