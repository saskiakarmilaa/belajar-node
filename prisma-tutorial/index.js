const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
    const allUsers = await prisma.user.findMany();
    
    res.json({allUsers});
});

app.post("/", async (req, res) => {
    console.log("data", req.body);
    const newUsers = await prisma.user.create({data: req.body});
    res.json(newUsers);
});

app.put("/:id", async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    const updatedUsers = await prisma.user.update({
        where: {id: parseInt(id)}, 
        data: {age: newAge},
    });
    res.json(updatedUsers);
});

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedUsers = await prisma.user.delete({
        where: {id: parseInt(id)}, 
    });
    res.json(deletedUsers);
});

app.post("/house", async (req, res) => {
    const newHouses = await prisma.house.create({data: req.body});
    res.json(newHouses);
});

app.get("/house", async (req, res) => {
    const address = req.params.id;
    const allHouses = await prisma.house.findUnique({
        where: {
            address, 
        },
        include: {
        owner: true,
        builtBy: false,
    },
});
    res.json(allHouses);
});

app.post("/house/many", async (req, res) => {
    const newHouses = await prisma.house.createMany({data: req.body});
    res.json(newHouses);
});

app.get("/house/withFilters", async (req, res) => {
    const filteredHouses = await prisma.house.findMany({
        where: {
            wifiPassword: {
                not: null,
            }, 
            owner: {
                age: {
                    gte: 22,
                },
            },
        },
        orderBy: [
            {
                owner: {
                    firstName: "desc",
                },
            },
        ],
        include: {
        owner: true,
        builtBy: false,
    },
});
    res.json(allHouses);
});

app.listen(3001, () => console.log(`Server running on port ${3001}`));