const Catway = require('../models/catway');
const mongoose = require('mongoose');


exports.homepagecatway = async (req, res, next) =>{
    
    try {
        const catways = await Catway.find({});

        res.render('catways', { catways } ); 

    } catch (error) {
        console.log(error)
    }

}

exports.addCatways = async (req, res, next) =>{
    const locals = {
        title: 'Add new catway',
        description:'Formulaire pour ajouter un catway',
    }

    res.render('dashboard' , locals);

}

exports.postCatway = async (req, res, next) =>{

  
    const newcatway = new Catway({
        catwayNumber: req.body.catwayNumber,
        type: req.body.type,
        catwayState: req.body.catwayState
    });
    
    try {

        await Catway.create(newcatway )
    
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error)

    }

  

}



exports.getById = async (req, res, next) =>{
    const id = req.params.id

    try{
        let catway = await Catway.findById(id);

        if(catway) {
            return res.status(200).json(catway);
        }

        return res.status(404).json('user_not_found');
    }catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {

    const temp = ({
        catwayNumber: req.body.catwayNumber,
        type: req.body.type,
        catwayState: req.body.catwayState
        
    });

    try{
        let catway = await Catway.create(temp);

        return res.status(201).json(catway);
    }catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id
    const temp = ({
        catwayNumber: req.body.catwayNumber,
        type: req.body.type,
        catwayState: req.body.catwayState
    });

    try {
        let catway = await Catway.findOne({_id : id});

        if (catway) {
            Object.keys(temp).forEach((key)=>{
                if (!!temp[key]){
                    catway[key] = temp[key];
                }
            });

            await catway.save();
            return res.status(201).json(catway);
        }

        return res.status(404).json('user_not_found');
    }catch (error){
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) =>{
    const id = req.params.id

    try{
        await Catway.deleteOne({_id : id});

        return res.status(204).json('delete_ok');
    }catch (error) {
        return res.status(501).json(error);
    }
}




