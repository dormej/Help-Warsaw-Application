import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private coordinatorSubject: BehaviorSubject<any>;
    public coordinator: Observable<any>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.coordinatorSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('coordinator')!));
        this.coordinator = this.coordinatorSubject.asObservable();
    }

    public get coordinatorValue() {
        return this.coordinatorSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post(`${environment.apiUrl}/coordinator/register`, { email, password })
            .pipe(map(coordinator => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('coordinator', JSON.stringify(coordinator));
                this.coordinatorSubject.next(coordinator);
                return coordinator;
            }));
    }
}
