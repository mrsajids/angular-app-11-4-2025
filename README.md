# angular-app-11-4-2025
# Angular Modular Project
this is my practice and reference site

ng new angular-app
ng s -o

<!-- create module with routing -->
<!-- app-module-> app-routing-> app-component -->
ng g m app --routing

<!-- update main ts -->
main.ts
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {});

