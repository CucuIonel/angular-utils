angular.module('app.directives', [])
.directive('editme', function(){
    var editTemplate = '<input ng-show="isEditMode" ng-dblclick="switchToPreview()" type="text" ng-model="textContent" class="edit-template form-control">';
    var previewTemplate = '<div ng-hide="isEditMode" ng-dblclick="switchToEdit()">{{textContent}}</div>';
    return {
        restrict: 'E',
        compile: function(tElement, tAttrs, transclude){
            var textContent = tElement.html();
            
            tElement.html(editTemplate);
            tElement.append(previewTemplate);
            
            return function(scope, element, attrs){
                scope.isEditMode = false;
                scope.textContent = textContent;
                
                var editElement = element.find('input');
                editElement.bind('keydown', function(event){
                    if(event.which == 13){
                        scope.$apply(function() {
                            scope.switchToPreview();
                        });    
                    }
                    
                });
                
                scope.switchToPreview = function(){
                    scope.isEditMode = false;
                };
                 scope.switchToEdit = function(){
                    scope.isEditMode = true;
                };
            };
        }
        
    };
});