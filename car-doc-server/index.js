const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB
const uri = `mongodb+srv://${process.env.DB__User}:${process.env.DB__Pass}@cluster0.wvuyzyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const serviceCollection = client.db("carDoctor").collection("services");
    const orderedCollection = client.db("carDoctor").collection("orders");

    // load services data
    app.get("/services", async (req, res) => {
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
    app.post("/orders", async(req, res) => {
      const orders = req.body;
      const result = await orderedCollection.insertOne(orders)
      res.send(result)
    });

    app.get('/orders', async(req,res)=>{
      console.log(req.query.email)
      let query = {};
      if(req.query?.email){
        query = {email: req.query.email}
      }
        const result = await orderedCollection.find(query).toArray()
        res.send(result)
    })

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
