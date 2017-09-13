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


