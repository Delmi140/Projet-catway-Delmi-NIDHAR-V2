const mongoose = require('mongoose'); 
const Schema = mongoose. Schema;
const Catway = require('./catway')


const  Reservation = new Schema ({
    catwayNumber: {
        type : Number, 
        trim : true ,
        children:[Catway]
    },
    clientName: {
        type: String,
        trim : true
     },
    boatName:{
        type : String,
        trim :  true
       
    },
    checkIn:{
        type: Date, 
        default: Date.now()
    },
    checkOut:{
        type: Date, 
        default: Date.now()
    }    
},{
    timestamps: true 
});





module.exports = mongoose.model('Reservation', Reservation);
