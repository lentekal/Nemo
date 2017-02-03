'use strict';

/**
 * Created by Kalle on 1-2-2017.
 */
var ProvinceCtrl = function ProvinceCtrl($scope) {
    var apiKey = "gw9sz8omxo";
    var receiveApiData = function receiveApiData($scope, $http) {
        $http({
            method: 'GET',
            url: 'http://www.nemokennislink.nl/api/activiteiten.json?sleutel=' + apiKey
        }).then(function () {
            console.log("Done");
        });
    };
    receiveApiData();
};

ProvinceCtrl();
console.log("loaded");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIlByb3ZpbmNlQ3RybCIsIiRzY29wZSIsImFwaUtleSIsInJlY2VpdmVBcGlEYXRhIiwiJGh0dHAiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7O0FBR0EsSUFBSUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLE1BQUQsRUFBWTtBQUMzQixRQUFJQyxTQUFTLFlBQWI7QUFDQSxRQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNGLE1BQUQsRUFBU0csS0FBVCxFQUFtQjtBQUNwQ0EsY0FBTTtBQUNGQyxvQkFBUSxLQUROO0FBRUZDLGlCQUFLLGdFQUFnRUo7QUFGbkUsU0FBTixFQUdHSyxJQUhILENBR1EsWUFBWTtBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0gsU0FMRDtBQU1ILEtBUEQ7QUFRQU47QUFDSCxDQVhEOztBQWFBSDtBQUNBUSxRQUFRQyxHQUFSLENBQVksUUFBWiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgS2FsbGUgb24gMS0yLTIwMTcuXHJcbiAqL1xyXG5sZXQgUHJvdmluY2VDdHJsID0gKCRzY29wZSkgPT4ge1xyXG4gICAgbGV0IGFwaUtleSA9IFwiZ3c5c3o4b214b1wiO1xyXG4gICAgbGV0IHJlY2VpdmVBcGlEYXRhID0gKCRzY29wZSwgJGh0dHApID0+IHtcclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly93d3cubmVtb2tlbm5pc2xpbmsubmwvYXBpL2FjdGl2aXRlaXRlbi5qc29uP3NsZXV0ZWw9JyArIGFwaUtleVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICByZWNlaXZlQXBpRGF0YSgpO1xyXG59O1xyXG5cclxuUHJvdmluY2VDdHJsKCk7XHJcbmNvbnNvbGUubG9nKFwibG9hZGVkXCIpOyJdfQ==
