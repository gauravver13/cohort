const { Router } = require('express')
const { adminModel, courseModel } = require('../db');
const { JWT_ADMIN_PASSWORD } = require('../config');
const bcrypt = require('bcryptjs')
const { authMiddleware } = require('../middleware/admin.middleware');
const course = require('./course');
const adminMiddleware = require('../middleware/admin.middleware');

const adminRouter = Router();

adminRouter.post('/signup', async (req, res) => {
    
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
        const userExist = await adminModel.findOne({
            email: email,
            username: username
        })

        if(userExist) {
            res.status(302).send({
                message: "User already exist"
            })
            return;
        }
        await adminModel.create(user)
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
})

adminRouter.post('/signin', async (req, res) => {
    
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
        }, JWT_ADMIN_PASSWORD);

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
        message: 'Signin successfully'
    })
})

adminRouter.post('/course', authMiddleware, async (req, res) => {
    const adminId = req.userId
    const { title, description, price, imageUrl } = req.body

    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
    })
    
    res.json({
        message: "Course model created!!",
        course: course._id
    })
    
    // title: String,
    // description: String,
    // price: Number,
    // imageUrl: String,
    // creatorId: ObjectId

})

adminRouter.put('/course', authMiddleware, async (req, res) => {
    const adminId = req.userId;
    const { title, description, price, imageUrl } = req.body

    const course = await courseModel.updateOne({
        courseId: course._id,
        creatorId: adminId
    }, {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl
    })
})

adminRouter.get('/course/bulk', adminMiddleware, async (req, res) => {
    const adminId = req.userId;

    const courses = await course.find({
        creatorId: adminId
    })

    res.json({
        message: "gets course bulk",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}