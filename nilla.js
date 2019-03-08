//code to simulate an event
//Example usage to simulate a click:
//<a id="button1" class="button" onclick="eventFire(document.getElementById('button2'), 'click');">Button 1</a>
//Button 1 emulates a button 2 click.
function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
