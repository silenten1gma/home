//A dictionary containing the sites with the corresponding hotkeys
const sites = { "R": "https://www.reddit.com", "T": "http://www.4channel.org/g/", "D": "http://www.discord.com/login", "M":"https://m.me", "W":"https://www.w3schools.com", 
               "F":"https://www.freecodecamp.org","G":"https://github.com/login", "P":"https://codepen.io/pen","C":"https://coolors.co", 
               "X":"https://pixlr.com/x/","Y":"https://yewtu.be","A":"https://mega.nz","B":"https://thepiratebay.org/index.html","H":"https://1337x.to"}


// social stuff
window.addEventListener('keydown', (event) => {
    //  Get the ASCII key code (int) of the key pressed then convert it to (string) the corresponding letter name
    let pressed_key = String.fromCharCode(event.keyCode);
    //event.preventDefault();
    let keys = Object.keys(sites);
    if (keys.includes(pressed_key)) {
        //  Lookup the corresponding key value in the dictionary
        let target_site = sites[pressed_key];
        //  Change windows location to the corresponding site
        window.location.href = target_site;
    }
})
