;(function() {
  // Define any defaults you want to be set first
  var defaults = ['Any', 'Early (4a-8a)', 'Morning (8a-12p)', 'Afternoon (12p-5p)', 'Evening (5p-9p)', 'Night (9p-12a)'];

  /**
    * Call the getTimes method,
    * passing the defaults, as well
    * as an amount to increment each
    * hour by. If you want to append
    * these options to a <select> element,
    * include a selector attribute with the
    * appropriate selector name.
    *
    */
  var times = ITOD.getTimes({ defaults: defaults, incrementMinutesBy: 15, selector: '.times' });
  console.log(times);

  return this;
})();
