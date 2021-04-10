export default {
    name: "VideoComponent",

    template: `
         <section class="video-player">
         <div class="container">
            <h2>Currently active:</h2>
            <i class="fas fa-film media-icon" id="icon"></i></div>
            <h1>Videos</h1>
            <div class="videos">
                <div class="column">
                    <video controls preload="metadata" src="videos/Trolls.mp4" id="video"><track default
                    kind="captions"
                    srclang="en"
                    src="/images/Trolls-Captions.vtt"/></video>
                    <div class="info">
                        <h3>Trolls</h3>
                        <h4>Released: October 8, 2016</h4>
                        <p>The Trolls are small, colorful creatures who live in an almost perpetual state of happiness, singing, dancing, hugging, and having fun all day. However, they are discovered by the Bergens, large, ugly, mean, and miserable creatures who believe they can only feel happy by consuming a Troll.</p>
                    </div>
                </div>
                <div class="column">
                    <video controls preload="metadata" src="videos/Deadpool.mp4" id="video"><track default
                    kind="captions"
                    srclang="en"
                    src="/images/Deadpool-Captions.vtt"/></video>
                    <div class="info">
                        <h3>Deadpool</h3>
                        <h4>Released: February 12, 2016</h4>
                        <p>Deadpool is a highly trained assassin and mercenary. He is adept in multiple forms of martial arts, including Savate. Deadpool is an extraordinary athlete, and an expert swordsman and marksman. He is skilled in the use of multiple weapons, including katanas, knives, grenades, and guns.</p>
                    </div>
                </div>
            </div>
            
        </section>`
}