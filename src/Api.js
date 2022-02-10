import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
function Api() {
  const [infos, setInfos] = useState([]);

  const fetchInfos = async () => {
    const reponse = await fetch(url);
    const newInfo = await reponse.json();
    console.log(newInfo);
    setInfos(newInfo);
  };
  useEffect(() => {
    fetchInfos();
  }, []);

  return (
    <section>
      <div>
        <h2>Api</h2>
      </div>
      <div>
        <div>
          {infos.map((item, index) => {
            return (
              <>
                <div>
                  <p> id: {item.id}</p>
                  <p> Noms: {item.name}</p>
                  <p> Email: {item.email}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Api;
