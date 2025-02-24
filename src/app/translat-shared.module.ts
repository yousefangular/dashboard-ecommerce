import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import {  TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';



const httpLoadFactory = (http :HttpClient) =>   new TranslateHttpLoader(http, './assets/i18n/', '.json');

const translateLoader :Provider =  {
  provide: TranslateLoader,
  useFactory: httpLoadFactory,
  deps: [HttpClient]
};

const translaeCompilerFactory = () => new TranslateMessageFormatCompiler() 

const translateCompiler:Provider = {
  provide:TranslateCompiler,
  useFactory: translaeCompilerFactory
}

@NgModule({
})
export class TranslatSharedModule { 


  static forRoot():ModuleWithProviders<TranslatSharedModule>{
    return TranslateModule.forRoot({
      loader:translateLoader,
      compiler:translateCompiler,
    })
  }

  static forChild():ModuleWithProviders<TranslatSharedModule>{
    return TranslateModule.forRoot({
      loader:translateLoader,
      compiler:translateCompiler,
      isolate:false
    })
  }
}
