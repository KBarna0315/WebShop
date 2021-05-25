import HomeScreen from './screens/HomeScreen.js';
import TermekScreen from './screens/TermekScreen.js';
import {parseRequestUrl} from './utils.js';
import Error404Screen from './screens/Error404Screen.js';
const routes={
    '/': HomeScreen,
    '/termek/:id': TermekScreen,
};
const router = () =>{
    const request=parseRequestUrl();
    const parseUrl=
        (request.resource ? `/${request.resource}`: '/') +              //megvizsgáljuk, hogy a resource létezik-e egyáltalán
        (request.id? '/:id' :'') +      //ez olyan mint egy if szóval ha id létezik akkor írja ki azt ha meg nem akor hagyja üresen
        (request.action ? `/${request.action}` : ''); //ebbe a sorba itt nem vagyok biztos
    const screen=routes[parseUrl]? routes[parseUrl]: Error404Screen.render();
    const main = document.getElementById("main-container")

    //main.innerHTML=HomeScreen.render();
    main.innerHTML=screen.render();
};

window.addEventListener("load", router);
window.addEventListener('hashchange',router);