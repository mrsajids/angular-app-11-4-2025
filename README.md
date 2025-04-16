# angular-app-11-4-2025
# Angular Modular Project
this is my practice and reference site

ng new angular-app
ng s -o
 
--create module with routing
--app-module-> app-routing-> app-component
ng g m app --routing
*** use forRoot() is used once — in your root module (AppRoutingModule) — to set up the global router configuration.***


--update main ts 
--main.ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {});

--update app-module.ts
*** import BrowserModule ***

 cd app  
 ng g m login --routing
 ng g c login/login --routing 
 --login-module-> login-routing-> login-component     

--login-module-> app-routing  
