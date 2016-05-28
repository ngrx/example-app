import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../services/google-books';

export class BookActions {
  static SEARCH = '[Book] Search';
  search(query: string): Action {
    return {
      type: BookActions.SEARCH,
      payload: query
    };
  }

  static SEARCH_COMPLETE = '[Book] Search Complete';
  searchComplete(results: Book[]): Action {
    return {
      type: BookActions.SEARCH_COMPLETE,
      payload: results
    };
  }
}
