/**
  *
  * Increment Time of Day
  * by Robert Pearce
  *
  */

var ITOD = {
  getTimes: function(opts) {
    var defaults = this.setDefaultTimes(opts.defaults),
        incrementMinutesBy = this.setMinuteIncrement(opts.incrementMinutesBy),
        selector = opts.selector,
        periods = ['am', 'pm'],
        hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        times = [],
        combinedArrays = [];

    /**
      *
      * Iterate through every minute increment
      * of every hour
      * that falls within "am" or "pm"
      *
      */
    for(var p = 0; p < periods.length; p += 1) {
      for(var h = 0; h < hours.length; h += 1) {
        for(var i = 0; i < 60; i += incrementMinutesBy) {
          times.push(hours[h].toString() + ':' + this.padNumber(i).toString() + periods[p]);
        }
      }
    }

    combinedArrays = defaults.concat(times);

    return selector ? this.renderSelectOptions(combinedArrays) : combinedArrays;
  },

  setDefaultTimes: function(defaults) {
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
  },

  setMinuteIncrement: function(incrementMinutesBy) {
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
  },

  padNumber: function(n) {
    // Prepend 0 if number is less than 10
    return (n < 10) ? '0' + n : n;
  },

  renderSelectOptions: function(times, selector) {
    // Generate options and append to select element

    var options = this.generateOptionsHTML(times),
        selectElem = document.querySelectorAll('.times')[0];
    for(var i = 0; i < options.length; i += 1) {
      selectElem.appendChild(options[i]);
    }

    return times;
  },

  generateOptionsHTML: function(times) {
    var html = [];
    for(var i = 0; i < times.length; i += 1) {
      var time = times[i],
          option = document.createElement('option');
      option.value = time;
      option.text = time;
      html.push(option);
    }

    return html;
  }
};
