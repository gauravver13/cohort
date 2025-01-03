const { Router } = require('express')
const { courseModel, purchaseModel } = require('../db')
const { userMiddelware } = require('../middleware/user.middleware')

const courseRouter = Router()

courseRouter.post('/purchase', userMiddelware, async (req, res) => {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRouter.post('/preview',async (req, res) => {
    const courses = await courseModel.find({});


    res.send({
        courses,
        message: 'gets the course model'
    })
})

module.exports = {
    courseRouter: courseRouter
}
