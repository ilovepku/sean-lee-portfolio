---
path: '/blogs/react-redux-firebase'
date: 'Fri Oct 22 2019 22:00:00 GMT+0800 (China Standard Time)'
title: 'Migrating an old project to react-redux-firebase v3'
pic: ../../images/blogs/react-redux-firebase.jpg
intro: 'Addressing a bunch of problems I ran into while migrating an old project to react-redux-firebase v3'
---

## Overview

Today, I came across this [old practice project](https://github.com/ilovepku/planner) I made when I was just starting to learn Firebase. It's a simple project management tool with authentication and cloud functions, built with React, Redux, and the serverless auth, firestore, function, and hosting features provided by Firebase. The library versions used were naturally a bit outdated, so I set out to update all to the newest as a review of the project. Below are the problems I met in the process as well as my solutions to them.

## TypeError: Object(…) is not a function

Most dependencies updated just fine, with the only exception being [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase). The version I had was 2.2.6, while the current one is 3.0.1. There has been a major update and breaking changes associated with it. The cryptic error "TypeError: Object(…) is not a function" which prevented my app from even loading was a result of this change.

Following the official [v3 Migration Guide](http://react-redux-firebase.com/docs/v3-migration-guide.html), the first things I did were:

```diff
- import { reduxFirestore, getFirestore } from "redux-firestore";
+ import { createFirestoreInstance, getFirestore } from "redux-firestore";
- import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
+ import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

const store = createStore(
  rootReducer,
- compose(
-   reactReduxFirebase(firebase, rrfConfig),
-   reduxFirestore(firebase),
-   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
- )
+ applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

+ const rrfProps = {
+   firebase,
+   config: rrfConfig,
+   dispatch: store.dispatch,
+   createFirestoreInstance
+ }

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
+     <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
+     </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById("root")
  );
});
```

That seemed straight forward, and "TypeError: Object(…) is not a function" was no more, but here came another error "TypeError: Cannot read property 'then' of undefined", and it happened on: `store.firebaseAuthIsReady.then(() => {`

With a bit of research, I found out that react-redux-firebase had got rid of this method in v3. I was only using it to delay rendering before data is loaded anyway, so no biggie. I'd just remove it for now, and find an alternative later, so:

```diff
- store.firebaseAuthIsReady.then(() => {
    // ...
- });
```

My app successfully loaded after this, hooray!

## Error: Firebase instance does not yet exist. Check your compose function.

Alas! Another error, this time triggered by a `getFirestore()` in one of my redux actions. I was using [redux-thunk](https://github.com/reduxjs/redux-thunk) to handle the asynchronous firebase operations. Some changes I just made must have broken it.

The problem seemed to be related to firestore initiation. Though the official migration guide did not mention anything on `useFirestore`, the deletion of `reduxFirestore(firebase)`, which the guide suggested, might have caused the error. After adding the line (and the compose) back, my app now runs properly.

```diff
const store = createStore(
  rootReducer,
- applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
+ compose(
+   reduxFirestore(firebase),
+   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
+ )
);
```

## TypeError: Cannot read property 'then' of undefined

I then doubled back to the deprecated `firebaseAuthIsReady` problem with all the major issues addressed. It turned out that I didn't even need this method, which was initially introduced as an SSR helper, if having a component wait for the data to load before it renders was my sole purpose, according to [this GitHub issue](https://github.com/prescottprue/react-redux-firebase/issues/673). Instead, I could use the new `isLoaded` hook to get the job done. But since a hook is only usable in a functional component, I had to move the logic one level deeper to the root React component from its original place in index.js:

```diff
+ import { useSelector } from "react-redux";
+ import { isLoaded } from "react-redux-firebase";

+ const auth = useSelector(state => state.firebase.auth);

- <MainComponent />
+ {!isLoaded(auth) ? (
+   <LoadingIndicatorComponent />
+ ) : (
+   <MainComponent />
+ )}
```

And that does what `store.firebaseAuthIsReady.then(() => {// something})` used to do.

That concludes my walkthrough of migrating an old app to react-redux-firebase v3, thank you for your time!
