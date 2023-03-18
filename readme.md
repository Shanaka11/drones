# REST API for Medication Carrying Drones

  

This is a RESTful API designed for handling the operations of medication carrying drones. The API provides the follwing features.  

- Register drones
- Load medication items
- Check loaded medication items for a given drone
- Check available drones for loading
- Check the drone battery level.

### Getting started

1. First clone the repositry to your local machine
2. Then run the following command
	```
	yarn install
	```
3. If you want run the development build then use the following command
	```
	yarn dev
	```
4. If you want to run the production build then use either one of the follwing commands
	```
	yarn run build-local
	```
	or
	```
	yarn build
	```
	First one will build a version including the node_modules and you will be able to run the application locally. The second one will create a build without the node_modules this is the ideal version if you are planning to do a deployment on a platform like AWS.

5. After the build is done you can go to the route folder and run
	```
	node server.ts
	```
6. The application is currently configured to only run in port 3000 of the localhost, therefore the root url will be
	```
	http://localhost:3000/api/v1
	```
7. Since we do not have a GUI yet, you can use a service like POSTMAN or Insomnia to test the api.
8. Please note that the current version of the api only have an inMemory database.

### Sample Requests and Responses

- Register Drone ( /drones )
	- Request (POST)
	```
	{
		"serialNumber": "ABC1234123",
	    "model": "Lightweight",
	    "weightLimit": 50,
	    "batteryCapacity": 40,
	    "state": "IDLE"
	}
	``` 
	- Response will be the added drone
	```
	{
		"serialNumber": "ABC1234123",
	    "model": "Lightweight",
	    "weightLimit": 50,
	    "batteryCapacity": 40,
	    "state": "IDLE"
	}
	``` 
- Load Medication Items ( /medications/load )
	- Request (POST)
	```
		{
			"serialNumber": "ABC123",
			"medicationCode": "ABCD_123"
		}
	```	
	- Response will be the loaded drone with its loaded medications
	```
	{
		"serialNumber": "ABC123",
		"model": "Heavyweight",
		"weightLimit": 400,
		"batteryCapacity": 90,
		"state": "IDLE",
		"loadedMedication": [
			{
				"name": "Item_1",
				"weight": 10,
				"code": "ABCD_123",
				"image": "https://example.com/image_1.jpg",
				"drone": "ABC123"
			},
			{
				"name": "Item_2",
				"weight": 20,
				"code": "EFGH_456",
				"image": "https://example.com/image_2.jpg",
				"drone": "ABC123"
			}
		]
	}
	```
- Check loaded medications for a given drone (GET) ( /drones/load/[droneSerialNumber] )
	- Response will be the drone with the loaded medication
	```
	{
		"serialNumber": "ABC123",
		"model": "Heavyweight",
		"weightLimit": 400,
		"batteryCapacity": 90,
		"state": "IDLE",
		"loadedMedication": [
			{
				"name": "Item_1",
				"weight": 10,
				"code": "ABCD_123",
				"image": "https://example.com/image_1.jpg",
				"drone": "ABC123"
			},
			{
				"name": "Item_2",
				"weight": 20,
				"code": "EFGH_456",
				"image": "https://example.com/image_2.jpg",
				"drone": "ABC123"
			}
		]
	}
	```
- Check available drones for loading (GET) (/drones/available)
	- Response will be a list of all available drones
	```
	{
		"drones": [
			{
				"serialNumber": "ABC123",
				"model": "Heavyweight",
				"weightLimit": 400,
				"batteryCapacity": 90,
				"state": "IDLE"
			},
			{
				"serialNumber": "XYZ789",
				"model": "Cruiserweight",
				"weightLimit": 250,
				"batteryCapacity": 80,
				"state": "LOADING"
			}
		]
	}
	```
- Check drone battery leval (GET) (/drones/battery/[droneSerialNumber])
	- Response will be the battery level of the given drone
	```
	{
		"batteryLevel": 90
	}
	```