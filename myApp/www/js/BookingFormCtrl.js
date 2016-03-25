angular.module('starter.controllers')
  .controller('BookingFormCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];

    $scope.fromTime = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
      step: 15,  //Optional
      format: 24,  //Optional
      titleLabel: 'From',  //Optional
      setLabel: 'Set',  //Optional
      closeLabel: 'Close',  //Optional
      setButtonType: 'button-balanced',  //Optional
      closeButtonType: 'button-stable',  //Optional
      callback: function (val) {    //Mandatory
        timePickerCallback(val);
      }
    };
    $scope.toTime = {
      inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
      step: 15,  //Optional
      format: 24,  //Optional
      titleLabel: 'To',  //Optional
      setLabel: 'Set',  //Optional
      closeLabel: 'Close',  //Optional
      setButtonType: 'button-balanced',  //Optional
      closeButtonType: 'button-stable',  //Optional
      callback: function (val) {    //Mandatory
        timePickerCallback(val);
      }
    };

    $scope.currentDate = new Date();
    $scope.minDate = new Date(2105, 6, 1);
    $scope.maxDate = new Date(2015, 6, 31);

    $scope.datePickerCallback = function (val) {
      if (!val) {
        console.log('Date not selected');
      } else {
        console.log('Selected date is : ', val);
      }
    };

    function timePickerCallback(val) {
      if (typeof (val) === 'undefined') {
        console.log('Time not selected');
      } else {
        var selectedTime = new Date(val * 1000);
        console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
      }
    }

  });


