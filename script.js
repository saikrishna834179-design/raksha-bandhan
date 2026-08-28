

/* ====================================== */
/* Welcome Screen */
/* ====================================== */

setTimeout(function(){

    document.getElementById("welcome-screen").style.opacity="0";

    setTimeout(function(){

        document.getElementById("welcome-screen").style.display="none";

    },1000);

},6000);

/* ========================= */
/* Typing Animation */
/* ========================= */

const message =
"Some people become family by birth... ❤️ Some become family by choice. You are my sister from another mother, my best friend, and one of the greatest blessings in my life. Happy Raksha Bandhan, Dimpuuu! 🌸";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

window.onload = typeWriter;



/* ========================= */
/* PHOTO LIGHTBOX */
/* ========================= */

const photos=document.querySelectorAll(".photo");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightbox-image");

const close=document.getElementById("close-btn");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImage.src=photo.querySelector("img").src;

    });

});

close.onclick=function(){

    lightbox.style.display="none";

}

lightbox.onclick=function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

/* =============================== */
/* REASONS */
/* =============================== */

const reasons = [

"❤️ Because you always make me smile.",

"🌸 Because you're my sister from another mother.",

"😊 Because you're always there when I need someone.",

"💖 Because your kindness makes everyone happy.",

"🤗 Because you understand me without judging.",

"🌈 Because you make ordinary days special.",

"😂 Because your laughter is contagious.",

"🌺 Because you support my dreams.",

"🎉 Because every memory with you is priceless.",

"✨ Because life is better with you in it."

];

const emojis = [

"❤️",

"🌸",

"😊",

"💖",

"🤗",

"🌈",

"😂",

"🌺",

"🎉",

"✨"

];

const reasonText = document.getElementById("reason-text");

const reasonEmoji = document.getElementById("reason-emoji");

const reasonBtn = document.getElementById("reason-btn");

reasonBtn.addEventListener("click",function(){

    const index = Math.floor(Math.random()*reasons.length);

    reasonText.innerHTML = reasons[index];

    reasonEmoji.innerHTML = emojis[index];

});

/* =============================== */
/* LETTER */
/* =============================== */

const fullLetter = `

Some people become family by birth.

Some become family by choice.

You are one of those beautiful people who became my sister from another mother.

Thank you for always making me smile.

Thank you for listening to me.

Thank you for believing in me.

I don't know what the future holds,

but I do know one thing...

No matter where life takes us,

you'll always have a special place in my heart.

I wish you endless happiness,

good health,

success,

and a life full of beautiful moments.

Happy Raksha Bandhan,Rahhh Dimpuuu ❤️

With lots of love,

Kittu....❤️

`;

const openLetter = document.getElementById("openLetter");

const letterBox = document.getElementById("letterBox");

const letterText = document.getElementById("letterText");

let letterIndex = 0;

openLetter.onclick = function(){

    letterBox.style.display = "block";

    openLetter.style.display = "none";

    function typeLetter(){

        if(letterIndex < fullLetter.length){

            letterText.innerHTML += fullLetter.charAt(letterIndex);

            letterIndex++;

            setTimeout(typeLetter,35);

        }

    }

    typeLetter();

}



/* ========================= */
/* MUSIC PLAYER */
/* ========================= */

const song=document.getElementById("song");

const playBtn=document.getElementById("playBtn");

const disc=document.getElementById("musicDisc");

let playing=false;

playBtn.onclick=function(){

    if(!playing){
        song.volume = 1;
        
        song.muted = false;

        song.play();

        disc.classList.add("rotate");

        playBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }

    else{

        song.pause();

        disc.classList.remove("rotate");

        playBtn.innerHTML="▶ Play Music";

        playing=false;

    }

}

/* ========================= */
/* GIFT */
/* ========================= */

const giftBox=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");

giftBox.onclick=function(){

    giftMessage.style.display="block";

    giftBox.style.display="none";

    createConfetti();

}

function createConfetti(){

    const emojis=[

    "🎊",

    "🎉",

    "❤️",

    "🌸",

    "💖",

    "✨",

    "🥳"

    ];

    for(let i=0;i<180;i++){

        let conf=document.createElement("div");

        conf.className="confetti";

        conf.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

        conf.style.left=Math.random()*100+"vw";

        conf.style.animationDuration=(2+Math.random()*3)+"s";

        document.body.appendChild(conf);

        setTimeout(()=>{

            conf.remove();

        },5000);

    }

}

/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

const container = document.querySelector(".floating-hearts");

function heart(){

    const h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "";


    h.style.left = Math.random()*100 + "vw";

    h.style.animationDuration = (5+Math.random()*5)+"s";

    h.style.fontSize = (15+Math.random()*30)+"px";

    container.appendChild(h);

    h.addEventListener("animationend",()=>{

        h.remove();

    });

}

setInterval(heart,300);

/* ========================= */
/* FLOATING HEARTS */
/* ========================= */

const heartContainer = document.getElementById("heart-container");

function createHeart(){

    const heart = document.createElement("span");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heartContainer.appendChild(heart);

    heart.addEventListener("animationend", () => {

        heart.remove();

    });

}

setInterval(createHeart, 350);
