import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class SendEmailService {
  private url: string = 'https://mailthis.to/mher-cv';

  constructor(private http: HttpClient) {
  }

  public sendEmail(body: any) {
    return this.http.post(this.url, body, {responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if (response) {
            return response
          }
        },
        (error: any) => {
          if (error) {
            return error
          }
        }
      )
    );
  }
}
