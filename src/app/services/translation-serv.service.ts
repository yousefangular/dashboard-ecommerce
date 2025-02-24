import { DOCUMENT } from '@angular/common'
import { inject, Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationServService {

  

  constructor(private translate:TranslateService
   
  ) {
   }

  setDefaultLang(){
    const lang = localStorage.getItem('lang') || 'en'
    this.translate.setDefaultLang(lang);
  }

  use(lang:string):Observable<any>{
    localStorage.setItem('lang',lang);
    
    return this.translate.use(lang)
  }
}
