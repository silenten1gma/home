//A dictionary containing the sites with the corresponding hotkeys
const sites = {"R":"https://www.reddit.com", "T":"http://www.4channel.org/g/", "D":"http://www.discord.com/login"}


// social stuff
window.addEventListener('keydown', (event) => {
    //  Get the ASCII key code (int) of the key pressed then convert it to (string) the corresponding letter name
    let pressed_key = String.fromCharCode(event.keyCode);
    event.preventDefault();
    //  Lookup the corresponding key value in the dictionary
    let target_site = sites[pressed_key];
    //  Change windows location to the corresponding site
    window.location.href = target_site;
})