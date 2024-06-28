const express = require("express");
const router = express.Router();
const {studentsDb} = require("../Database");

router.get('/', async (req, res) => {
    const data = await studentsDb.getStudents();
    res.status(200).render("index", {data: data});
});

router.post("/api/v1/students", async (req, res) => {
    const data = await studentsDb.createStudent({
        name : req.body.name,
        marks: req.body.marks,
        subject: req.body.subject,
        grade: req.body.grade,
    });

    res.status(200).json({status: 'success', item: {id: data}});
});

router.get("/api/v1/students", async (req, res) => {
    const data = await studentsDb.getStudents();

    res.status(200).json({status: 'success', item: data});
});

module.exports = router;