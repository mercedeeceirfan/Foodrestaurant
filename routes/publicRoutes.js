const router = require('express').Router();
const fs = require('fs');
const categories = require('../data/categories');
const menu = require ('../data/menu');
const Item = require('../models/itemModel');
const Ingredients = require('../models/ingredient.model');


/* const isAuthenticated = require('../middleware/auth');
const IngredientHandler = require('../data/handlers/ingredient.js');
const ingredientHandler = new IngredientHandler(Ingredients); */ 



module.exports = ()=>{
/*   router.get('/api/ingredients', ingredientHandler.getingredients.bind(ingredientHandler)); */  

router.get('/api/ingredients', (req, res)=>{
  /* const ingredientas = await Ingredients.find({});
  res.json(ingredientas); */
  Ingredients.find(function(err, docs) {
    console.log(docs);
    if(docs){
        res.json({"bacon":0,"cheese":0,"meat":0,"salad":0, "spices":0});
     } else {
        res.json(docs);
      }
  }); 
});
  
  router.get('/api/welcome', (req, res)=>{
    res.json({
      url:'/images/md.png'
    })
  });

  router.get('/api/categories', (req, res)=>{
    res.json({categories})
  });

  router.get('/api/menu', async (req,res)=>{
    try {
      const menu = await Item.find({});
      res.send({menu: menu})
    } catch (err){
      console.log(err);
    }
  });

  router.post('/api/orders', (req, res)=>{
    console.log('new (world) order');

    const {name, address, phone, orders} = req.body;

    const io = req.app.get('socketio');
    io.emit('order', req.body);



    const ordersString = orders.reduce((total, item)=>{
      return total + `${item.name} ${item.price} \n`
    },'');

    const order =
        `name: ${name} \n
    address: ${address} \n 
    phone: ${phone} \n
    orders: \n
    ${ordersString}
    `;

    fs.appendFile('order.txt', order, (err)=>{
      if (err) console.log(err);
    });
    res.send('ok')
  });
  return router;

}
/* module.exports = router; */