function SetupDynamicElements() {
    SetListStyleImages();
    SetTornPaperImages();
}

function SetListStyleImages() {
    const LightningBoltPath = "url('Assets/CustomBullets/LightningBolt.png')";
    const StarPath = "url('Assets/CustomBullets/Star.png')";
    const AsteriskPath = "url('Assets/CustomBullets/Asterisk.png')";
    const SkullPath = "url('Assets/CustomBullets/Skull.png')";

    const CustomBullets = new Array(LightningBoltPath, StarPath, AsteriskPath, SkullPath);

    var liElements = document.getElementsByTagName("LI");

    for(var i = 0; i < liElements.length; i++) {
        liElements[i].style.listStyleImage = CustomBullets[Math.floor(Math.random() * CustomBullets.length)];

        if(liElements[i].textContent == "5 Funerals" && liElements[i].style.listStyleImage == 'url("Assets/CustomBullets/Skull.png")') {
            liElements[i].style.listStyleImage = LightningBoltPath;
        }
    }
}

function SetTornPaperImages() {
    const topImagePaths = new Array(
        "Assets/TornPaperEffects/torn-paper-top-2.png",
        "Assets/TornPaperEffects/torn-paper-top-3.png", 
        "Assets/TornPaperEffects/torn-paper-top-4.png",
    );

    const bottomImagePaths = new Array(
        "Assets/TornPaperEffects/torn-paper-bottom-1.png", 
        "Assets/TornPaperEffects/torn-paper-bottom-2.png",
        "Assets/TornPaperEffects/torn-paper-bottom-3.png",
        "Assets/TornPaperEffects/torn-paper-bottom-4.png"
    );

    var topTornPaperElements = document.getElementsByClassName("TopTornPaper");
    var bottomTornPaperElements = document.getElementsByClassName("BottomTornPaper");

    for(var i = 0; i < topTornPaperElements.length; i++) {
        topTornPaperElements[i].src = topImagePaths[Math.floor(Math.random() * topImagePaths.length)];
    }

    for(var i = 0; i < bottomTornPaperElements.length; i++) {
        bottomTornPaperElements[i].src = bottomImagePaths[Math.floor(Math.random() * bottomImagePaths.length)];
    }
}


