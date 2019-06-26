import { Component } from '@angular/core';

import { DataStorageService } from 'src/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService) { }

  onSaveRecipe() {
    this.dataStorage.saveRecipes();
  }

  onFetchRecipes() {
    this.dataStorage.fetchRecipes();
  }

}
