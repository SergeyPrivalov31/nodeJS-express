exports.rand = (n1, n2) => {
    return Math.round(Math.random()*(n2-n1) + n1);
}