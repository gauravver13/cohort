const { Router } = require('express')
const { userModel, purchaseModel, courseModel } = require('../db');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');
const userMiddleware = require('../middleware/user.middleware');


const userRouter = Router();


userRouter.post('/signup', async (req, res) => {

    const { email, password, firstName, lastName } = req.body

    if(!email && !password && !firstName && !lastName)
    {
        res.status(301).send({
            message: 'Please fill all the field'
        })
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    }

    try {
        const userExist = await userModel.findOne({
            email: email,
            username: username
        })

        if(userExist) {
            res.status(302).send({
                message: "User already exist"
            })
            return;
        }
        await userModel.create(user)
        res.status(201).send({
            message: "User Signed up successfully"
        })
    } catch (error) {
        res.status(501).send({
            message: "Error Signing up User"
        })
    }

    res.send({
        message: 'Signup Succeeded'
    })
} )

userRouter.post('/signin', async (req, res) => {
    
    const { username, email, password } = req.body

    if(!username || !email && password) {
        res.status(302).send({
            message: "Please send the required details"
        })
        return;
    }

    const user = await userModel.findOne({
        emai: email,
        username: username
    })


    if(user) {
        const token = jwt.sign({
            id: user._id,
        }, JWT_USER_PASSWORD);

        res.setHeader("token", token);
        res.cookie("token", token);
    
        res.send({
            token: token
        })
    } else {   
        res.send({
            message: "Incorrect Credentials"
        }) 
    }

    res.send({
        message: 'Signin endpoint'
    })
} )

userRouter.get('/purchases', userMiddleware, async(req, res) => {
    
    const userId = req.userId;

    // userId Search purchased course
    // find all the purchases
    // list all the purchace course id in an array 
    // list all the data that matches with the course id
    // bss done

    const purchases = await purchaseModel({
        userId,
    });

    
    let purchaseCourse = []

    // purchases.forEach(element => {
    //     purchaseCourse.push(element.courseId);
    // });
    for (let ele = 0; ele < purchases.length ; ele++) {
        purchaseCourse.push(purchases[ele].courseId)
    }


    const courseData = await courseModel.find({
        _id: { $in: purchaseCourse }
    })

    res.json({
        purchases,
        courseData
    })
} )

module.exports = {
    userRouter: userRouter
}