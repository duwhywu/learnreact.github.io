# react

### React Hooks

React Hooks 是 React 16.8 引入的一项重要特性，它使函数组件能够拥有类组件的一些特性，**例如状态管理和生命周期方法的使用**。

通过 Hooks，可以更加简洁和灵活地编写 React 组件。

### 1 什么是 React Hooks？

React Hooks 是一种函数式组件的增强机制，它允许你在不编写类组件的情况下使用 React 的特性。主要的 Hooks 包括 useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, 和 useImperativeHandle 等。这些 Hooks 提供了访问 React 特性的方式，使得你可以更好地组织和重用你的代码。

### 2 主要的 React Hooks

| hooks名称               | 作用                                                         | 接受参数 |
| ----------------------- | ------------------------------------------------------------ | -------- |
| **useState**            | 函数组件中使用局部状态。它返回一个状态值和更新该状态值的函数 |          |
| **useEffect**           | 在函数组件中执行副作用操作（如数据获取、订阅管理、DOM 操作等）。它在每次渲染后都会执行。（与类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 生命周期类似。） |          |
| **useContext**          | 用于访问 React context 在组件树中传递的数据，而不必通过每个组件传递 props。 |          |
| **useReducer**          | 用于更复杂的 state 逻辑，它接收一个 reducer 函数和初始状态，然后返回当前的状态和派发 action 的 dispatch 函数。 |          |
| **useCallback**         | 返回一个 memoized 版本的回调函数，防止不必要的渲染。         |          |
| **useMemo**             | 用于对计算结果进行记忆，避免在每次渲染时重复计算。（类似计算属性） |          |
| **useRef**              | 用于创建对 DOM 元素或值的引用，可以在渲染之间保持状态。      |          |
| **useImperativeHandle** | 用于使用 ref 时**暴露** DOM 元素的**方法**。                 |          |
| **useDebugValue**       | 用于在 React 开发者工具中显示自定义 hook 的标签。            |          |



























