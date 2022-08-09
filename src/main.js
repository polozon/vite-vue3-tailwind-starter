import { createApp } from 'vue'
import './tailwind.css'
import './custom.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faHome)
library.add(faTasks)
library.add(faEnvelope)
library.add(faChartArea)
library.add(faWallet)

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


// Ugly test from original, not working
/*
var userMenuDiv = document.getElementById("userMenu");
var userMenu = document.getElementById("userButton");

document.onclick = check;

function check(e) {
    var target = (e && e.target) || (event && event.srcElement);

    //User Menu
    if (!checkParent(target, userMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, userMenu)) {
            // click on the link
            if (userMenuDiv.classList.contains("invisible")) {
                userMenuDiv.classList.remove("invisible");
            } else {
                userMenuDiv.classList.add("invisible");
            }
        } else {
            // click both outside link and outside menu, hide menu
            userMenuDiv.classList.add("invisible");
        }
    }

}

function checkParent(t, elm) {
    while (t.parentNode) {
        if (t == elm) {
            return true;
        }
        t = t.parentNode;
    }
    return false;
}
*/


