import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class NavbarService {
  private readonly isOpened$: BehaviorSubject<string> = new BehaviorSubject('about');

  public setOpenedState(value: string): BehaviorSubject<string> {
    this.isOpened$.next(value);
    return this.isOpened$;
  }

  public get isOpened(): BehaviorSubject<string> {
    return this.isOpened$;
  }
}
