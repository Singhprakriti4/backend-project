//to avoid repetitive try catch blocks in each controller function
//request handler is that routing function which handles request and response
//this code is just to give try and catch functionality via higher order function to eaxh controller function
// this reduces code redundancy

const asyncHandler=(requestHandler)=> {
    (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((error)=>next(error));
    }
}


export {asyncHandler}




// try catch approach via higher order function
// const asyncHandler=(fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next);  
//     }
//     catch(error){
//         error.status(error.statusCode || 500).json({
//             success:false,
//             message:error.message || "Internal server error"
//         });
//         next(error);
//     }
// }    