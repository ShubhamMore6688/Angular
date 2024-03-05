import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsComponent } from './component/steps/steps.component';
import { NotificationComponent } from './component/notification/notification.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { PropertybindingComponent } from './component/databinding/propertybinding/propertybinding.component';
import { EventbindingComponent } from './component/eventbinding/eventbinding.component';
import { ClassbindingComponent } from './component/classbinding/classbinding.component';
import { TwoWayDataBindingComponent } from './component/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { TempRefComponent } from './component/temp-ref/temp-ref.component';
import { NgIfDirectComponent } from './component/ng-if-direct/ng-if-direct.component';
import { NgSwitchDirectComponent } from './component/ng-switch-direct/ng-switch-direct.component';
import { NgForDirectComponent } from './component/ng-for-direct/ng-for-direct.component';
import { CustomDirectiveDirective } from './component/appDirective/custom-directive.directive';
import { DirectivesComponent } from './component/directives/directives.component';
import { NgContainersComponent } from './component/ng-containers/ng-containers.component';
import { NgTemplateComponent } from './component/ng-template/ng-template.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    NotificationComponent,
    DatabindingComponent,
    PropertybindingComponent,
    EventbindingComponent,
    ClassbindingComponent,
    TwoWayDataBindingComponent,
    TempRefComponent,
    NgIfDirectComponent,
    NgSwitchDirectComponent,
    NgForDirectComponent,
    CustomDirectiveDirective,
    DirectivesComponent,
    NgContainersComponent,
    NgTemplateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
