import Laptop from "../model/laptopModel.js"

//saved to database
export const create=async(req, res)=>{
    try{
        const {name, brand,model,storage,screenSize,price,description}=req.body
        const laptop=await Laptop.create({name, brand,model,storage,screenSize,price,description})
        res.status(200).json({message: "Laptop is successfully added!", data:laptop})
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//get all the laptop from database
export const getAllLaptop=async(req, res)=>{
    try{
        const laptop=await Laptop.find();
        res.status(200).json({message: "Successfull get all the laptop", data:laptop})
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//get single laptop from the database
export const getSingleLaptop=async(req, res)=>{
    try{
        const id=req.params.id
        //const {id}=req.params
        const laptop=await Laptop.findById(id)
        res.status(200).json({message:"Successfully get the singleLaptop!", data:laptop});
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//update the laptop
export const updateLaptop=async(req, res)=>{
    try{
        const id =req.params.id
        const {name, brand,model,storage,screenSize,price,description}=req.body
        const laptop=await Laptop.findByIdAndUpdate(id, {name, brand,model,storage,screenSize,price,description})
        res.status(200).json({message:"Successfully updated the laptop", data:laptop});
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//delete the laptop
export const deleteLaptop=async(req,res)=>{
    try{
        const id=req.params.id
        await Laptop.findByIdAndDelete(id);
        res.status(200).json({message:"Successfully delete the laptop"})
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
}

//