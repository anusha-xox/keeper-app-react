import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [allNotes, setAllNotes] = useState([]);

    function addNote(newNote){
        setAllNotes(prevNote => {
            return [...prevNote, newNote]
        });
    }

    function deleteNote(id){
        setAllNotes((prevNotes) => {
            return prevNotes.filter((item, index) => {
                return index !== id;
            });
        });
    }

    function showNotes(note, index){
        return (<Note  
            key={index}
            id={index}
            title={note.title} 
            content={note.content} 
            deleteNote={deleteNote} 
            />);
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {allNotes.map(showNotes)}
            <Footer />
        </div>
    );
}

export default App;
