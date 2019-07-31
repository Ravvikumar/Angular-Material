import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Material';
  Notifications = 0;
  showSpinner = false;
  opened = false;
  selectedValue: string;

  loadData() {
    this.showSpinner = true;
    setTimeout(() =>{
      this.showSpinner = false;
    },5000)
  }

  logChange(index) {
    console.log(index);
  }

  options: string[] = ['Angular', 'Recat', 'Vew'];
  objectOptions = [
    { name: 'Angular' },
    { name: 'Angular Material' },
    { name: 'React' },
    { name: 'Vew' }
  ];

  displayFunc(subject) {
    return subject ? subject.name : undefined; 
  }

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map( value => this._filter(value) )
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
