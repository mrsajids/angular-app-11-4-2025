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
