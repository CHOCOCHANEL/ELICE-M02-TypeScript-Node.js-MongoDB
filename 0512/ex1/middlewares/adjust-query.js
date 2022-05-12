module.exports = (req, res, next) => {
    req.query = Object.keys(req.query).reduce((acc, key) => {
        const [value] = req.query[key].split('?');
        return {
            ...acc,
            [key]: value,
        };
    }, {});

    next();
}