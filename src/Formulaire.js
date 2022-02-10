import React, { useState } from "react";

function App() {
  const [taches, setTaches] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTache = { id: new Date().getTime().toString(), taches };
    setItems([...items, newTache]);
    setTaches("");
  };

  // Supprimer 1 taches
  const deleteItems = (id) => {
    const delTache = [...items].filter((taches) => taches.id !== id);
    setItems(delTache);
  };

  return (
    <article>
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Taches :</label>
          <input
            type="text"
            id="taches"
            name="taches"
            value={taches}
            onChange={(e) => setTaches(e.target.value)}
          />
          <button type="submit">Ajouter une taches</button>
        </div>
      </form>
      {items.map((note) => {
        const { id, taches } = note;
        return (
          <div key={id}>
            <h4>{taches}</h4>
            <button onClick={() => deleteItems(id)}>Supprimer</button>
          </div>
        );
      })}
    </article>
  );
}

export default App;
