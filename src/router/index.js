const {Router} = require('express')

const router = Router()

router.get('/', (req,res,next)=>{
     res.render('index.ejs')
})

router.post('/register',( req,res,next)=> {
    // req.flash('user', req.body)
     req.flash('success', 'user creating successfully')
     res.redirect('product')
 })

router.get('/profile', (req,res,next)=>{
     res.render('profile.ejs')
})

router.get('/product', (req,res,next)=>{
     res.render('product.ejs')
})




module.exports = router