const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 
// Handle a delete one view with id from query 
exports.costume_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Costume.findById(req.query.id) 
        res.render('costumedelete', { title: 'Costume Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 