const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body

    let result = await db.get_user(username)
    let existingUser = result[0]

    if (existingUser) {
      return res.status(409).send(`username taken`)
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    let registeredUser = await db.register_user(username, hash)
    let user = registeredUser[0]

    delete user.hash
    req.session.user = user
    res.status(201).send(req.session.user)
  },

  login: async (req, res) => {
    const db = req.app.get('db')
    const { loginUsername: username, loginPassword: password } = req.body

    foundUser = await db.get_user(username)
    user = foundUser[0]

    if (!user) {
      return res.status(401).send(`username or password incorrect`)
    }

    isAuthenticated = bcrypt.compareSync(password, user.password)
    if (!isAuthenticated) {
      return res.status(401).send(`username or password incorrect`)
    }

    delete user.hash
    req.session.user = user
    res.send(req.session.user)

  },
  logout: (req, res) => {
    req.session.destroy()
    console.log(`logout fired`)
    res.sendStatus(200)
  },
  getUsers: (req, res) => {
    console.log(`getUsers was fired`)
    if (!req.session.user) { res.sendStatus(403) }
    else {
      res.status(200).send(req.session.user)
    }
  },
  allUsers: (req, res) => {

    const db = req.app.get('db')

    if (req.query.title) {
      let searchTerm = `%${req.query.title}%`

      db.search([searchTerm]).then((user) => {
        res.status(200).send(user)
      })
    } else {
      res.sendStatus(500)
    }
  },

  updateUser: (req, res) => {

    const db = req.app.get('db')
    const { id } = req.session.user;
    const { username } = req.body

    db.update_user([username, id]).then(() => {
      res.sendStatus(200)
       
    })
    
  },
}


