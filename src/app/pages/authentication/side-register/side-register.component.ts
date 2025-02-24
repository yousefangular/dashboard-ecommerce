
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/authService/auth.service';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@Component({
  selector: 'app-side-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-register.component.html',
  styleUrl: './side-register.component.scss'
})
export class SideRegisterComponent implements OnInit{

 registerForm!:FormGroup

 constructor(private formBiulder:FormBuilder,
             private authService:AuthService,
             private toaster:ToastrService,
             private spinner:NgxSpinnerService,
             private router:Router
 ){}

 ngOnInit(): void {
   this.getRegisterForm()
 }

 getRegisterForm(){
     this.registerForm = this.formBiulder.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
      repassword:['',[Validators.required]],
     })

 }


//   checkPassword(password:string, repassword:string):ValidatorFn{
//   return (formGroup:AbstractControl): ValidationErrors | null => {
//     const pass = formGroup.get(password);
//     const repass = formGroup.get(repassword);
//     if(!pass || !repass ){
//       return null
//     }
//     if(pass.value !== repass.value){
//       repass.setErrors({checkPassword:true})
//     }else {
//       repass.setErrors(null)
//       return null
//     }
// return null
//   }
//  }

 register(){
  const model =  this.registerForm.value; 
  this.spinner.show()
  this.authService.register(model).subscribe({
   next:(res:Register)=>{ 
    this.toaster.success("registeration done successfully")
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
