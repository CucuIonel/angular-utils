angular.module('app.filters', [])
.filter('reverse', function(){
    return function(text){
        return text.split('').reverse().join('');
    };
});