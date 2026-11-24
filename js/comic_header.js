//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">    

  

        <a href="index.html"><img src="./img/Extras/logo.png" alt="" /></a> 

        <div id="nav">
            <a id="play" class = "navText" href="index.html">COMIC</a>| 
            <a id="play" class = "navText" href="archive.html">ARCHIVE</a>| 
            <a id="play" class = "navText" href="extras.html">EXTRAS</a>| 
            <a id="play" class = "navText" href="fanart.html">FANART</a>|
            <a id="money" class = "moneyText" href="boyebucks.html">BOYE BUCK$</a>|
            <a id="play" class = "navText" href="https://ko-fi.com/icantseehelp">KOFI</a>
        </div>




</header>
`;


//this is the most retarded code ive had to write, I'm not telling to assign to a sound to an ID or a CLASS just... Fuck it!
//everything link gets a sound now! whynot! it works however but jesus christ...
//never mind im fucking genius all i had to do was add a hastag


          const links = document.querySelectorAll('#play')
          links.forEach((play) => {

          play.addEventListener("mouseover", playMusic);

          })

          const moneys = document.querySelectorAll('#money')
          moneys.forEach((money) => {

          money.addEventListener("mouseover", playMoney);

          })



    let play = document.getElementById("play");
    let money = document.getElementById("money");

    
    function playMusic() {
    
        let audio = new Audio("sounds/hover.mp3");
        audio.play()
          }

    function playMoney() {
    
        let audio = new Audio("sounds/kaching.mp3");
        audio.play()
          }



