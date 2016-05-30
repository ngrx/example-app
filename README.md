#@ngrx example application

Example application utilizing @ngrx libraries, showcasing common patterns and best practices.

This app is a book collection manager. Using the Google Books API, the user can search for books and add them to their collection. This application utilizes [@ngrx/db](https://github.com/ngrx/db) to persist the collection across sessions; [@ngrx/store](https://github.com/ngrx/store) to manage the state of the app and to cache requests made to the Google Books API; [@ngrx/router](https://github.com/ngrx/router) to manage navigation between routes; and [@ngrx/effects](https://github.com/ngrx/effects) to isolate side effects.

### Included
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular2 apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [ngrx/router](https://github.com/ngrx/router) - Reactive Routing for Angular 2
 - [ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular2 apps
 - [ngrx/router-store](https://github.com/ngrx/router-store) - Bindings to connect ngrx/router to ngrx/store

### Quick start

```bash
# clone the repo
git clone https://github.com/ngrx/angular2-example.git

# change directory to repo
cd angular2-store-example

# run npm install
npm install

# start the server
npm run start
```

Navigate to [http://localhost:8080/](http://localhost:8080/) in your browser
