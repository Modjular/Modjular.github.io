// We need to wait for the document to fully load to grab the height/width
window.onload = () => {
  // For some reason, this element is returning a clientHeight of 0
  // clientWidth is fine
  // This will require some looking into
  let height = window.document.getElementById('profile-header').clientHeight;
  let width = window.document.getElementById('profile-header').clientWidth;
  console.log(height, width);


  let sketch = function(p) {
    p.setup = () => {
      p.createCanvas(512, 512);
      p.background('grey');
    }

    p.draw = () => {
      p.ellipse(p.mouseX, p.mouseY, 32, 32);
    }
  };

  new p5(sketch, window.document.getElementById('bg-canvas'));
}