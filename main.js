let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c5448f;">No creí que algo me apendejaría más que el pisto hasta que te conocí.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
