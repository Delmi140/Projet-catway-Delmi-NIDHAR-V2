const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

exports.homepage = async (req, res, next) =>{
    
    try {
        const users = await User.find({})

        res.render('dashboard', { users } ); 

    } catch (error) {
        console.log(error)
    }

}

exports.addUser = async (req, res, next) =>{
    const locals = {
        title: 'Add new user',
        description:'Formulaire pour ajouter un user',
    }

    res.render('dashboard' , locals);

}

exports.postUser = async (req, res, next) =>{

  
    const newUser = new User({
        name: req.body.name,
	    firstname: req.body.firstname,
	    email: req.body.email,
	    password: req.body.password
    });
    
    try {

        await User.create(newUser )
    
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error)

    }

  

}

    
exports.getById = async (req, res, next) =>{
    	const id = req.params.id
    	
    	try{
    	    let user = await User.findById(id);
    	
    	    if(user) {
    	        return res.status(200).json(user);
    	    }
    	
    	    return res.status(404).json('user_not_found');
    	}catch (error) {
    	    return res.status(501).json(error);
    	}
    }
    	
    
    
    	
    exports.update = async (req, res, next) => {
    	const id = req.params.id
    	const temp = ({
    	    name: req.body.name,
    	    firstname: req.body.firstname,
    	    email: req.body.email,
    	    password: req.body.password
    	});
    	
    	try {
    	    let user = await User.findOne({_id : id});
    	
    	    if (user) {
    	        Object.keys(temp).forEach((key)=>{
    	            if (!!temp[key]){
    	                user[key] = temp[key];
    	            }
    	        });
    	
    	        await user.save();
    	        return res.status(201).json(user);
    	    }
    	
    	    return res.status(404).json('user_not_found');
    	}catch (error){
    	    return res.status(501).json(error);
    	}
    }
    	
    exports.delete = async (req, res, next) =>{
    	const id = req.params.id
    	
    	try{
    	    await User.deleteOne({_id : id});
    	
    	    return res.status(204).json('delete_ok');
    	}catch (error) {
    	    return res.status(501).json(error);
    	}
    }
    
    