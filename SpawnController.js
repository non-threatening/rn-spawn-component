import React, {useEffect, useState} from 'react';
import {useSpawnArray} from './spawnContext';

export const SpawnController = (props) => {
  const starting = props.startCount;
  const [{spawn}, dispatch] = useSpawnArray();
  const [knobs, setKnobs] = useState([]);

  let newKnobs = knobs.reverse().map((item, index) => {
    return AddExtraProps(props.spawn, {spawnNumber: item.key, key: item.key});
  });

  function AddExtraProps(Component, extraProps) {
    return <Component.type {...Component.props} {...extraProps} />;
  }

  useEffect(() => {
    const controlSpawn = spawn.filter((thing) => thing.includes(props.name));
    switch (true) {
      case !controlSpawn.length:
        setKnobs([]);
        break;
      case controlSpawn.length > knobs.length:
        let addKnob = {
          key: Number.isFinite(
            Math.max(...controlSpawn.map((thing) => thing[0])),
          )
            ? Math.max(...controlSpawn.map((thing) => thing[0]))
            : 0,
        };
        setKnobs([...knobs, addKnob]);
        break;
      default:
        const deleteKnob = [...controlSpawn.map((thing) => thing[0])];
        setKnobs(knobs.filter((thing) => deleteKnob.includes(thing.key)));
    }
    console.log('SpawnController:', spawn);
  }, [spawn]); // eslint-disable-line react-hooks/exhaustive-deps

  const add = () => {
    dispatch({
      type: 'NEW_SPAWN',
      name: props.name,
    });
  };

  // Starting count on load
  useEffect(() => {
    let i = 0;
    while (i < starting) {
      setTimeout(() => {
        add();
      }, i * 100);
      i++;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{newKnobs}</>;
};
