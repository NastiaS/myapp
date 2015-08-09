angular.module('ngMyApp')

.directive('customTable', [ function () {

    return {
        restrict: 'A',
        scope: {
            tableData: '='
        },
        link: function (scope, elem, attrs) {

            //it will look in html and identify all header elements
            var $th = elem.find('th'); 

            var attrsArray = [];

            //grabs an array of headers and collects what corresponds to the 'table-param'
            $($th).each(function (th) {
            //th here is an index of the header
            // this corresponds to the tag <th table-param='NameOfTheHeader'>
            //$(this) gives the context of th

                //we push a name of the header into the array extracted from the html
                attrsArray.push($(this).attr('table-param'));
            });

            //it looks into the html and identifies where the body should be appended with rows
            var tbody = elem.find('tbody'); 
            //cmTableData comes from the context and is specified in the html. For each it treats it as ng-repeat
            scope.tableData.forEach(function (item) {
                //each item here is an object that api brings back

                //define rows and append them
                var tr = angular.element('<tr></tr>');
                tbody.append(tr);

                attrsArray.forEach(function(attribute) {
                    //attribute corresponds to the table-param

                    //append a cell with a value corresponding to the key (attribute): item[attribute]
                    // to each row
                    tr.append('<td>' + item[attribute] + '</td>');

                });
            });
        }
    };
}]);