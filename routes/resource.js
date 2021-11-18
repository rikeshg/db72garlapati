 
var express = require('express'); 
var router = express.Router(); 

const costume_controlers= require('../controllers/costume');
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/costume'); 

 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/costumes', costume_controller.costume_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/costumes/:id', costume_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/costumes/:id', 
costume_controller.costume_update_put); 
 
// GET request for one Costume. 
router.get('/costumes/:id', costume_controller.costume_detail); 
 
// GET request for list of all Costume items. 
router.get('/costumes', costume_controller.costume_list); 
 
/* GET costumes */ 
router.get('/', costume_controlers.costume_view_all_Page ); 

/* GET detail costume page */ 
router.get('/detail', costume_controlers.costume_view_one_Page); 

/* GET create costume page */ 
router.get('/create', costume_controlers.costume_create_Page); 

/* GET create update page */ 
router.get('/update', costume_controlers.costume_update_Page);

/* GET create costume page */ 
router.get('/delete', costume_controlers.costume_delete_Page); 

module.exports = router; 