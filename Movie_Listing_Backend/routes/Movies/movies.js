const express=require('express');
const router =express.Router();
const Movie=require("../../db/schemas/movieSchema")

router.get("/",async(req,res)=>{
    const queryParams=req.query;
    const filters={};
    if(queryParams.name){
        filters.name={
            $regex:`^${queryParams.name}`,
            $options:"i",
        }
    }
    if(queryParams.rating){
        filters.rating={
            $gte:parseFloat(queryParams.rating)
        };
    }
   const movies=await Movie.find(filters);
   res.json(movies);
});
router.post("/",async(req,res)=>{
    try{
    const moviesData=req.body;
    const newMovie=new Movie(moviesData);
    await newMovie.save();
    res.json({
        message:"Movie added successfully"
    });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})

router.put("/:id",async(req,res)=>{
    try{
        const movieId=req.params.id;
        const updateMoviesData=req.body;
        await Movie.findByIdAndUpdate(movieId,updateMoviesData);
        res.json({
            message:"Movie updated successfully",
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const movieId=req.params.id;
        const DeleteMoviesData=req.body;
        await Movie.findByIdAndDelete(movieId,DeleteMoviesData);
        res.json({
            message:"Movie Deleted successfully",
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})

router.get("/:id", async (req, res) => {
    try {
        const movieId = req.params.id;
         await Movie.findById(movieId); 
        res.json({
            message: "Movie found successfully",
        });
    } catch (error) {
        if(error.kind=="ObjectId"){
            res.status(500).json({ 
            message: "Movie not found",
            });
        }
        else{
            res.status(500).json({ 
            message: "Internal server error",
            });
        }

    }
});



module.exports=router;//to export this file
