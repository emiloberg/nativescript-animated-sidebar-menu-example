#nativescript-animated-sidebar-menu-example

This is a small repo demonstrating one way to create an animated sidebar menu **without any external dependencies**. Working on both iOS and Android.

![Animated Screengrab](https://raw.githubusercontent.com/emiloberg/nativescript-animated-sidebar-menu-example/master/docs/screengrab.gif)

## Installation

#### Step 1:
```
git clone https://github.com/emiloberg/nativescript-animated-sidebar-menu-example.git
cd sidebar
# add your platforms, e.g:
tns platform add ios
```

#### Step 2:
The [NativeScript Animation Framework](https://github.com/NativeScript/NativeScript/issues/255) is/will be released with NativeScript 1.3. Check your current NativeScript version by running

```
tns --version
```

If you're running with a version below 1.3 you need to update. At the time of writing, version 1.3 is **not released**. However, the animation framework is already done and all you need to do is to download the newest `tns_modules` from the NativeScript GitHub repo. Please see [the guide on Building the Repo and Using the Latest tns_modules](https://docs.nativescript.org/running-latest.html#building-the-repo) and replace the `tns_modules` folder accordingly.

#### Step 3: 
Run the app! E.g, from the `sidebar` folder:

```
tns emulate ios --device iPhone-6
```