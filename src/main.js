/**
 * Created by Kalle on 1-2-2017.
 */
let ProvinceCtrl = ($scope) => {
    let apiKey = "gw9sz8omxo";
    let receiveApiData = ($scope, $http) => {
        $http({
            method: 'GET',
            url: 'http://www.nemokennislink.nl/api/activiteiten.json?sleutel=' + apiKey
        }).then(function () {
            console.log("Done");
        })
    };
    receiveApiData();
};

ProvinceCtrl();
console.log("loaded");