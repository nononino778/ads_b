const DIRECTLINK_ADS = "https://protocolsnappedimpure.com/z7bnhu7f?key=4e93c88c941c75aec205496472798d4a";

var scripts = [
	"https://protocolsnappedimpure.com/23826e047dc3e6ed9c88031adbc67b97/invoke.js",//banner js
];

for (index = 0; index < scripts.length; ++index) {
    var script = document.createElement('script');
    script.src = scripts[index];
    script.type='text/javascript';
    var done = false;
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            //promptForUserEntries();
        }
    };  
    document.getElementsByTagName("body")[0].appendChild(script);
}