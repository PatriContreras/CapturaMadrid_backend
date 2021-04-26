
const getByEmail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
            if (err) {
                return reject(err);
            }
            if (result.length === 0) return resolve(null)
            resolve(result[0]);
        })
    })
}


module.exports = { getByEmail }