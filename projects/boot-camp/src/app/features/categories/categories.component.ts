import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';
import { CategoriesModel } from '../../models/categories.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'] 
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private _categories?: Subscription;
  public categories: CategoriesModel[] = [];

  constructor(private categoriesService: CategoriesService) {} 

  ngOnInit() {
    this._categories = this.categoriesService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log(categories);
      },
      error: (error) => {
        console.error('Error :', error);
      }
    });
  }

  ngOnDestroy(){
    this._categories?.unsubscribe();
  }
}
