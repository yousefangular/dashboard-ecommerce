import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Login } from 'src/app/interfaces/auth';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';


@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-login.component.html',
    styleUrl: './side-login.component.scss',
})
export class AppSideLoginComponent implements OnInit{
  constructor(private router: Router
             ,private toaster:ToastrService,
               private spinner:NgxSpinnerService,
               private formBiulder:FormBuilder,
              private authService:AuthService
              ){}

  form!:FormGroup; 
  
  ngOnInit(): void {
    this.form = this.formBiulder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]], 
    });
  }


  submit() {
    const model = {
      email:this.form.value.email,
      password:this.form.value.password
    }
  
// const email = this.form.value.email
// const password = this.form.value.password
this.spinner.show()
this.authService.login(model).subscribe({
  next:(res:Login)=>{
    if(res._id){
      localStorage.setItem("token",res._id)
      this.toaster.success("login done succcessfully")
    }
    
    this.spinner.hide()
     this.router.navigate(['/dashboard'])

  },
  error : (error)=>{
    this.toaster.error(error.error.error)
    this.spinner.hide()
  }
})


  }
}
