var express = require("express")
var db = require("../models");

module.exports = function(app) {
  //=========new user===============
app.post("/api/users", function(req, res) {
  console.log(req.body)
    db.users.create({frist_name: req.body.frist_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      Email: req.body.Email,
      password:req.body.password,
      confirm_password:req.body.confirm_password}).then(function(dbusers) {
      res.json(dbusers);
    });
  });
//==================new order=================
  app.post("/api/orders", function(req, res) {
    console.log(req.body)
      db.orders.create({
        store_name: req.body.store_name,
        order_location: req.body.order_location,
        order_info: req.body.order_info,
        size:req.body.size,
        quantity: req.body.quantity,
        expier_time:req.body.expier_time}).then(function(dborders) {
        res.json(dborders);
      });
    });
//==================show order=================================================
app.get('/api/all', (req, res) => {  
  db.users.findAll({
    include: [
      {
        model: db.orders,
      }
    ]
  }).then(users => {
    const resObj = users.map(user => {

      //tidy up the user data
      return Object.assign(
        {},
        {
          user_Name: user.frist_name+user.last_name,
          phone: user.phone,
          id: user.orders.map(order => {

            //tidy up the post data
            return Object.assign(
              {},
              {
                location: order.order_location,
                store: order.store_name,
                order_info:order.order_info+","+order.quantity+","+order.size+","+order.expier_time, 
              }
              )
          })
        }
      )
    });
    console.log('RESOBJ', resObj);
    res.json(resObj)
  });
});

  }
