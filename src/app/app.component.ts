import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  ComponentFactory,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';

// Dynamic components
import { AboutMeComponent } from './back/about-me/about-me.component';
import { MyProjectsComponent } from './back/my-projects/my-projects.component';
import { ContactMeComponent } from './back/contact-me/contact-me.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  entryComponents: [AboutMeComponent, MyProjectsComponent, ContactMeComponent],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnDestroy {

  @ViewChild('backContainer', { read: ViewContainerRef }) backContainer;
  private _backComponentRef: ComponentRef<{}>;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnDestroy() {
    this._backComponentRef.destroy();
  }

  linkClicked(component?: string) {
    const ele = document.getElementById('card');
    ele.classList.toggle('flip-card');
    if (component) {
      switch (component) {
        case 'about-me':
          this.createComponent(AboutMeComponent);
          break;
        case 'my-projects':
          this.createComponent(MyProjectsComponent);
          break;
        case 'contact-me':
          this.createComponent(ContactMeComponent);
          break;
      }
    } else {
      this._backComponentRef.destroy();
    }
  }

  createComponent(component) {
    this.backContainer.clear();
    const componentFactory: ComponentFactory<{}> = this._componentFactoryResolver.resolveComponentFactory(component);
    this._backComponentRef = this.backContainer.createComponent(componentFactory);
  }

}
