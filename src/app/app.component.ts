import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  
  linkClicked() {
    var ele = document.getElementById('card');
    ele.classList.add('flip-card');
  }

}
