# React Native: Accessing State/Props Before Mount

This repository demonstrates a common React Native error: attempting to access component state or props before the component has fully mounted.  The `bug.js` file showcases the error, while `bugSolution.js` provides the corrected implementation.

## Problem

Accessing state or props within the `constructor` or before the component is mounted will lead to `undefined` values because the state hasn't been initialized yet. This often manifests as a `Cannot read properties of undefined` error.

## Solution

The solution involves delaying the access to state and props until after the component has mounted.  This can be achieved using the `componentDidMount` lifecycle method (for class components) or the `useEffect` hook (for functional components).