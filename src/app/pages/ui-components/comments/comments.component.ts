import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [ MatTableModule,
      CommonModule,
      MatCardModule, 
      MaterialModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss' 
})
export class CommentsComponent implements OnInit{
comments:any[] = []

  displayedColumns1: string[] = ['username','body', 'actions'];
  dataSource1 = this.comments;

constructor(private userSerice:UsersService){}
  ngOnInit(): void {
    this.getComments()
  }

  getComments(){
    this.userSerice.getAllComments().subscribe((res:any)=>{
      this.comments = res.comments
    })
  }

  delete(id:any){
    let idComment = id;

    this.userSerice.deletComment(idComment).subscribe((res:any)=>{
      alert("deleted successfully")
    })
    
  }
}
