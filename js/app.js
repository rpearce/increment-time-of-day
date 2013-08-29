;(function() {
  /**
    *
    * Increment Time of Day
    * by Robert Pearce
    *
    */

  var padNumber = function(n) {
    return (n < 10) ? '0' + n : n;
  };

  var setDefaultTimes = function(defaults) {
    try {
      if(Array.isArray(defaults)) {
        return defaults;
      } else {
          throw {
            name: 'DefaultsTypeError',
            message: 'Defaults must be of type Array',
            extra: ''
          }
      }
    } catch (e) {
        alert(e.message);
    }
  };

  var setMinuteIncrement = function(incrementMinutesBy) {
    try {
      if(typeof incrementMinutesBy === 'number' && incrementMinutesBy < 60) {
        return incrementMinutesBy;
      } else {
          throw {
            name: 'MinuteIncrementError',
            message: 'incrementMinutesBy must be a number and must be less than 60',
            extra: ''
          }
      }
    } catch (e) {
        alert(e.message);
    }
  };

  var getTimes = function(opts) {
    var defaults = setDefaultTimes(opts.defaults),
        incrementMinutesBy = setMinuteIncrement(opts.incrementMinutesBy),
        periods = ['am', 'pm'],
        hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        times = [];

    for(var p = 0; p < periods.length; p += 1) {
      for(var h = 0; h < hours.length; h += 1) {
        for(var i = 0; i < 60; i += incrementMinutesBy) {
          times.push(hours[h].toString() + ':' + padNumber(i).toString() + periods[p]);
        }
      }
    }

    return defaults.concat(times);
  };

  var generateOptionsHTML = function(times) {
    var html = [];
    for(var i = 0; i < times.length; i += 1) {
      var time = times[i],
          option = document.createElement('option');
      option.value = time;
      option.text = time;
      html.push(option);
    }

    return html;
  };

  var renderSelectOptions = function(times) {
    var options = generateOptionsHTML(times);
    var selectElem = document.querySelectorAll('.times')[0];
    for(var i = 0; i < options.length; i += 1) {
      selectElem.appendChild(options[i]);
    }

    return;
  };

  var defaults = ['Any', 'Early (4a-8a)', 'Morning (8a-12p)', 'Afternoon (12p-5p)', 'Evening (5p-9p)', 'Night (9p-12a)'];
  var times = getTimes({ defaults: defaults, incrementMinutesBy: 15 });

  return renderSelectOptions(times);
})();
