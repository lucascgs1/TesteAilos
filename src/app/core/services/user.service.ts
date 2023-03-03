import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCadastralStatus(documentNumber: string): Observable<any> {
    console.log(JSON.stringify({
      name: 'Mariane de Sousa Oliveira',
      document: "21212121212",
      status: 'regular'
    }))

    return of({
      name: 'Mariane de Sousa Oliveira',
      document: "21212121212",
      status: 'regular'
    })

  }
}
