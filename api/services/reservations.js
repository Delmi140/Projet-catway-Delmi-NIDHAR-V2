const Reservation = require('../models/reservation');
const mongoose = require('mongoose');

exports.homepageres = async (req, res, next) =>{
    
    try {
        const reservations = await Reservation.find({})

        res.render('dashboard', { reservations } ); 

    } catch (error) {
        console.log(error)
    }

}

exports.addReservation = async (req, res, next) =>{
    const locals = {
        title: 'Add new réservation',
        description:'Formulaire pour ajouter une réservation',
    }

    res.render('dashboard' , locals);

}

exports.postReservation = async (req, res, next) =>{

  
    const newres = new Reservation({
        catwayNumber: req.body.catwayNumber,
        clientName: req.body.clientName,
        boatName: req.body.boatName,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
    });
    
    try {

        await Reservation.create( newres )
    
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error)

    }

  

}



exports.getById = async (req, res, next) =>{
    const id = req.params.id

    try{
        let reservation = await Reservation.findById(id);

        if(reservation) {
            return res.status(200).json(reservation);
        }

        return res.status(404).json('user_not_found');
    }catch (error) {
        return res.status(501).json(error);
    }
}

exports.add = async (req, res, next) => {

    const temp = ({
        catwayNumber: req.body.catwayNumber,
        clientName: req.body.clientName,
        boatName: req.body.boatName,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
        
    });

    try{
        let reservation = await Reservation.create(temp);

        return res.status(201).json(reservation);
    }catch (error) {
        return res.status(501).json(error);
    }
}

exports.update = async (req, res, next) => {
    const id = req.params.id
    const temp = ({
        catwayNumber: req.body.catwayNumber,
        clientName: req.body.clientName,
        boatName: req.body.boatName,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut
    });

    try {
        let reservation = await Reservation.findOne({_id : id});

        if (reservation) {
            Object.keys(temp).forEach((key)=>{
                if (!!temp[key]){
                    reservation[key] = temp[key];
                }
            });

            await reservation.save();
            return res.status(201).json(reservation);
        }

        return res.status(404).json('user_not_found');
    }catch (error){
        return res.status(501).json(error);
    }
}

exports.delete = async (req, res, next) =>{
    const id = req.params.id

    try{
        await Reservation.deleteOne({_id : id});

        return res.status(204).json('delete_ok');
    }catch (error) {
        return res.status(501).json(error);
    }
}
