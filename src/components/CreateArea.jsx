import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isCursorInBox, setIsCursorInBox] = useState(false);

    const [newNote, setNewNote] = useState({
        key: "",
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNewNote(prevNote => {
            return {...prevNote, [name] : value};
        })
    }

    function submitNote(event){
        props.onAdd(newNote);
        document.getElementsByName('createNote')[0].reset()
        event.preventDefault();
    }

    function expand(){
        setIsCursorInBox(true);
    }

    return (
        <div>
        <form className="create-note" name="createNote" onSubmit={submitNote}>
            <input name="title" placeholder="Title" onChange={handleChange} onClick={expand}/>
            {isCursorInBox && <textarea name="content" placeholder="Take a note..." rows={isCursorInBox ? "3" : "1"} onChange={handleChange}/>}
            <Zoom in={isCursorInBox}>
            <Fab><AddIcon /></Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;
