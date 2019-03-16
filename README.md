# vts
helper vanilla ts

[![CircleCI](https://circleci.com/gh/mayo84/vts/tree/master.svg?style=svg)](https://circleci.com/gh/mayo84/vts/tree/master)

# OBJETIVO

* Basado en utiles como Ramda, lodash y underscore el objetivo de vts es implemetar de manera funcional un util 
proponiendo la minima cantidad de comparaciones para cada funcionalidad evitando la retutilizacion de funciones 
como el map en ramda se puede utilizar para arrays o objects en vts los map son para tipos iterables, es importante
el programador sea capaz de identificar que tipado tiene la data que esta manipulando y asi utilizar una funcion de vanilla js especifica.
* elaborado en typescript para el control de memoria del tipado

* proporciona mudulos especificos para tipos de datos
* * {va} array function
* * {vo} object function
* * {vm} math function
* * {vu} utils function
* * * {v} totals function

# INTALACION

```
$ npm install vtx
```


```javascript
const v = require('vtx');
```

```typescript
import {va, vo, vu} from 'xts'; 
||
import {v} from 'xts';

```
