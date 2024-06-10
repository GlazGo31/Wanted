
import { defineStore } from "pinia";
import {ref} from "vue";

export const useWindowSizeStore = defineStore('windowSize', ()=> {
    const windowWidth = ref()

    function onReloadWindow () {
        windowWidth.value =  window.innerWidth
    }
    function windowResize() {
        window.addEventListener('resize', ()=> {
            windowWidth.value = window.innerWidth
        })
    }

    return {windowWidth, onReloadWindow, windowResize}
})