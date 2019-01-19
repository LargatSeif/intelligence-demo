import { Injectable } from '@angular/core';
import { form } from '../models/form.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';

import { map } from 'rxjs/operator/map';
import { Type } from '../models/type.model';
@Injectable()
export class QuestionService {

  private form_data = "assets/data/form.sample.json";
  private questions_types = "assets/data/question.types.json";

  constructor(private http: HttpClient) { }

  getQuestionsType$(): Observable<Type[]> {
    return this.http.get<Type[]>(this.questions_types).pipe(
      catchError((error) => this._handleError(error))
    );
  }

  getQuestions$(): Observable<form> {
    return this.http.get<Type[]>(this.form_data).pipe(
      catchError((error) => this._handleError(error))
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getQuestions1(form_id: number) {
    return this.http.get(this.form_data).subscribe((data: form) => {
      return data.questions;
    });
  }
  getForm(form_id: number): Observable<form> {
    return this.http.get<form>(this.form_data);
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      // this.auth.login();
      console.log('YOU MUST LOGIN')
    }
    return errorMsg;
  }
}
