import AudioComponent from "./components/TheAudioComponent.js";
import VideoComponent from "./components/TheVideoComponent.js";

(() => {
    const myVM = new Vue({
        data: {
            activeComponent: VideoComponent
        },

        methods: {
            switchComponents() {

                this.activeComponent = (this.activeComponent.name === "VideoComponent") ? AudioComponent : VideoComponent;

                // this.doSomethingElse();
            },

            doSomethingElse() {
                
            }
        }
    }).$mount("#app");
})();

(()=> {
    const videoTranscriptButton = document.querySelector(".transcriptButton");

    function toggleTranscript(){
        console.log("Transcript");
        this.nextElementSibling.classList.toggle("visible");
    }
    videoTranscriptButton.addEventListener("click", toggleTranscript);
}).$mount("#app");