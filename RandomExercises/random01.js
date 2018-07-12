function welcome() {
  
    function greeting() {
      console.log('Hi Coco!!!');
    }

    function leaving() {
        function leavingMessage() {
            console.log("Bye Coco!!!");
        }
        leavingMessage();
    }
    
    greeting();
    leaving();
  }
  
  welcome(); // Hi Coco!!!
  // greeting(); // greeting is not defined
  // leaving();