const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const MongoClient = require('mongodb').MongoClient;

(async () => {
  const app = express();
  const jsonParser = bodyParser.json();

  const port = 3001;

  const db = await connectToMongoDb(MongoClient);

  app.get('/cards', async (req, res) => {
    const cards = await db
      .collection('cards')
      .find()
      .toArray();
    return res.status(200).json(cards);
  });

  app.post('/cards', jsonParser, async ({ body }, res) => {
    const result = await db.collection('cards').insertOne({
      _id: uuid(),
      ...body
    });

    return res.status(201).json(result.ops[0]);
  });

  app.put(
    '/cards/:cardId',
    jsonParser,
    async ({ body, params: { cardId } }, res) => {
      const result = await db
        .collection('cards')
        .findOneAndUpdate(
          { _id: cardId },
          { $set: { column: body.column } },
          { returnOriginal: false }
        );

      return res.status(200).json(result.value);
    }
  );

  app.listen(port, () => console.log(`Listening on port ${port}!`));
})();

async function connectToMongoDb(MongoClient) {
  const conn = await MongoClient.connect('mongodb://localhost:27017/trello', {
    useNewUrlParser: true
  });
  return conn.db('trello');
}
