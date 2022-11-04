const { Flights }= require( "../models/Flight");

const { v4: uuid} = require("uuid")

//get all flight

exports.getFlights= async ( req, res) => {
    try {
        const flight =Flights;
        res.status(200).json({
            message: "All flight",
            flight:flight
        });
    } catch (err) {
        res.status(500).json ({
            message: err.message
        })
    }
}





//get single flight
exports.getFlight= async (req, res) => {
    try{
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);
        res.status(201).json({
            message: "Flight Found",
            flight
        })
    } catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}

//add flight (create a new flight)

exports.createFlight= async (req, res) => {
    try{
        const {email, name, title, price}= await req.body
        const newFlight = {
            id: uuid(),
            name,
            email,
            title,
            price,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        } ; 
        console.log(newFlight)
        Flights.push(newFlight);
        res.status(201).json({
            message: "Flight created",
            newFlight
        })
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
// update/edit flight

exports.updateFlight = async (req,res) => {
    try {
        let id =req.params.id
        const flight = Flights.find((flight)=>flight.id === id);
        const { email, name, title, price} = await req.body;
        flight.email=email;
        flight.name=name;
        flight.title= title;
        flight.price= price;
        res.status(200).json({
            message: "Flight Updated",
            flight
        });
    }
    catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}
//delete flight

exports.deleteFlight= async (req,res) => {
    try{
        let id = req.params.id;
        const flight= Flights.find((flight)=> flight.id === id);
        Flights.splice(Flights.indexOf(flight),1);
        res.status(200).json({
            message: "Flight Deleted",
            flight
        })
    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}
