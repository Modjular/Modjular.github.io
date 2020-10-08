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
  var titles = ["Software Engineer",
                "Enthusiastic Learner",
                "Data Scientist",
                "Web Developer",
                "Fullstack Engineer",
                "Job Seeker",
                "Eagle Scout",
                "Brother",
                "Extremely Tired",
                "UX Appreciator",
                "Dribbble Dabbler",
                "Question Asker",
                "Python Wrangler",
                "UI Connoisseur",];

  var animating = false;
  var cur_i = 0;
  var next_i = 0;


  // onst typeText = (element, new_text) => {
    
  // }

  subtitle.onmousedown = async (ev) => {

    // only activate if we click with the left mouse button. because
    // also, don't want to interrupt if its animating
    if(ev.button === 0 && animating === false){
      animating = true;

      // "backspace" the current title
      let length = titles[cur_i].length;
      while (length > 0){
        await new Promise(resolve => setTimeout(resolve, 32));
        let amt = Math.floor(Math.random() * 5) + 2;
        amt = Math.min(amt, length);
        subtitle.textContent = subtitle.textContent.substring(0, subtitle.textContent.length - amt);;
        length -= amt;
      }
      subtitle.textContent = "";

      // Breath for a sec
      await new Promise(resolve => setTimeout(resolve, 300));

      // Grab a new title
      while( next_i === cur_i ){
        next_i = Math.floor(Math.random() * titles.length); //wack
      }

      // Start "typing" the new title
      length = 0;
      while (length < titles[next_i].length){
        await new Promise(resolve => setTimeout(resolve, 32));
        subtitle.textContent += titles[next_i][length]
        length++;
      }

      // Keep track of the old one
      subtitle.textContent = titles[next_i];
      cur_i = next_i;

      animating = false;
    }
  }
}