<h1 align="center">Welcome to rn-spawn-component</h1>
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
yarn install rn-spawn-component
``` -->

## Usage

**The SpawnProvider must wrap your App**

```jsx
import {SpawnProvider, SpawnController, AddSpawn} from 'rn-spawn-component';

const App: () => React$Node = () => {
  return (
    <SpawnProvider>
      <SpawnController spawn={<MyComponent />} name="myComponent" />
      <AddSpawn name="myComponent" label="Spawn Component" />
    </SpawnProvider>
  );
};
```

## API

### SpawnController

**Place this Component where you would like your spawned Components to appear.**

```jsx
import {SpawnController} from 'rn-spawn-component';
```

```jsx
<SpawnController spawn={<MyComponent />} name="myComponent" />
```

|   Props    |   Type    | Required | Description                                   |
| :--------: | :-------: | :------: | :-------------------------------------------- |
|   spawn    | Component |   true   | A single React Component                      |
|    name    |  string   |   true   | A unique name for each reproducible component |
| startCount |  number   | optional | Number to spawn on load                       |

### Drop in button components

**All of the built in button components share the following props:**
| Props | Type | Required | Description |
| :----: | :----: | :----: | :----------------------------------------------------- |
| label | string | optional | Button text |
| prepend | Component | optional | Prepend a Component to the inside of the button |
| append | Component | optional | Append a Component to the inside of the button |
| style | style Object | optional | Custom Styling for the Button View |
| textStyle | style Object | optional | Custom Styling for the Label Text |

#### AddSpawn

```jsx
import {AddSpawn} from 'rn-spawn-component';
```

```jsx
<AddSpawn name="myComponent" label="Spawn Component" prepend={<myIcon />} />
```

| Props |  Type  | Required | Description                                 |
| :---: | :----: | :------: | :------------------------------------------ |
| name  | string |   true   | Name of the SpawnController you wish to add |

#### ClearSpawns
Clears all spawned components sharing a name.
```jsx
import {ClearSpawns} from 'rn-spawn-component';
```

```jsx
<ClearSpawns name="myComponent" label="Clear Spawns" append={<myIcon />} />
```

| Props |  Type  | Required | Description                                              |
| :---: | :----: | :------: | :------------------------------------------------------- |
| name  | string |   true   | Name of the SpawnController components you wish to clear |

#### RemoveAll

Removes all spawned components of any name.

```jsx
import {RemoveAll} from 'rn-spawn-component';
```

```jsx
<RemoveAll label="Remove All" />
```

#### RemoveSpawn

```jsx
import {RemoveSpawn} from 'rn-spawn-component';
```

```jsx
<RemoveSpawn spawn={spawnNumber} label={'Kill Me'} />
```

This button removes the spawned component it is inside of.

| Props |  Type  | Required | Description                                             |
| :---: | :----: | :------: | :------------------------------------------------------ |
| spawn | number |   true   | spawnNumber\* of the Component you would like to remove |

\*The spawnNumber is generated on creation. See myComponent.js below to see how to access the SpawnNumber.

```jsx
// myComponent.js
import React from 'react';
import {Text, View} from 'react-native';
import {RemoveSpawn} from './rn-spawn-component';

export const MyComponent = (props) => {
  const spawnNum = props.spawnNumber;
  return (
    <View
      style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: 10, height: 80}}>
      <View style={{alignItems: 'center'}}>
        <Text>{spawnNum}</Text>
        <RemoveSpawn spawn={spawnNum} label={'Kill Me'} />
      </View>
    </View>
  );
};
```

**Functions can be called independently following the rules of hooks.**

## Full Example
[github repo](github.com/non...)


## Author

👤 **non-threatening.com**

- Github: [@non-threatening](https://github.com/non-threatening)

## 📝 License

Copyright © 2020 [non-threatening.com](https://github.com/non-threatening)<br />
This project is [MIT](https://github.com/non-threatening/rn-spawn-component/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
