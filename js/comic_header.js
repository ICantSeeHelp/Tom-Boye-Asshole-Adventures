//the header of the site would be handled in this javascript file, so you don't have to copypaste the whole thing onto every page.
//at the bottom of your page, but before the js script calls and the closing body tag, put an empty div with a class of "writeHeader"
document.querySelector(".writeHeader").innerHTML = `
    <header align="center">    

        <a href="index.html"><img src="./img/Extras/logo.png" alt="" /></a> 

        <div id="nav">
            <a class = "navText"onmouseover = "audioPLay()" href="index.html">COMIC</a>| 
            <a class = "navText" href="archive.html">ARCHIVE</a>| 
            <a class = "navText"href="about.html">EXTRAS</a>| 
            <a class = "navText"href="characters.html">FANART</a>|
            <a class = "navText"href="https://ko-fi.com/icantseehelp">KOFI</a>
        </div>
    </header>
`;