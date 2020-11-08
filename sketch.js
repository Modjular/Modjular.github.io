// 11-5-20
// This script simulates the cool "delete, then retype" animation
// I see on some sites. A little janky, be warned

// TODO
// Make it generic, so that it could be attached to any element.
// Maybe even make it into a React Component

// We need to wait for the document to fully load to grab the height/width
window.onload = () => {

    // For some reason, this element is returning a clientHeight of 0
    // clientWidth is fine
    // This will require some looking into

    // let height = window.document.getElementById('profile-header').clientHeight;
    // let width = window.document.getElementById('profile-header').clientWidth;
    // console.log(height, width);


    // let sketch = function(p) {
    //   p.setup = () => {
    //     p.createCanvas(512, 512);
    //     p.background('grey');
    //   }

    //   p.draw = () => {
    //     p.ellipse(p.mouseX, p.mouseY, 32, 32);
    //   }
    // };

    // new p5(sketch, window.document.getElementById('bg-canvas'));

    var subtitle = window.document.getElementById('my-title')
    var titles = [
        "",
        "Software Engineer",
        "Problem Solver",
        "Web Developer",
        "Communicator",
        "Enthusiastic Learner",
        "Data Scientist",
        "Job Seeker",
        "Eagle Scout",
        "Brother",
        "Extremely Tired",
        "UX Appreciator",
        "Dribbble Dabbler",
        "Question Asker",
        "Python Wrangler",
        "UI Connoisseur",
        "Unity Tinkerer",
        "You Still Here?",
        "This Is The Last One",
        "This Is The Last One",
        "This Is The Last One",
        "This Is The Last One",
        "This Is The Last One",
        "Congrats",
        "For Real This Time",
    ];

    var animating = false;
    var cur_i = 0;
    var next_i = 0;

    const retype = async (element) => {
        animating = true;

        // "backspace" the current title
        let length = titles[cur_i].length;
        while (length > 0) {
            await new Promise(resolve => setTimeout(resolve, 32)); // The wackest way to "sleep"
            let amt = Math.floor(Math.random() * 5) + 2;
            amt = Math.min(amt, length);
            element.textContent = element.textContent.substring(0, element.textContent.length - amt);;
            length -= amt;
        }
        element.textContent = "";

        // Breath for a sec
        await new Promise(resolve => setTimeout(resolve, 300));

        // Grab a new title
        // while( next_i === cur_i ){
        //   next_i = Math.floor(Math.random() * titles.length); //wack
        // }
        next_i = (next_i + 1) % titles.length;

        // Start "typing" the new title
        length = 0;
        while (length < titles[next_i].length) {
            await new Promise(resolve => setTimeout(resolve, 32));
            element.textContent += titles[next_i][length]
            length++;
        }

        // Keep track of the old one
        element.textContent = titles[next_i];
        cur_i = next_i;

        animating = false;
    }

    subtitle.onmousedown = async (ev) => {
        if (!animating) {
            retype(ev.target)
        }
    }

    // Run it once when the page loads:
    console.log("Page has loaded");
    retype(subtitle);
}