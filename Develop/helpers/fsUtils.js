const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
// const deleteFileAsync = util.promisify(fs.deleteFile);

class Helper {
    read(){
        return readFileAsync('./db/db.json') .then(notes => {
            console.log(JSON.parse(notes));
            return JSON.parse(notes)
        })
    };
    write(noteData){
        console.log(noteData);
        return writeFileAsync('./db/db.json', JSON.stringify(noteData))
    };
    readAndAppend = async (noteData) => {
        console.log(noteData);
        const notes = await this.read()
        await this.write([
            ...notes,
            noteData
        ])
    return noteData 
    };
    deleteNote = async (id) => {
        const notes = await this.read()
        let indexDelete = null;
        for (let i=0; i<notes.length; i++){
            if (notes[i].id === id) {
        indexDelete = i

        break;
            }
        }
        notes.splice(indexDelete, 1)
        await this.write(notes)
        return id 
    }
};



// delete(noteData){
//     return readFileAsync('./db/db.json', JSON.stringify(noteData))
// };
// delete = async (noteData) => {
//     const notes = await this.read()
//     await this.write([
//         ...notes,
//         noteData
//     ])
// return noteData 
// };

// delete = async (file, noteData) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//         if (err) {
//             console.error(err)
//         } else {
//             const notes = JSON.parse(data)
//             notes.forEach(note => {
//                 if (note.id === noteData) {
//                     notes.splice(note, 1)
//                     writeToFile(file, notes)
//                 };
//             })
//         };
//     })
// };



// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );



module.exports = new Helper()