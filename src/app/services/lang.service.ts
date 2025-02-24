import { Injectable } from '@angular/core';
import { TranslationServService } from './translation-serv.service';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  

  constructor(private translate:TranslationServService) {
   
   }

  intiatDefaultLang(){
    this.translate.setDefaultLang()
  }

  changeLange(lang:string){
    
    this.translate.use(lang)
  }
}
