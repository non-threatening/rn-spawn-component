<h1 align="center">Welcome to rn-spawn-component 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/non-threatening/rn-spawn-component#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/non-threatening/rn-spawn-component/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/non-threatening/rn-spawn-component/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/non-threatening/rn-spawn-component" />
  </a>
</p>

> Add and remove react-native components.
#### This package and documentation are currently under development!
<!-- ### 🏠 [Homepage](https://github.com/non-threatening/rn-spawn-component#readme) -->

<!-- ### ✨ [Demo](link to playstore thing)
A complete demo with code examples can be found in this repo: -->

<!-- ## Install

```sh
yarn install
``` -->

## Usage

The SpawnProvider must wrap your App

```jsx
import {SpawnProvider, SpawnController, AddSpawn} from './rn-spawn-component';

const App: () => React$Node = () => {
  return (
    <SpawnProvider>
      <SpawnController spawn={<DummyComponent />} name="dummy" />
      <AddSpawn name="dummy" label="Spawn Component" />
    </SpawnProvider>
  );
};
```

## API
#### SpawnController
```jsx
<SpawnController spawn={<DummyComponent />} name="myComponent" />
```
| Props   | Type             | Required | Description                |
|  :----: |  :----:          |  :----:  |  :---:                     |
| spawn   | Component  | true     | A single React Component   |
| name    | String           | true     | A unique name for each reproducible component |


#### Drop in button components
##### Add Spawn:
```jsx
<AddSpawn name="dummy" label="Spawn Component" />
```
| Props   | Type      | Required | Description                |
|  :----: |  :----:   |  :----:  |  :---:                     |
| name    | String    | true    | Name of the SpawnController you wish to add  |
| label   | String    | true     | A single React Component   |
| prepend  | Component | false    | Prepend a Component to the inside of the button |
| append  | Component | false    | Append a Component to the inside of the button |



<!-- ```jsx
// Remove all spawned components
import {useSpawnArray} from './spawnContext';
const [{}, dispatch] = useSpawnArray();

function removeAll = () => {
  dispatch({
    type: 'KILL_SPAWN',
  });
};
``` -->

## Full Example:
[github repo](github.com/non...)


####Example spawnable component with remove button and the spawned index:
> DummyComponent.js
```jsx
import React from 'react';
import {Text, View} from 'react-native';

import {RemoveSpawn} from './rn-spawn-component';

export const DummyComponent = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 10,
        height: 80,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text>{props.spawnNumber}</Text>
        <RemoveSpawn spawn={props.spawnNumber} label={'Kill Me'} />
      </View>
    </View>
  );
};
```

## Author

👤 **non-threatening.com**

- Github: [@non-threatening](https://github.com/non-threatening)

## 📝 License

Copyright © 2020 [non-threatening.com](https://github.com/non-threatening)<br />
This project is [MIT](https://github.com/non-threatening/rn-spawn-component/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
