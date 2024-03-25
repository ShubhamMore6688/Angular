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
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { CustomPropBindingComponent } from './component/custom-prop-binding/custom-prop-binding.component';
import { UsersComponent } from './component/custom-prop-binding/users/users.component';
import { FilterUserComponent } from './component/custom-prop-binding/filter-user/filter-user.component';
import { UserDetailComponent } from './component/custom-prop-binding/user-detail/user-detail.component';
import { ViewchildrenComponent } from './component/viewchildren/viewchildren.component';
import { NgtemplateComponent } from './component/ngtemplate/ngtemplate.component';
import { NgcontentComponent } from './component/ngcontent/ngcontent.component';
import { ContentchildComponent } from './component/contentchild/contentchild.component';
import { ChildComponent } from './component/contentchild/child/child.component';
import { ComponentInitializationComponent } from './component/component-initialization/component-initialization.component';
import { NgonchangeComponent } from './component/ngonchange/ngonchange.component';
import { setBackground } from './CustomDirectives/setBackground.directive';
import { HostlistnerDirective } from './CustomDirectives/hostlistner.directive';
import { HostbindingDirective } from './CustomDirectives/hostbinding.directive';
import { ConditionalDirDirective } from './CustomDirectives/conditional-dir.directive';
import { ClassDirective } from './CustomDirectives/class.directive';
import { ClassComponent } from './component/class/class.component';
import { StyleDirective } from './CustomDirectives/style.directive';

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
    NavbarComponent,
    SidemenuComponent,
    MainComponent,
    FooterComponent,
    HomepageComponent,
    CustomPropBindingComponent,
    UsersComponent,
    FilterUserComponent,
    UserDetailComponent,
    ViewchildrenComponent,
    NgtemplateComponent,
    NgcontentComponent,
    ContentchildComponent,
    ChildComponent,
    ComponentInitializationComponent,
    NgonchangeComponent,
    setBackground,
    HostlistnerDirective,
    HostbindingDirective,
    ConditionalDirDirective,
    ClassDirective,
    ClassComponent,
    StyleDirective
    
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
