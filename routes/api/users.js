const { getByEmail } = require('../../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const router = require('express').Router();

router.post('/login', async (req, res) => {
    const user = await getByEmail(req.body.email);
    console.log(user);
    if (user) {
        const samePw = bcrypt.compareSync(req.body.password, user.password);
        //console.log(req.body.password);
        //console.log(user.password);
        console.log('comparacion', samePw);
        if (samePw) {
            res.json({
                success: 'Login correcto',
                token: createToken(user),
                id: user.id
            })
        } else {
            res.json({ error: 'error en contraseña' })
        }
    } else {
        res.json({ error: 'error en email' })
    }
});

function createToken(user) {
    const data = {
        userId: user.id,
        caduca: dayjs().add(60, 'minutes').unix()
    }

    const token = jwt.sign(data, 'f1966f33ba32d7e4a4e1bfefa6d27a7f7e2b1e636362ff0cbdd2f29b3f6cef67')
    return token;
}

module.exports = router;