import React, {useState} from "react";

function NewPoemForm() {
  const [newPoem, setNewPoem] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
title: title,
author: author,
}),
})
.then((r) => r.json())
.then(console.log)
.then((newPoem) => setAddPoem(newPoem)); 
}

  return (
    <form className="new-poem-form">
      <input 
      placeholder="Title"  
      value={title}
      onChange={(e) => setNewPoem(e.target.value)}/>
      <input 
      placeholder="Author"
      value={author}
      onChange={(e) => setNewAuthor(e.target.value)}/> 
      <textarea 
      placeholder="Write your masterpiece here..." 
      rows={10} />
      <input handleSubmit={handleSubmit}
      type="submit" 
      value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
