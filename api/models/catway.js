const mongoose = require('mongoose'); 
const Schema = mongoose. Schema;
const bcrypt = require('bcrypt'); 

const Catway = new Schema ({
    catwayNumber: {
        type : Number, 
        trim : true 
    },
    type: {
        type: String,
        trim : true
     },
    catwayState:{
        type : String,
        trim : true
       
    }
    
},{
    timestamps: true 
});

Catway.pre('save', function(next){
    if (!this.isModified('catwayState')) {
        return next();
    }
    this.catwayState = bcrypt.hashSync(this.catwayState, 10);
    next();
});


module.exports = mongoose.model('Catway', Catway);