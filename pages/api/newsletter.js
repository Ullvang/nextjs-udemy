import { connect, MongoClient } from "mongodb";

async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nextjs-app:" +
      process.env.DB_PASS +
      "@nextjs-db.mnf8i.mongodb.net/events?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection("newsletter").insertOne(document);
  return db;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    res.status(201).json({ message: "Signed up!" });
  }
}
