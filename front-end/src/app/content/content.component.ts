import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

export interface Movie {
  title: string;
  year: number;
  rating: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public addForm: FormGroup;
  public updateForm: FormGroup;
  public currentElement;
  public displayedColumns: string[] = ['id', 'title', 'year', 'rating', 'edit', 'delete'];
  public options = [
    {value: 'G', viewValue: 'G'},
    {value: 'PG', viewValue: 'PG'},
    {value: 'M', viewValue: 'M'},
    {value: 'MA', viewValue: 'MA'},
    {value: 'R', viewValue: 'R'}
  ];
  public dataSource;
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router,
  ) {
   }

  ngOnInit() {
    this.httpService.get('movies').then(res => {
      this.dataSource = res.message;
    })
    this.addForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      year: ['', [Validators.required]],
      rating: ['', [Validators.required]]
    });
    this.updateForm = this.formBuilder.group({
      title: [''],
      year: [''],
      rating: ['']
    });
  }

  logout(){
    this.httpService.get('auth').then(res => {
      alert(res.message.alert);
      this.router.navigate(['/']);
    })  
  }
  
  add(){
    this.httpService.post('movies', {movie: this.addForm.value})
      .then(res => {
        this.ngOnInit();
      })
  }

  edit(element){
    this.updateForm.patchValue(element);
    this.currentElement = element;
  }

  submitUpdate(){
    if(this.currentElement){
      this.httpService.put('movies/', { movie: this.updateForm.value, id: this.currentElement.id }).then(res => {
        this.updateForm.reset();
        this.currentElement = null;
        this.ngOnInit();
      })
    }
  }

  delete(element){
    this.httpService.delete('movies/' + element.id).then(res => {
      this.ngOnInit();
    })  
  }

  deleteAll(){
    this.httpService.delete('movies').then(res => {
      this.ngOnInit();
    })  
  }


}
