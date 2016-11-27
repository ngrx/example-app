#@ngrx example application

Example application utilizing @ngrx libraries, showcasing common patterns and best practices. 
You can find the live app [here](http://ngrx.github.io/example-app/).

This app is a book collection manager. Using the Google Books API, the user can search for 
books and add them to their collection. This application utilizes [@ngrx/db](https://github.com/ngrx/db) 
to persist the collection across sessions; [@ngrx/store](https://github.com/ngrx/store) to manage 
the state of the app and to cache requests made to the Google Books API; 
[@angular/router](https://github.com/angular/angular) to manage navigation between routes; 
[@ngrx/effects](https://github.com/ngrx/effects) to isolate side effects. 

Built with [angular-cli](https://github.com/angular/angular-cli)

### Included
 - [ngrx/store](https://github.com/ngrx/store) - RxJS powered state management for Angular2 apps, inspired by Redux
 - [ngrx/effects](https://github.com/ngrx/effects) - Side effect model for @ngrx/store
 - [angular/router](https://github.com/angular/angular) - Angular2 Component Router
 - [ngrx/db](https://github.com/ngrx/db) - RxJS powered IndexedDB for Angular2 apps
 - [ngrx/store-devtools](https://github.com/ngrx/store-devtools) - Instrumentation for @ngrx/store enabling time-travel debugging
 - [codewareio/ngrx-store-freeze](https://github.com/codewareio/ngrx-store-freeze) - A @ngrx/store meta reducer that prevents state from being mutated

### Quick start

```bash
# clone the repo
git clone https://github.com/ngrx/example-app.git


# change directory to repo
cd example-app

# Use npm or yarn to install the dependencies:
npm install

# OR
yarn

# start the server
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser

_NOTE:_ The above setup instructions assume you have added local npm bin folders to your path. 
If this is not the case you will need to install the angular-cli globally.
