const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// mongoDB
const uri = `mongodb+srv://${process.env.DB__User}:${process.env.DB__Pass}@cluster0.wvuyzyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// custom middleware
const logger = async (req, res, next) => {
  console.log("called", req.host, req.originalUrl);
  next();
};

async function run() {
  try {
    await client.connect();

    const serviceCollection = client.db("carDoctor").collection("services");
    const orderedCollection = client.db("carDoctor").collection("orders");

    // auth related api(JWT)
    app.post("/jwt", logger,  (req, res) => {
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS__Token, {
        expiresIn: "1h",
      });
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
        })
        .send({ success: true });
    });

    // load services data
    app.get("/services", logger, async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // single service data load
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const options = {
        projection: { title: 1, price: 1, service_id: 1, img: 1 },
      };
      const result = await serviceCollection.findOne(query, options);
      res.send(result);
    });

    // orders web to database
    app.post("/orders", async (req, res) => {
      const orders = req.body;
      const result = await orderedCollection.insertOne(orders);
      res.send(result);
    });

    // to get the order from specific user
    app.get("/orders", async (req, res) => {
      console.log(req.query.email);
      console.log("access-Token", req.cookies);
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await orderedCollection.find(query).toArray();
      res.send(result);
    });

    // to delete a order
    app.delete("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await orderedCollection.deleteOne(query);
      res.send(result);
    });

    // update the user's order
    app.patch("/orders/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updatedOrders = req.body;
      const updateDoc = {
        $set: {
          status: updatedOrders.status,
        },
      };
      const result = await orderedCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

// to check if the server is running or not
app.get("/", (req, res) => {
  res.send("server is running.....");
});
app.listen(port, (req, res) => {
  console.log(`Car Doctor Server is running on port ${port}`);
});
