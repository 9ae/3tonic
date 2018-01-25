var app = angular.module('tritonic.midi', []);

app.controller('MCtrl', ['$scope', 'Play', 'Theory', function($scope, Play, Theory){

    $scope.keys = Theory.keys;
    $scope.scaleStyles = Theory.scales;

    $scope.octave = 3;
    $scope.key = $scope.keys[0];
    $scope.scaleStyle = $scope.scaleStyles[0];
    $scope.scale = {
        'I': null,
        'ii': null,
        'iii': null,
        'IV': null,
        'V': null,
        'vi': null,
        'vii': null
    };

    $scope.chordStyle = {
        'I': 'M',
        'ii': 'M',
        'iii': 'M',
        'IV': 'M',
        'V': 'M',
        'vi': 'M',
        'vii': 'M'
    };

    $scope.scalesRaw = function(){
      return Theory.scalesForKey($scope.key, $scope.scaleStyle);
    }

    $scope.play = function(){
        Play.play([48, 52, 55], 127, 5);
    };

    $scope.onKeyScaleChange = function(){
        var scalesRaw = $scope.scalesRaw();
        $scope.scale['I'] = scalesRaw[0];
        $scope.scale['ii'] = scalesRaw[1];
        $scope.scale['iii'] = scalesRaw[2];
        $scope.scale['IV'] = scalesRaw[3];
        $scope.scale['V'] = scalesRaw[4];
        $scope.scale['vi'] = scalesRaw[5];
        $scope.scale['vii'] = scalesRaw[6];

    };

    $scope.tryChord = function(roman){
        var chord = Theory.chord($scope.scale[roman], $scope.chordStyle[roman]);
        chord = chord.map(function(e){ return e.midi(); });
        Play.play(chord, 127, 4);
    }

    Play.init("acoustic_grand_piano", function(){
      var socket = io.connect('localhost:3000');
      socket.on('connect', function(){ console.log('yo it works') });
      socket.on('serial', function(msg) {
        var int = parseInt(msg);
        if (int >=0 && int < 7) {
          var keys = Object.keys($scope.scale);
          var roman = keys[int];
          $scope.tryChord(roman);
        }
      });
    });
    $scope.onKeyScaleChange();

}]);
