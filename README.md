# angular-app-11-4-2025
## Angular Modular Project
Angular 18 create components as standalone. In order to use modules based architecture we will follow these steps to create module based components.
```
ng new angular-app 
ng s -o
```
 
--create module with routing <br>
--app-module-> app-routing-> app-component <br>
```
ng g m app --routing 
```
*** use forRoot() is used once — in your root module  
--AppRoutingModule.ts — to set up the global router configuration.***
```
imports: [RouterModule.forRoot(routes)]
```

--update main ts <br>
--main.ts <br>
```
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {});
```
--update app-module.ts <br>
```
*** import BrowserModule *** 
imports: [
    BrowserModule, //**** must be added  manually..  
```
and 
```
  bootstrap: [AppModule]
```
  
```
 cd app  
 ng g m login --routing 
 ng g c login/login --routing 
```
 
 --login-module-> login-routing-> login-component <br>    

--login-module-> app-routing <br> 

```
 ng g m layout --routing
 cd layout

 ng g c layout
 ng g c header
 ng g c footer
```
 add all component in layout component and route for layout component only
 add layout module in app.routing.module
 ```
ng g m dashboard --routing
cd dashboard
ng g c dashbaord
```
add dashboard compo in dashbaord module and 
```
import module in layout module  
```

 ## importing images
 while import set angular json to  
 ```
          "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
```
and keep the files in assets in src


## print ngModel for Error validatio checking 
//html   
```
  <input type="text" name="title" #titleCtrl="ngModel"  
  // In your component .ts file  
  @ViewChild('titleCtrl') titleCtrlRef: NgModel;    
  ngAfterViewInit() {  
    console.log('Control:', this.titleCtrlRef);  
  }    
```





