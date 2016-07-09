import { Type } from '@angular/core/src/facade/lang';
import { Injectable, ComponentFactory, ComponentResolver } from '@angular/core';

class LoaderCallback {
  constructor(private callback) {}
}

export let load: Type = (callback: Function) => {
  return new LoaderCallback(callback);
};

/**
 * Component resolver that can load components lazily
 *
 * TODO: Update to use AppModule lazy loading
 */
@Injectable()
export class AsyncComponentResolver implements ComponentResolver {
  constructor(private _resolver: ComponentResolver) {}

  resolveComponent(componentType: string|Type): Promise<ComponentFactory<any>> {
    if (componentType && componentType instanceof LoaderCallback) {
      let loader = (componentType as any).callback();

      return Promise.resolve(loader)
          .then((module: any) => this._resolver.resolveComponent(module));
    }

    return this._resolver.resolveComponent(componentType);
  }

  clearCache(): void {}
}
