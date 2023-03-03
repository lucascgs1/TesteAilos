import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getRegisterlStatus(documentNumber: string): Observable<Register> {
    return of({
      name: 'Mariane de Sousa Oliveira',
      document: "21212121212",
      status: 'regular'
    })

  }
}
