# Incorrect useEffect Dependency Array in React Component

This repository demonstrates a common mistake in using the React `useEffect` hook: an incorrectly specified dependency array. The example shows a component that fetches data from an API, but the data fetching only occurs once because the dependency array only includes the `count` state variable, and the `count` is initially 0.  Subsequent state updates to `count` do not cause the `useEffect` to run again.

The `bug.js` file contains the erroneous code. The `bugSolution.js` provides the corrected version.