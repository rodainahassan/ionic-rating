<h1 align="center">ionic-rating</h1>
<p>
  <img src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/RodainaMohamed/ionic-rating#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/RodainaMohamed/ionic-rating/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/RodainaMohamed/ionic-rating/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> A simple Ionic 4 stars rating component using Angular, with an easy API and support for all methods of binding (Property and Event Binding, Template Forms and Reactive Forms).

<!-- ### 🏠 [Homepage](https://github.com/RodainaMohamed/ionic-rating) -->

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Ionic 4. To use it with Ionic 3, please install v1.x.x.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install --save ionic-rating
```

Using yarn

```sh
yarn add ionic-rating
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import our module in the parent module for the component you will be using it in:

```js
import { IonicRatingModule } from 'ionic-rating';

@NgModule({
  ...
  imports: [IonicRatingModule, ...],
  ...
})
export class YourModule {
}
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
<ion-rating [rate]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (rateChange)="onRateChange($event)">
</ion-rating>
```

Template Forms:

```
<ion-rating [(ngModel)]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (ngModelChange)="onModelChange($event)">
</ion-rating>
```

Reactive Forms:

```
<ion-rating formControlName="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
</ion-rating>
```

### API

### Properties

- rate: `number` [0-5]
- readonly: `boolean` that controls wether editing the rating is allowed or not
- resettable: `boolean` that controls wether the rating should reset if the same rate is selected again
- size: `'small' | 'default' | 'large'`

### Events

- hover: `EventEmitter<number>, called whenever you hover on a rating value`
- leave: `EventEmitter<number>, called whenever you stop hovering on the rating, it passes the last value you hovered on before leaving`
- rateChange: `EventEmitter<number>, called whenever you select a rating value`

### Styling

```
ion-rating {
  --star-color: gray;
  --star-color-filled: green;
}
```

## Author <a name = "author"></a>

👤 **Rodaina Mohamed**

- Github: [@RodainaMohamed](https://github.com/RodainaMohamed)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/RodainaMohamed/ionic-rating/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2019 [Rodaina Mohamed](https://github.com/RodainaMohamed).<br />
This project is [MIT](https://github.com/RodainaMohamed/ionic-rating/blob/master/LICENSE) licensed.
