"use strict";
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020-03' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var pictureInter = generatePicture({});
console.log('picture : ', pictureInter);
pictureInter = generatePicture({ title: 'Travel Pic' });
console.log('pictureInter : ', pictureInter);
pictureInter = generatePicture({ title: 'Travel Pic', date: '2012-05' });
console.log('pictureInter : ', pictureInter);
var user;
user = { id: 10, username: 'luixaviles', isPro: true };
console.log('user : ', user);
user.username = 'paparazzi';
// user.id = 20; // --> Error
console.log('user : ', user);
