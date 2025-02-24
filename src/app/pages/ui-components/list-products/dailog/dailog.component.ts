import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { DialogeService } from 'src/app/services/dialog/dialoge.service';


@Component({
  selector: 'app-dailog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dailog.component.html',
  styleUrl: './dailog.component.scss'
})



export class DailogComponent implements OnInit{

    category=[

    "beauty","fragrances","furniture","groceries","home-decoration","kitchen-accessories",
    "laptops","mens-shirts","mens-shoes","mens-watches","mobile-accessories","motorcycle",
    "skin-care","smartphones","sports-accessories","sunglasses","tablets","tops","vehicle",
    "womens-bags","womens-dresses","womens-jewellery","womens-shoes","womens-watches"
  ]

  productForm!:FormGroup; 
constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private formBiulder:FormBuilder, private dialogService:DialogeService){}

ngOnInit(): void {
  this.getproductData()
  // console.log(this.data);
  
}
 
getproductData(){
  this.productForm = this.formBiulder.group({
    title:[this.data?.title ||'',Validators.required],
    describtion:[this.data?.description ||'',Validators.required],
    category:[this.data?.category ||'',Validators.required],
    imageurl:[this.data?.images ||'',Validators.required]

  })
 
}

selectValue(event:any){
  let selected = event.target.innerText;
  this.productForm.get('category')?.setValue(selected)


  
}
submit(){
let model = this.productForm.value

this.dialogService.addProduct(model).subscribe((res:any)=>{
  alert("done")
})
}

update(){
 let model = this.productForm.value;
 console.log(model);
 
 let id = this.data.id
 this.dialogService.updateProduct(id,model).subscribe((res:any)=>{
  alert("upate done successfully")
  
 })
  
}

  }

