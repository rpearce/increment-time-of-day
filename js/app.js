;(function() {
  // Set any defaults you want to be set first
  var defaults = ['Any', 'Early (4a-8a)', 'Morning (8a-12p)', 'Afternoon (12p-5p)', 'Evening (5p-9p)', 'Night (9p-12a)'];

  /**
    * Call the getTimes method,
    * passing the defaults, as well
    * as an amount to increment each
    * hour by.
    *
    */
  var times = ITOD.getTimes({ defaults: defaults, incrementMinutesBy: 15 });

  var renderSelectOptions = function(times) {
    // Generate options and append to select element

    var options = ITOD.generateOptionsHTML(times),
        selectElem = document.querySelectorAll('.times')[0];
    for(var i = 0; i < options.length; i += 1) {
      selectElem.appendChild(options[i]);
    }

    return;
  };

  return renderSelectOptions(times);
})();
