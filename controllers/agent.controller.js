exports.chat = async(req,res)=>{

try{

const { message } = req.body;


if(!message){

return res.status(400).json({
message:"Message obligatoire"
});

}


res.json({
response:"Agent agricole reçu : " + message
});


}catch(error){

res.status(500).json({
message:error.message
});

}

};