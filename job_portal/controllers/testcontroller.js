export const testController = (req,res)=>{
    const {name} = req.body ;
    res.status(404).send(`your name is ${name}`);
}

