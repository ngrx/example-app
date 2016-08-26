import { Provider, PlatformRef, Type, NgModuleRef, ApplicationRef } from '@angular/core';
import { _INITIAL_STATE, Store } from '@ngrx/store';
import { take } from 'rxjs/operator/take';

export type PlatformFactoryFn = (extraProviders?: Provider[]) => PlatformRef;


let state: any;

export function useHMR<T>(module: any, platformFactory: PlatformFactoryFn, ngModule: Type<T>) {
  let moduleRef: NgModuleRef<T>;

  const stateProvider: Provider = {
    provide: _INITIAL_STATE,
    useFactory: () => state
  };

  platformFactory([ stateProvider ])
    .bootstrapModule(ngModule)
    .then(ref => moduleRef = ref);

  module.hot.accept();

  module.hot.dispose(() => {
    const appRef: ApplicationRef = moduleRef.injector.get(ApplicationRef);
    const store: Store<any> = moduleRef.injector.get(Store);

    take.call(store, 1).subscribe((s: any) => state = s);

    appRef.components.forEach(cmp => {
      const node = cmp.location.nativeElement;

      const newNode = document.createElement(node.tagName);
      node.parentNode.insertBefore(newNode, node);
    });

    moduleRef.destroy();
  });
} 