;(function() {
  /**
    *
    * Increment Time of Day 0.1
    * (c) 2013 Robert Pearce
    * Increment Time of Day may be freely distributed under the MIT license.
    * For all details and documentation
    * https://github.com/rpearce/increment-time-of-day
    *
    */

  var ITOD = window.ITOD = {};

  ITOD.VERSION = '0.1'

  ITOD.getTimes = function(opts) {
    if (typeof opts === 'undefined') { throw new Error('Options object argument must be passed'); return; }
    var defaults = this.setDefaultTimes(opts.defaults),
        incrementMinutesBy = this.setMinuteIncrement(opts.incrementMinutesBy),
        selector = opts.selector,
        selectedTime = this.setSelectedTime(opts.selectedTime, selector);
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

    return selector ? this.renderSelectOptions(combinedArrays, selector, selectedTime) : combinedArrays;
  };

  ITOD.setDefaultTimes = function(defaults) {
    if(Array.isArray(defaults)) {
      return defaults;
    } else {
        throw new Error('defaults must be of type Array');
    }
  };

  ITOD.setMinuteIncrement = function(incrementMinutesBy) {
    if(typeof incrementMinutesBy === 'number' && incrementMinutesBy < 60) {
      return incrementMinutesBy;
    } else {
        throw new Error('incrementMinutesBy must be a number and must be less than 60')
    }
  };

  ITOD.setSelectedTime = function(selectedTime, selector) {
    if(typeof selectedTime === 'undefined') { return; }
    if(typeof selectedTime === 'string' && typeof selector !== 'undefined' && selector !== '') {
      return selectedTime;
    } else {
        throw new Error('selectedTime must be a string and the "selector" attribute must be defined')
    }
  };

  ITOD.padNumber = function(n) {
    if (typeof n !== 'number') { throw new Error('padNumber argument must be of type "number"'); return; };
    return (n < 10) ? '0' + n : n;
  };

  ITOD.renderSelectOptions = function(times, selector, selectedTime) {
    // Generate options and append to select element

    var options = this.generateOptionsHTML(times, selectedTime),
        selectElem = document.querySelectorAll(selector)[0];
    for(var i = 0; i < options.length; i += 1) {
      selectElem.appendChild(options[i]);
    }

    return times;
  };

  ITOD.generateOptionsHTML = function(times, selectedTime) {
    var options = [],
        i = 0;
    for(; i < times.length; i += 1) {
      var time = times[i],
          option = document.createElement('option');
      option.value = time;
      option.text = time;
      option.selected = time === selectedTime;
      options.push(option);
    }

    return options;
  };
})();
