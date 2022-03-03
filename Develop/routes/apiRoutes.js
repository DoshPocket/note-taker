const router = require ("express").Router()
const { read, deleteNote, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4, v4 } = require('uuid');

router.get('/notes', async (req, res) => {
const data = await read()
console.log(data)
  res.json(data)
});

router.post('/notes', async (req, res) => {
  const data = await readAndAppend({ id: uuidv4(), ...req.body })
  console.log(data)
    res.json(data)
  });

  router.delete('/notes/:id', async (req, res) => {
    const data = await deleteNote(req.params.id)
    console.log(data)
      res.json(data)
    });  

// // GET request for notes
// app.get('/api/notes', (req, res) => {
//   // Send a message to the client
//   res.status(200).json(`${req.method} request received to get display notes.`);

//   // Log our request to the terminal
//   console.info(`${req.method} request received to display notes.`);
// });

// POST request to add a note
// router.post('/notes', (req, res) => {
//   // Log that a POST request was received
//   console.info(`${req.method} request received to add a note.`);


//   // Destructuring assignment for the items in req.body
//   const { title, text } = req.body;

//   // If all the required properties are present
//   if (req.body) {
//     // Variable for the object we will save
//     const newNote = {
//       title,
//       text,
//       id: uuidv4(),
//     };
//     readAndAppendFile('.db/db.json', newNote)   
//     res.json('New note added successfully!');
//     } else {
//         res.error('Something went wonky.')
//     }
// });

//     // Obtain existing reviews
//     fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // Convert string into JSON object
//         const parsedReviews = JSON.parse(data);

//         // Add a new review
//         parsedReviews.push(newReview);

//         // Write updated reviews back to the file
//         fs.writeFile(
//           './db/reviews.json',
//           JSON.stringify(parsedReviews, null, 4),
//           (writeErr) =>
//             writeErr
//               ? console.error(writeErr)
//               : console.info('Successfully updated reviews!')
//         );
//       }
//     });

//     const response = {
//       status: 'success',
//       body: newReview,
//     };

//     console.log(response);
//     res.status(201).json(response);
//   } else {
//     res.status(500).json('Error in posting review');
//   }
// });

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );

module.exports = router;