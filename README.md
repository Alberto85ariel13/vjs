# vts-helper
Vanilla Typescript Helper

[![CircleCI](https://circleci.com/gh/mayo84/vts/tree/master.svg?style=svg)](https://circleci.com/gh/mayo84/vts/tree/master)   [![Coverage Status](https://coveralls.io/repos/github/mayo84/vts/badge.svg?branch=master)](https://coveralls.io/github/mayo84/vts?branch=master)  ![npm](https://img.shields.io/npm/v/vts-helper.svg)  [![Gitter](https://badges.gitter.im/vts-helper/community.svg)](https://gitter.im/vts-helper/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# PURPOSE

* Based upon helpers like ramda, lodash and underscore the main purpose of vts-helper is to implement a simple functional helper by promoting the minimum cuantity of comparisons for each functionality avoiding the reutilization of functions; like map function in ramda.js can be used for arrays or objects, in vts-helper the map function is only for iterables types. Is important for us that the programmer may be able to identify the type of data he is working on and in that way may use the propper vanilla typescript function.
* Made in Typescript for the control of types.

# OBJETIVO

* Basado en útiles como ramda, lodash y underscore el objetivo de vts-helper es implementar de manera funcional un útil simple proponiendo la mínima cantidad de comparaciones para cada funcionalidad evitando la reutilización de funciones; como la función map en ramda se puede utilizar para arrays o objects en vts-helper la función map es solo para tipos iterables. Es importante para nosotros que el programador sea capaz de identificar que tipado tiene la data que esta manipulando y así utilizar una función de vanilla typescript específica.
* Elaborado en Typescript para el control de memoria del tipado.

* Gives specific modules for data types / Proporciona módulos específicos para tipos de datos:
* * {va} array function
* * {vo} object function
* * {vm} math function
* * {vu} utils function
* * * {v} totals function

# INSTALL / INSTALACION

```
$ npm install vts-helper --save
```


```javascript
const v = require('vts-helper');
```

```typescript
import { va, vo, vu } from 'vts-helper';
```
or
```typescript
import { v } from 'vts-helper';
```

# GitHub
https://github.com/Alberto85ariel13/vts
