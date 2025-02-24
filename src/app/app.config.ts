import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
  Provider,
} from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration } from '@angular/platform-browser';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// perfect scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';
//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthInterceptor } from './auth.interceptor';
import { TranslatSharedModule } from './translat-shared.module';
import { provideToastr } from 'ngx-toastr';

// import { TranslatSharedModule } from './translat-shared.module';
// import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';






// const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
//   new TranslateHttpLoader(http, './assets/i18n/', '.json');




// const translaeCompilerFactory = () => new TranslateMessageFormatCompiler() 

// const translateCompiler:Provider = {
//   provide:TranslateCompiler,
//   useFactory: translaeCompilerFactory
// }





export const appConfig: ApplicationConfig = {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideClientHydration(),
    provideAnimationsAsync(), 
    provideToastr(),
  

    importProvidersFrom([
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
      TablerIconsModule.pick(TablerIcons),
      NgScrollbarModule,

      // TranslateModule.forRoot({
      //    defaultLanguage:'en' ,

      //   loader: {
      //     provide: TranslateLoader,
      //     useFactory: httpLoaderFactory,
      //     deps: [HttpClient],
      //   },
      //   compiler:{
      //     provide:TranslateCompiler,
      //     useClass:TranslateMessageFormatCompiler
      //   }
      // })
    ]),
    importProvidersFrom(TranslatSharedModule.forRoot())
  ],
};
