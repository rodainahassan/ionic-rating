# ionic4-rating

A native Ionic 4 rating stars component forked from [ionic-rating](https://www.npmjs.com/package/ionic-rating) to support new Ionic 4 components.

## How to install?

`npm i ionic4-rating`

## How to use:

Import `IonicRatingModule` on module definition that declares the page where you want to add the rating component. In some cases, all pages are declared on `src/app/app.module.ts`.

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import ionic-rating module
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicRatingModule // Put ionic-rating module here
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

If you are using `Lazy Loading` in your application, add the `IonicRatingModule` to the page module instead of the app module.

```typescript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { IonicRatingModule } from "ionic-rating";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicRatingModule // Put ionic-rating module here
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ]
})

export class ProfilePageModule { }
```

Include the component on page template, like the example below:

```
<rating [rate]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (rateChange)="onRateChange($event)">
</rating>
```

[(ngModel)]: 

```
<rating [(ngModel)]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (ngModelChange)="onModelChange($event)">
</rating>
````

Reactive Forms:

```
<rating formControlName="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
</rating>
````

### You may also need to customize component styles:

```
rating {
  ion-icon {
    color: gray;

    &.filled {
      color: #ffb400;
    }
  }
}
```

&#9400; Rodaina Mohamed 2018  
Updated by Lincon Dias 2019 to Ionic 4
