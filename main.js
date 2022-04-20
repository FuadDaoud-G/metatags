import { ExtractService } from "./ExtractService.js";
import { ReadFileService } from "./ReadFileService.js";
import { Notes } from "./Notes.js";
const extractService = ExtractService.getInstance();
const readFileService = ReadFileService.getInstance();
function main() {
    const json = readFileService.readJson('./dht.json');
    const messages = extractService.extractMessages(json);
    const notesArray = extractService.extractNotes(messages);
    const notes = new Notes(notesArray);
    notes.removeWhiteSpaces();
    notes.print();
    return;
}

main();





