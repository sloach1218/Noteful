export const updateNotesBasedOnFolder = (notes, folderId) => {
    
  if(typeof folderId !== 'undefined'){
      
      const newnotes = notes.filter(note => Number(note.folderId) === Number(folderId))
      return newnotes;
    } else{
      return notes;
    }
}

export const getNote = (notes, noteId) => {
  const theNote = notes.find(note => Number(note.id) === Number(noteId))
  
    return theNote;
  }

export const getFolder = (notes, folders, noteId) => {
    const theNote = notes.find(notes => Number(notes.id) === Number(noteId))
    const theFolder = folders.find(folder => Number(folder.id) === Number(theNote.folderId))

    return theFolder;
  }