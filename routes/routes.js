const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const projectModel = require("../models/projectMongoDB");
const path = require("path");
const prisma = new PrismaClient();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'pages'));
app.use(express.json());
// app.use(express.static("pages"));


// ホームページ
app.get("/", async(req, res) => {
    const projects = await projectModel.find({});

    try {
        // res.send(projects);
        res.render("home", { projects: projects} );
        // res.sendFile(path.join(__dirname, '..', 'pages', 'home.html'));
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/project/:projectId", async(req, res) => {
    const projectId = req.params.projectId;
    console.log(projectId);
    try {
        const project = await prisma.projectDetail.findFirst({
            where: {
                project_id: projectId,
            }
        });
        console.log(project);
        res.render("project", {project : project});
    } catch (err) {
        res.status(500).send(err);
    }

});

// mongoDBに新しいプロジェクト情報を追加
app.post("/createProjectBasic", async(req, res) => {
    const project = await projectModel(req.body);

    try {
        console.log(123);
        await project.save();
        res.send(project);
    } catch (err) {
        res.status(500).send(err);
    }

});

// MySQLに新しいプロジェクト情報を追加
app.post("/createProjectDetail", async(req, res) => {
    console.log(123);
    const {
        project_id,
        name,
        caption,
        number,
        start_date,
        end_date,
    } = await req.body;

    console.log(
        project_id,
        name,
        caption,
        number,
        start_date,
        end_date,
    )
    const project = await prisma.projectDetail.create({
        data: {
            project_id: project_id,
            name: name,
            caption: caption,
            number: number,
            start_date: new Date(start_date),
            end_date: new Date(end_date),
        },
    });
    return res.json(project);
});

// 各プロジェクトページ

module.exports = app;