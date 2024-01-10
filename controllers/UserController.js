const usermodel = require('../models/usermodel');


//register 
const logincontrol = async (req, res) => {          
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email, password })
        if (!user) {
            res.status(400).json({ success: false, message: 'User not found' })
        }
        res.status(200).json({ success: true, message: 'User found' })


    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

    //login
    const registercontrol = async (req,res) => {
        try{
            const newUser = new usermodel(req.body);
            await newUser.save();
            res.status(200).json({success: true, message: 'User registered'})

        }catch(err){
            res.status(400).json({success: false, message: err.message})
        }
     }

    module.exports = { logincontrol, registercontrol }