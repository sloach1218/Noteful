export const updateNotesBasedOnFolder = (notes, folderId) => {
    if(typeof folderId !== 'undefined'){
      const newnotes = notes.filter(note => note.folderId === folderId)
      return newnotes;
    } else{
      return notes;
    }
}

export const getNote = (notes, noteId) => {
    const theNote = notes.find(note => note.id === noteId)
    return theNote;
  }

export const getFolder = (notes, folders, noteId) => {
    const theNote = notes.find(notes => notes.id === noteId)
    const theFolder = folders.find(folder => folder.id === theNote.folderId)
    return theFolder;
  }