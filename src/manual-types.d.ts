declare var PROD: boolean;


declare module 'history' {
  export type ActionTypes = 'PUSH' | 'REPLACE' | 'POP';
  export type HashTypes = 'slash' | 'noslash' | 'hashbang';

  export interface Unlisten {
    (): void;
  }

  export interface HistoryLocation {
    pathname?: string;
    search?: string;
    hash?: string;
    state?: any;
    key?: string;
  }

  export interface History {
    location: HistoryLocation;
    length: number;
    location: HistoryLocation;
    action: ActionTypes;

    push(url: string, state?: any): void;
    push(location: HistoryLocation): void;
    replace(url: string, state?: any): void;
    replace(location: HistoryLocation): void;
    go(n: number): void;
    goBack(): void;
    goForward(): void;
    listen(callbackFn: (location: HistoryLocation, action: ActionTypes) => void): Unlisten;
    block(message: string): Unlisten;
    block(messageCallbackFn: (location: HistoryLocation, action: ActionTypes) => string): Unlisten;
  }

  export interface MemoryHistory extends History {
    index: number;
    canGo(n: number): void;
  }

  export interface UserConfirmationFactory {
    (message: string, callback: (success: boolean) => void): void;
  }

  export interface HistoryConfig {
    basename?: string;
    forceRefresh?: boolean;
    keyLength?: number;
    getUserConfirmation?: null | UserConfirmationFactory
    hashType?: HashTypes; 
  }

  export function createBrowserHistory(config: HistoryConfig): History;
  export function createMemoryHistory(config: HistoryConfig): MemoryHistory;
  export function createHashHistory(config: HistoryConfig): History;
}