import data from '../data.js'; //Itt importálom be az adatokat
const HomeScreen = { //ez olyan mint egy obejktum
    //visszadjuk a rendezetlen terméklistát átkonvertálva az ul-be
    render: () => {
        const{termekek}=data;
        return `
        <ul class="termekek">
        ${termekek.map(termek => `
        <li>
            <div class="termek">
                <a href="/#/termek/${termek._id}">
                     <img src="${termek.kep}" alt="${termek.nev}"/>  <!-- Ide jön majd a termék képe -->
                </a>
             <div class="termek-nev">
                <a href="/#/termek/1">
                    ${termek.nev}
                </a>
            </div>
            <div class="termék-markaja">
                <a href="/#/termek/1">
                    ${termek.marka}
                 </a>
            </div>
            <div class="termek-ara">
                <a href="/#/termek/1">
                    ${termek.ar}
                </a>
            </div>
            </div>
          </li>
        `)}
        `
    }
}
export default HomeScreen;