var express = require("express")
var router = express.Router();
let data ={
    
    "previous":  {
        "billingPeriod":"NOV 22 - DEC 21",
       "billDescription":"Do more unlimited",
        "totalAmount":240.24,
        "billDueDate":"12/21/2020",
        "isBillPaid": true,
        "billId": 1,
        "lateFee":"0.0",
        "equipmentCharges": 41.66,
        "taxesAndGovernmentalSurcharges": 0.25,
        "monthlyCharges":186.99,
        "vzWirelessSurcharges": 8.35,
        "content":{
            "type" : "usageAndPurchaseCharges",
            "itemId":"R381|Google Play (HotSchedules)|O|33| - APPLICATN HotSchedules|12/21/2020",
            "name":"Google Play (HotSchedules)",
            "charge": 2.99
        }
    }
  }
router.get("/getdata", function(req, res, next){
    req.app.io.emit('getData',JSON.stringify(data))
    res.send("haha")
});

module.exports = router;
