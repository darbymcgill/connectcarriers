var myHeaders = new Headers();
myHeaders.append("Cookie", "ARRAffinity=26c8b38cf606bdf50d866f13bc76b0c182868402f035fb1228acda2730ae06a7; ARRAffinitySameSite=26c8b38cf606bdf50d866f13bc76b0c182868402f035fb1228acda2730ae06a7");

var raw = "";

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://app-integration-prod-api.azurewebsites.net/feature/rates?customerEmail=warren@connectcarriers.com&locationid=321233&preferredCarriers=ODFL,SAIS,AACT,ABFS&stops[0].stopNumber=1&stops[0].stopType=PICKUP&stops[0].name=Connect Carriers&stops[0].addressLine1=9600 S. Sunnylane Road&stops[0].city=Oklahoma City&stops[0].stateProvince=Oklahoma&stops[0].postalCode=73159&stops[0].country[0].alphacode=US&stops[0].country[1].name=United States&stops[1].stopnumber=2&stops[1].stopType=DROP&stops[1].name=Hobby Lobby&stops[1].addressLine1=14858 Preston Road&stops[1].city=Dallas&stops[1].stateProvince=Texas&stops[1].postalCode=75254&stops[1].country[0].alpha2code=US&stops[1].country[0].name=United States&shipmentLineItems[0].lineItemId=1&shipmentLineItems[0].name=&shipmentLineItems[0].class=60&shipmentLineItems[0].description=&shipmentLineItems[0].countryOfManufacture=United States&shipmentLineItems[0].associatedPickUpStopNumber=1&shipmentLineItems[0].associatedDropStopNumber=2", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));