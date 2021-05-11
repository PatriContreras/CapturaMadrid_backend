const insertEvent = ({ title, image, place, model, makeup, price, description, complete, date, time }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO events (title, image, place, model, makeup, price, description, complete, date, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [title, image, place, model, makeup, price, description, complete, date, time], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        })
    })
}

module.exports = { insertEvent }