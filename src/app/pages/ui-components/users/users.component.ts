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
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule,
      CommonModule,
      MatCardModule,
      MaterialModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  users:any[]= [];
  
  displayedColumns1: string[] = ['username', 'gender', 'phone', 'actions'];
  dataSource1 = this.users;

  constructor(private userService:UsersService){}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((res:any)=>{
      this.users = res.users
    })
  }
}
