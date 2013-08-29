;(function() {
  /**
    * Call the ITOD.getTimes() method,
    * passing the
    *   - default options you want included at the beginning of the generated array,
    *   - an amount to increment each hour by,
    *   - an optional <select> selector to append <option> tags to
    *   - the time you wish to be selected, given you provide a selector attribute
    *
    * Attributes:
    *  - defaults           : Array  => required
    *  - incrementMinutesBy : Number => required, conditions : < 60
    *  - selector           : String => optional, conditions : must be valid DOM selector
    *  - selectedtime       : String => optional, conditions : depends on selector attribute and must be valid time
    */

  var opts = {
    defaults: ['Any', 'Early (4a-8a)', 'Morning (8a-12p)', 'Afternoon (12p-5p)', 'Evening (5p-9p)', 'Night (9p-12a)'],
    incrementMinutesBy: 15,
    selector: '.times',
    selectedTime: '7:30am'
  }

  var times = ITOD.getTimes(opts);

  console.log(times);

  return this;
})();
