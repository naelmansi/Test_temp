const path = require('path')
const express = require('express')

const app = express()

//define paths for Exprss config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname,'../templates')


app.use(express.static(publicDirectoryPath))

//to set views directory to non-defualt setting
//setup handlebars engin and views location `
app.set('views',viewsDirectory)
app.set ('view engine', 'hbs');

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get ('/about',(req,res)=>{
    res.render('about',{
        about: 'This is dynamic contentn'
    })
})

app.get('', (req,res)=> {
    res.render('index',{
        pageTitle : 'My NodeJs Course',
        pageHeader: 'Welcome to my training'
    })

})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})