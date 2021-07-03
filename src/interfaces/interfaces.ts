interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: number;
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2020-03'};
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}

let pictureInter = generatePicture({});
console.log('picture : ', pictureInter);
pictureInter = generatePicture({title: 'Travel Pic'});
console.log('pictureInter : ', pictureInter);
pictureInter = generatePicture({title: 'Travel Pic', date: '2012-05'});
console.log('pictureInter : ', pictureInter);

// Interfaz: usuario
interface User {
    readonly id: number; // solo lectura
    username: string;
    isPro: boolean
}

let user: User;
user = {id: 10, username: 'luixaviles', isPro: true}
console.log('user : ', user);
user.username = 'paparazzi';
// user.id = 20; // --> Error
console.log('user : ', user);
