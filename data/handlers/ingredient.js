module.exports = class {

    constructor(Ingredients) {
      this.Ingredients = Ingredients;
    }
  
    getingredients(req,res,next) {
      this.Ingredients.find({}).exec((err, item)=>{
        if(err || !item){
           res.json({"bacon":0,"cheese":0,"meat":0,"salad":0, "spices":0});
        }else{
            res.json(item);
        }
      });
    }
  }
  
  
  