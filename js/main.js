/*
var mcDataBtn = document.getElementById("load-MDdata");
var mcDataContainer = document.getElementById("load-MDdata-Container");

if(mcDataBtn)
{
    mcDataBtn.addEventListener("click", function()
    {
        var dataRequest = new XMLHttpRequest();
        dataRequest.open('GET', 'https://app-integration-prod-api.azurewebsites.net/feature/rates')
        dataRequest.onload = function() 
        {
            if (dataRequest.status >= 200 && dataRequest.status < 400)
            {
                var mdData = JSON.parse(dataRequest.responseText);
                console.log(mdData);
                //createHTML(mcData);
            }
            else
            {
                console.log("server connection PASS, data retrieval FAIL")
            }

        };
        dataRequest.onerror = function()
        {
            console.log("server connection FAIL")
        };
        dataRequest.send();
    });
}

//function createHTML(responseData)
//{
    //var indexHTMLstring = '';
//
    //for (i = 0; i< responseData.length; i++)
    //{
        //indexHTMLstring += <h2></h2>
    //}
//}
*/

jquery(document).ready(function($) {
  $.ajax({
  url: "https://app-integration-prod-api.azurewebsites.net/feature/rating",
  method: "POST",
  timeout: 0,
  headers: {
    "Cookie": "ARRAffinity=26c8b38cf606bdf50d866f13bc76b0c182868402f035fb1228acda2730ae06a7; ARRAffinitySameSite=26c8b38cf606bdf50d866f13bc76b0c182868402f035fb1228acda2730ae06a7",
    "Content-Type": "application/json"
  },
  data: JSON.stringify({
    "specVersion": "1.0",
    "customerName": "TestCustomer",
    "customerId": "",
    "customerEmail": "disparch@connectcarriers.com",
    "locationId": "2878673",
    "data": {
      "preferredCarriers": "RLCA,ODFL,UPGF,AACT",
      "accessorialServices": "LGDEL",
      "shipment": {
        "shipmentId": "shipment Id",
        "shipmentType": "LTL",
        "currencyType": "USD",
        "stops": [
          {
            "stopNumber": 1,
            "stopType": "PICKUP",
            "name": "Connect Carriers Corp",
            "addressLine1": "9600 S SUNNYLANE RD",
            "addressLine2": "A",
            "city": "Oklahoma City",
            "stateProvince": "OK",
            "postalCode": "73160",
            "country": {
              "alpha2Code": "US",
              "name": "United States"
            },
            "schedule": {
              "date": "2024-01-12",
              "start_time": "",
              "end_time": ""
            },
            "isScheduleRequired": false,
            "note": ""
          },
          {
            "stopNumber": 2,
            "stopType": "DROP",
            "name": "",
            "addressLine1": "123 main st",
            "addressLine2": "",
            "city": "Columbia",
            "stateProvince": "MD",
            "postalCode": "21045",
            "country": {
              "alpha2Code": "US",
              "name": "United States"
            },
            "schedule": {
              "date": "2024-01-12",
              "start_time": "",
              "end_time": ""
            },
            "isScheduleRequired": false,
            "note": ""
          }
        ],
        "shipmentLineItems": [
          {
            "lineItemId": "1",
            "name": "",
            "class": "60",
            "description": "Standard pallet products",
            "countryOfManufacture": "United States",
            "associatedPickupStopNumber": 1,
            "associatedDropStopNumber": 2,
            "nmfcItemCode": "",
            "nmfcSubCode": "",
            "commodityType": "",
            "harmonizedCode": "",
            "isHazmat": false,
            "hazmat": {
              "identification_number": "",
              "packingGroupId": "",
              "classId": "",
              "emergencyContact": {
                "name": "",
                "phone": "",
                "email": ""
              }
            },
            "unitValue": 0,
            "unitValueCurrency": "USD",
            "dimensions": {
              "height": 48,
              "heightUOM": "INCHES",
              "length": 48,
              "lengthUOM": "INCHES",
              "width": 45,
              "widthUOM": "INCHES",
              "weight": 980,
              "weightUOM": "LB",
              "stackable": false,
              "quantity": 2,
              "packageType": "PLT"
            }
          },
          {
            "lineItemId": "2",
            "name": "",
            "class": "60",
            "description": "Overweight pallet products",
            "countryOfManufacture": "United States",
            "associatedPickupStopNumber": 1,
            "associatedDropStopNumber": 2,
            "nmfcItemCode": "",
            "nmfcSubCode": "",
            "commodityType": "",
            "harmonizedCode": "",
            "isHazmat": false,
            "hazmat": {
              "identification_number": "",
              "packingGroupId": "",
              "classId": "",
              "emergencyContact": {
                "name": "",
                "phone": "",
                "email": ""
              }
            },
            "unitValue": 0,
            "unitValueCurrency": "USD",
            "dimensions": {
              "height": 96,
              "heightUOM": "INCHES",
              "length": 96,
              "lengthUOM": "INCHES",
              "width": 44,
              "widthUOM": "INCHES",
              "weight": 97,
              "weightUOM": "LB",
              "stackable": false,
              "quantity": 1,
              "packageType": "PLT"
            }
          }
        ]
      }
    }
  }),
});

$.ajax(settings).done(function (response) { console.log(response); });})