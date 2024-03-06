// bootstrapping is the process of initializing or loading and angular application

//index.html is main file that load in the browser but there is not any script file or style.css file is attached
// to that file

//in this angular cli is used to inject these file during runtime. when we use 'ng serve' command this compile
// the angular application and some bundles but we cannot access that bundles they are stored in the memory and 
// directly start the application

//to see that bundles we need to build our angular application using 'ng build' command


// angular cli uses webpack to traverse through our angular app & it bundles js & other files into one or more bundles
// after this angular cli injects the bundled javascript and css files in the index.html

//from angular.json file angular application comes to know where is the entry point that is main.ts file

// AppModule is root module of angular applcation

//app.module.ts

// import --> we need to add all the external modules that we are using
// providers --> we need to register our servises in this
//bootstrap --> component that load when AppModule loads


//app.component.ts
// selector: 'app-root' // this can be used as html tag
// templateUrl : view template for that perticular component 
// styleUrls: style sheet for the view template 

// angular project --> angular.json --> main.ts --> AppModule --> app.module.ts --> AppComponent  --> app.component.html
