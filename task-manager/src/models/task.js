const mongoose = require('mongoose')


const Task = mongoose.model('Task',  {

mobilenumber : {
   type : Number,
   maxlength :10,
   
//   validate(value){

//     if(value<10)
//     {
//         throw new Error('phone number is invalid')
//     }
//   }

}
})
module.exports = Task;