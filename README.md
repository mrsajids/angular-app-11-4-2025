# angular-app-11-4-2025
## Angular Modular Project
this is my practice and reference site

ng new angular-app <br>
ng s -o
 
--create module with routing <br>
--app-module-> app-routing-> app-component <br>
ng g m app --routing <br>
*** use forRoot() is used once — in your root module (AppRoutingModule) — to set up the global router configuration.***


--update main ts <br>
--main.ts <br>
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {});

--update app-module.ts <br>
*** import BrowserModule *** <br>

 cd app  <br>
 ng g m login --routing <br>
 ng g c login/login --routing <br>
 --login-module-> login-routing-> login-component <br>    

--login-module-> app-routing <br> 

 ng g m layout --routing
 cd layout

 ng g c layout
 ng g c header
 ng g c footer

 add all component in layout component and route for layout component only
 add layout module in app.routing.module
 
 ## importing images
 while import set angular json to 
          "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
and keep the files in assets in src


ng g m dashboard --routing
cd dashboard
ng g c dashbaord
add dashboard compo in dashbaord module and import module in layout module

## print ngModel for Error validatio checking 
//html 
  <input type="text" name="title" #titleCtrl="ngModel"  
  // In your component .ts file
  @ViewChild('titleCtrl') titleCtrlRef: NgModel;  
  ngAfterViewInit() {
    console.log('Control:', this.titleCtrlRef);
  }  





