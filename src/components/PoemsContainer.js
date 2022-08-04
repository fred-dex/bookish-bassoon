import React, {useState, useEffect} from "react";
import Poem from "./Poem";

function PoemsContainer({ poems }) {
  const [poems, setPoems] = useState([])

  useEffect(() => {
  fetch('http://localhost:8004/poems')
  .then((r) => r.json())
  .then(poems => setPoems(poems))
}, [])

  const listPoems = poems.map((poems) => {
    return <Poem key={poems.id} poems={poems} />
})

  return (
    <div className="poems-container">
      {listPoems}
    </div>
  )
} 

export default PoemsContainer;
