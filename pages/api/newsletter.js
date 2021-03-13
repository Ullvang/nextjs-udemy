import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://nextjs-app:" +
        process.env.DB_PASS +
        "@nextjs-db.mnf8i.mongodb.net/newsletter?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });

    client.close();
    res.status(201).json({ message: "Signed up!" });
  }
}

//mongodb+srv://nextjs-app:nextjs-app123@nextjs-db.mnf8i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
