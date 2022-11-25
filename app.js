log = console.log;

let screen = document.getElementById("calculator-screen");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (b) => {
        if (screen.innerText == "Noooooooo!") {
            screen.innerText = "";
        }

        switch (b.target.innerText) {
            case "CA":
                screen.innerText = "";
                break;

            case "←":
                if (screen.innerText) {
                    screen.innerText = screen.innerText.slice(0, -1);
                }
                break;

            /* case "^":
                screen.innerText = screen.innerText + "**";
                break; */

            case "=":
                try {
                    /* screen.innerText = eval(screen.innerText); */
                    result = eval(screen.innerText);
                    screen.innerText = Math.floor(result * 1000) / 1000;
                } catch {
                    screen.innerText = "Noooooooo!"
                }
                break;

            default:
                screen.innerText += b.target.innerText;
        }
    });
});
