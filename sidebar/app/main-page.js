var animationModule = require('ui/animation');
var platformModule = require('platform');
var absoluteLayoutModule = require('ui/layouts/absolute-layout');

var elMenu;
var elMainContent;

var deviceWidth = platformModule.screen.mainScreen.widthPixels / platformModule.screen.mainScreen.scale;
var deviceHeight = platformModule.screen.mainScreen.heightPixels / platformModule.screen.mainScreen.scale;

function pageLoaded(args) {
	var page = args.object;

	elMenu = page.getViewById('menuwrapper');
	elMainContent = page.getViewById('maincontent');

	absoluteLayoutModule.AbsoluteLayout.setLeft(elMenu, deviceWidth); // Push menu off screen
	elMenu.width = deviceWidth ; // Set menu to 100% width
	elMenu.height = deviceHeight; // Set menu to 100% height
}

function showMenu() {
	var curve = elMenu.ios ? UIViewAnimationCurve.UIViewAnimationCurveEaseIn : new android.view.animation.AccelerateInterpolator(1);
	var animationSetup = [
		{
			target: elMenu,
			translate: { x: -deviceWidth, y: 0 },
			duration: 250,
			delay: 0,
			iterations: 1,
			curve: curve
		},
		{
			target: elMainContent,
			opacity: 0.5,
			duration: 150,
			delay: 0,
			iterations: 1,
			curve: curve
		}
	];

	playAnimation(animationSetup);

}

function hideMenu() {
	var curve = elMenu.ios ? UIViewAnimationCurve.UIViewAnimationCurveEaseIn : new android.view.animation.AccelerateInterpolator(1);
	var animationSetup = [
		{
			target: elMenu,
			translate: { x: 0, y: 0 },
			duration: 250,
			delay: 0,
			iterations: 1,
			curve: curve
		},
		{
			target: elMainContent,
			opacity: 1,
			duration: 150,
			delay: 0,
			iterations: 1,
			curve: curve
		}
	];

	playAnimation(animationSetup);

}

function playAnimation(animationSetup) {
	var menuAnimation = new animationModule.Animation(animationSetup, false);

	menuAnimation.play().finished
		.then(function () { return console.log('Animation done'); })
		.catch(function (e) { return console.log(e.message); });
}

exports.loaded = pageLoaded;
exports.showMenuTap = showMenu;
exports.hideMenuTap = hideMenu;
