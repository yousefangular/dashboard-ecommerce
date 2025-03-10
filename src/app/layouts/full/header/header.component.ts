import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';
import { TranslationServService } from 'src/app/services/translation-serv.service';
import { LangService } from 'src/app/services/lang.service';
import { tick } from '@angular/core/testing';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, MaterialModule, MatButtonModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent implements OnInit{
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() lang = new EventEmitter<string>();

  constructor(private translate:LangService ,
              private authService:AuthService ,
              private router:Router
  ) {}

  ngOnInit(): void {
    this.intiatDefaultLang()
  }


  private intiatDefaultLang(){
    this.translate.intiatDefaultLang()
  }


  changeLang(lang:string){    
    this.lang.emit(lang)
    this.translate.changeLange(lang)
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['/login'])
    })
  }
}
