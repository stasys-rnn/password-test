const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
    <body>
        <form method="POST">
            <input type="text" name="email" value="test@qwe.com" placeholder="email" style="display:none;"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Submit</button>
        </form>
    </body>
</html>
  `)
}).post('/', (req, res) => {
  res.redirect('/secure')
}).get('/secure', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
    <body>
        This is secure part
    </body>
</html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
