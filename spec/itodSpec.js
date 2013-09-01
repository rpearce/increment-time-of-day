describe('itod suite', function() {
  var opts;
  var timesArray;

  beforeEach(function() {
    opts = {};
  });

  it('should have ITOD defined', function() {
    expect(ITOD).toBeDefined();
  });

  describe('The getTimes method', function() {
    it('should return an array of times of day every 15 minutes with defaults prepended', function() {
      opts = {
        defaults: ['Any', 'Early (4a-8a)', 'Morning (8a-12p)', 'Afternoon (12p-5p)', 'Evening (5p-9p)', 'Night (9p-12a)'],
        incrementMinutesBy: 15
      };
      timesArray = ["Any", "Early (4a-8a)", "Morning (8a-12p)", "Afternoon (12p-5p)", "Evening (5p-9p)", "Night (9p-12a)", "12:00am", "12:15am", "12:30am", "12:45am", "1:00am", "1:15am", "1:30am", "1:45am", "2:00am", "2:15am", "2:30am", "2:45am", "3:00am", "3:15am", "3:30am", "3:45am", "4:00am", "4:15am", "4:30am", "4:45am", "5:00am", "5:15am", "5:30am", "5:45am", "6:00am", "6:15am", "6:30am", "6:45am", "7:00am", "7:15am", "7:30am", "7:45am", "8:00am", "8:15am", "8:30am", "8:45am", "9:00am", "9:15am", "9:30am", "9:45am", "10:00am", "10:15am", "10:30am", "10:45am", "11:00am", "11:15am", "11:30am", "11:45am", "12:00pm", "12:15pm", "12:30pm", "12:45pm", "1:00pm", "1:15pm", "1:30pm", "1:45pm", "2:00pm", "2:15pm", "2:30pm", "2:45pm", "3:00pm", "3:15pm", "3:30pm", "3:45pm", "4:00pm", "4:15pm", "4:30pm", "4:45pm", "5:00pm", "5:15pm", "5:30pm", "5:45pm", "6:00pm", "6:15pm", "6:30pm", "6:45pm", "7:00pm", "7:15pm", "7:30pm", "7:45pm", "8:00pm", "8:15pm", "8:30pm", "8:45pm", "9:00pm", "9:15pm", "9:30pm", "9:45pm", "10:00pm", "10:15pm", "10:30pm", "10:45pm", "11:00pm", "11:15pm", "11:30pm", "11:45pm"];
      expect(ITOD.getTimes(opts)).toEqual(timesArray);
    });

    it('should raise an Error if an object is not passed in', function() {
      expect(function() { ITOD.getTimes(); }).toThrow(new Error('Options object argument must be passed'));
    });
  });

  describe('The setDefaultTimes method', function() {
    it('should only accept an argument of type Array', function() {
      opts = { defaults: [] };
      expect(ITOD.setDefaultTimes(opts.defaults)).toEqual([]);
    });

    it('should NOT accept an argument of type String', function() {
      opts = { defaults: '' };
      expect(function() { ITOD.setDefaultTimes(opts.defaults); }).toThrow(new Error('defaults must be of type Array'));
    });
  });

  describe('The setMinuteIncrement method', function() {
    it('should only accept an argument of type Number', function() {
      opts = { incrementMinutesBy: 5 };
      expect(ITOD.setMinuteIncrement(opts.incrementMinutesBy)).toBe(5);
    });

    it('should throw an error if argument is of type String', function() {
      opts = { incrementMinutesBy: '' };
      expect(function() { ITOD.setMinuteIncrement(opts.incrementMinutesBy); })
        .toThrow(new Error('incrementMinutesBy must be a number and must be less than 60'));
    });
  });

  describe('The setSelectedTime method', function() {
    it('should return undefined if selectedTime argument is undefined', function() {
      opts = { selector: '.select' };
      expect(ITOD.setSelectedTime(opts.selectedTime)).toBeUndefined();
    });

    it('should throw an error if selectedTime argument is not a string', function() {
      opts = { selector: '.select', selectedTime: [] };
      expect(function() { ITOD.setSelectedTime(opts.selectedTime); })
        .toThrow(new Error('selectedTime must be a string and the "selector" attribute must be defined'));
    });

    it('should throw an error if selectedTime is a string but selector is undefined', function() {
      opts = { selectedTime: '7:30am', incrementMinutesBy: 30 };
      expect(function() { ITOD.setSelectedTime(opts.selectedTime); })
        .toThrow(new Error('selectedTime must be a string and the "selector" attribute must be defined'));
    });

    it('should throw an error if selectedTime is a string but selector is an empty string', function() {
      opts = { selector: '', selectedTime: '7:30am', incrementMinutesBy: 30 };
      expect(function() { ITOD.setSelectedTime(opts.selectedTime); })
        .toThrow(new Error('selectedTime must be a string and the "selector" attribute must be defined'));
    });
  });

  describe('The padNumber method', function() {
    it('should prepend a 0 to a single digit number', function() {
      randomSingleDigit = Math.floor(Math.random() * 10); // Needs to be [0-9]
      expect(ITOD.padNumber(randomSingleDigit)).toBe('0' + randomSingleDigit);
    });

    it('should throw an error if the argument is not of type number', function() {
      var n = '30';
      expect(function() { ITOD.padNumber(n); })
        .toThrow(new Error('padNumber argument must be of type "number"'));
    });
  });

});