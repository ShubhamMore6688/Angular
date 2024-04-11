import { InjectionToken, NgModule } from '@angular/core';
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
import { StructuralDirectiveComponent } from './component/structural-directive/structural-directive.component';
import { IfDirective } from './CustomDirectives/if.directive';
import { ViewEncapsulationComponent } from './component/view-encapsulation/view-encapsulation.component';
import { Child1Component } from './component/view-encapsulation/child1/child1.component';
import { Child2Component } from './component/view-encapsulation/child2/child2.component';
import { CreateServiceComponent } from './component/create-service/create-service.component';
import { HeaderComponent } from './component/create-service/header/header.component';
import { HomeHeaderComponent } from './component/create-service/home-header/home-header.component';
import { HeroComponent } from './component/create-service/home-header/hero/hero.component';
import { SidebarComponent } from './component/create-service/home-header/sidebar/sidebar.component';
import { SubscribeService } from './Services/subscribe.service';
import { UserDetailsComponent } from './component/create-service/home-header/user-details/user-details.component';
import { UserListComponent } from './component/create-service/home-header/user-details/user-list/user-list.component';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';
import { ObservablesComponent } from './component/observables/observables.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HeadingComponent } from './component/heading/heading.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { QuillModule } from 'ngx-quill';
// import { CKEditorModule } from 'ckeditor4-angular';


export const LOGGER_TOKEN = new InjectionToken<LoggerService>('Logger_Service')

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
    StyleDirective,
    StructuralDirectiveComponent,
    IfDirective,
    ViewEncapsulationComponent,
    Child1Component,
    Child2Component,
    CreateServiceComponent,
    HeaderComponent,
    HomeHeaderComponent,
    HeroComponent,
    SidebarComponent,
    UserDetailsComponent,
    UserListComponent,
    ObservablesComponent,
    LandingPageComponent,
    HeadingComponent,
    TestimonialsComponent,
    AvatarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule
    // CKEditorModule
  ],
  // providers: [SubscribeService, UserService, LoggerService],
  // behind the scene
  providers: [SubscribeService, UserService, {provide: LOGGER_TOKEN, useClass: LoggerService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
