import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {isAuthorized} from "../store/selectors";
import {map} from "rxjs/operators";

export const authGuard: CanActivateFn = (route, state) => {
  const store = inject(Store)
  const router = inject(Router)

  return store.pipe(
    select(isAuthorized),
    map(auth => {
      if (auth) {
        return true
      } else {
        return router.createUrlTree(['login']);
      }
    })
  )
};
