import { Component, OnInit, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TableComponent } from '../table/table.component';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('dynamicInsert', { read: ViewContainerRef }) dynamicInsert: ViewContainerRef;
  constructor(changeDetectorRef: ChangeDetectorRef, 
              media: MediaMatcher,
              private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) 
  {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  insertComponent(componentName:String)
  {
    const componentFac = this.componentFactoryResolver.resolveComponentFactory(this.componentFactory(componentName));
    this.dynamicInsert.clear();
    this.dynamicInsert.createComponent(componentFac);
  }

  componentFactory(componentName:String):any
  {
    switch(componentName) { 
      case 'table': { 
        return TableComponent
      } 
      case 'tabs': { 
        return TabsComponent;
      } 
      default: { 
         return TableComponent;
      } 
   } 
  }

  ngAfterViewInit() {
    //of empty return TableComponent
    this.insertComponent("");
  }

  selectItem(componentName:String){
    this.insertComponent(componentName);
  }
}
