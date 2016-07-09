#@ngrx example application

Example application utilizing @ngrx libraries, showcasing common patterns and best practices. You can find the live app [here](http://ngrx.github.io/example-app/).

This app is a book collection manager. Using the Google Books API, the user can search for books and add them to their collection. This application utilizes [@ngrx/db](https://github.com/ngrx/db) to persist the collection across sessions; [@ngrx/store](https://github.com/ngrx/store) to manage the state of the app and to cache requests made to the Google Books API; [@angular/router](https://github.com/angular/angular) to manage navigation between routes; and [@ngrx/effects](https://github.com/ngrx/effects) to isolate side effects.

### Included
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular2 apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [angular/router](https://github.com/angular/angular) - Angular2 Component Router
 - [ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular2 apps
 - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
 - [ngrx/store-log-monitor](https://github.com/ngrx/store-log-monitor) - A port of redux-devtools-log-monitor for Angular 2 and @ngrx/store

### Quick start

```bash
# clone the repo
git clone https://github.com/ngrx/example-app.git

# change directory to repo
cd example-app

# run npm install
npm install

# start the server
npm run start
```

Navigate to [http://localhost:8080/](http://localhost:8080/) in your browser
