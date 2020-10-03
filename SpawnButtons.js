import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Text, View} from 'react-native';
import {useSpawnArray} from './spawnContext';

export const AddSpawn = (props) => {
  const [{}, dispatch] = useSpawnArray();
  const add = () => {
    dispatch({
      type: 'NEW_SPAWN',
      name: props.name,
    });
  };
  return (
    <Button
      onPress={() => add()}
      label={props.label ? props.label : 'Add'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
    />
  );
};

export const RemoveSpawn = (props) => {
  const [{}, dispatch] = useSpawnArray();
  const remove = () => {
    dispatch({
      type: 'REMOVE_SPAWN',
      payload: props.spawn,
    });
  };
  return (
    <Button
      onPress={() => remove(props.spawn)}
      label={props.label ? props.label : 'X'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
    />
  );
};

export const ClearSpawns = (props) => {
  const [{}, dispatch] = useSpawnArray();
  const removeKind = () => {
    dispatch({
      type: 'REMOVE_NAME',
      name: props.name,
    });
  };
  return (
    <Button
      onPress={() => removeKind()}
      label={props.label ? props.label : 'Clear Kind'}
      prepend={props.prepend ? props.prepend : null}
      append={props.append ? props.append : null}
    />
  );
};

export const RemoveAll = (props) => {
  const [{}, dispatch] = useSpawnArray();
  const removeAll = () => {
    dispatch({
      type: 'KILL_SPAWN',
    });
  };
  return (
    <>
      <Button
        onPress={() => removeAll()}
        label={props.label ? props.label : 'Clear Spawned'}
        prepend={props.prepend ? props.prepend : null}
        append={props.append ? props.append : null}
        textStyle={props.textStyle ? props.textStyle : null}
        style={props.style ? props.style : null}
      />
    </>
  );
};

function Button({append, onPress, label, prepend, style, textStyle}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, style]}>
        <View>{prepend ? prepend : null}</View>
        <Text style={[textStyle, {}]}>{label}</Text>
        <View>{append ? append : null}</View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
