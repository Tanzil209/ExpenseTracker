const express = require("express");
const router = express.Router();
const { addIncome, getIncome, deleteIncome } = require("../controllers/income");
const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");


// router.get('/', (req,res) =>{               //setting routes for backend
//     res.send("hello world")
// })

router.post('/add-income', addIncome)          //setting endpoint for posting and a method comming from controllers and calling there function
    .get('/get-income',getIncome)
    .delete('/delete-income/:id',deleteIncome)
    .post('/add-expense',addExpense)
    .get('/get-expense',getExpense)
    .delete('/delete-expense/:id',deleteExpense)

module.exports = router