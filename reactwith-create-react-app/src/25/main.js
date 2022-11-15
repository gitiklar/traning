import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

const MoreInfo = ({ moreInfo }) => {
  return (
    <div>
      {moreInfo.map((data, i) => (
        <>
          ---- i==={i} ----
          <p>
            <b>Name:</b> {data.name}
          </p>
          <p>
            <b>Hair Color:</b> {data.generation.name}
          </p>
        </>
      ))}
    </div>
  );
};

const ShowInfo = ({ data }) => {
  const [moreInfo, setMoreInfo] = useState([]);

  useEffect(() => {
    if (!data) return;
    (async () => {
      const promises = data.damage_relations.double_damage_from.map(
        async ({ url }) => {
          const dataJ = await fetch(url);
          return dataJ.json();
        }
      );

      setMoreInfo(await Promise.all(promises));
    })();
  }, [data]);

  return (
    <div>
      <p>
        <b>Name:</b> {data.name}
      </p>
      <p>
        <b>Hair Color:</b> {data.generation.name}
      </p>
      <MoreInfo moreInfo={moreInfo} />
    </div>
  );
};

function StarwarsCharacter(props) {
  const [data, setData] = useState();
  const { id } = props;

  useEffect(() => {
    (async () => {
      setData(
        await (await fetch(`https://pokeapi.co/api/v2/type/${id}/`)).json()
      );
    })();
  }, [id]);

  return <div>{data ? <ShowInfo data={data} /> : "loading..."}</div>;
}

export const MyApp = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <StarwarsCharacter id={id} />
    </div>
  );
};
