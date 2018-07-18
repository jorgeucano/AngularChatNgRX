import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot, Params } from '@angular/router';

/**
  * El RouterStateSerializer toma el RouterStateSnapshot actual
  * y devuelve toda la información pertinente necesaria. La instantánea contiene
  * toda la información sobre el estado del enrutador en el momento dado.
  * Toda la instantánea es compleja y no siempre es necesaria. En este caso, solo
  * necesita la URL y los parámetros de consulta de la instantánea en la tienda. Otros artículos podrían ser
  * devuelto como parámetros de ruta y datos de ruta estáticos.
 */

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Solo devuelve un objeto, incluidos los parámetros URL, params y query
    // en lugar de la instantánea completa
    return { url, params, queryParams };
  }
}
