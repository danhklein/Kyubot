

 // Joystick Contructor
    var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      var clock = new THREE.Clock();
      var keyboard = new THREEx.KeyboardState();
      var joystick = new VirtualJoystick({
        mouseSupport  : true,
        stationaryBase  : true,
        baseX   : 200,
        baseY   : 200,
        limitStickTravel: true,
        stickRadius: 100
      });
      var renderer = new THREE.WebGLRenderer();
      renderer.setClearColor('rgb(204,204,204)', 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);


// Display speed, direction, etc`
      setInterval(function(){
        var dx = Math.floor(joystick.deltaX());
        var dy = Math.floor(joystick.deltaY());
        var speed = Math.floor(Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2)));
        var rad = (Math.atan2(joystick.deltaY(),joystick.deltaX()));
        var direction = (Math.floor(rad * (180 / Math.PI))) + 180;

        var outputEl  = document.getElementById('result');
            outputEl.innerHTML  = '<b>Result:</b> '
              + ' dx: '+dx
              + ' dy: '+dy
              + ' speed: '+speed
              + ' direction: '+direction
              + (joystick.right() ? ' right'  : '')
              + (joystick.up()  ? ' up'   : '')
              + (joystick.left()  ? ' left' : '')
              + (joystick.down()  ? ' down'   : '') 
          }, 10);

