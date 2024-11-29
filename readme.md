## Technologies Used

1. Node.js: Backend runtime.
2. Express: Web framework for creating the API.
3. UUID: For generating unique receipt IDs.
4. Dotenv: For environment variable management.
5. Docker: To containerize the application.

## Setup and Installation

1. Clone the repository:
  `git clone https://github.com/yourusername/receipt-processor.git`
  `cd receipt-processor`

2.	Install dependencies:
`npm install`

3.	Create a .env file for configuration:
  `PORT=3000`

4.	Run the application:
  `npm start`

### Run Using Docker

1.	Build the Docker image:
  `docker build -t receipt-processor .`

2. Run the container:
  `docker run -p 3000:3000 receipt-processor`

## Endpoints

1. Process Receipt

Method: POST
Path: /receipts/process

Request Payload:

  `{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    { "shortDescription": "Mountain Dew 12PK", "price": "6.49" },
    { "shortDescription": "Emils Cheese Pizza", "price": "12.25" }
  ],
  "total": "18.74"
}`

Response:
`{
  "id": "87151d56-c2a0-4713-9ef4-3e4a0ed71be6"
}`

2. Get Points
Method: GET
Path: /receipts/{id}/points

Response:
`{
  "points": 28
}`


## Testing the Endpoints

Use curl or Postman to test the API:

Example: Process Receipt

`curl -X POST http://localhost:3000/receipts/process \
-H "Content-Type: application/json" \
-d '{
  "retailer": "Target",
  "purchaseDate": "2022-01-01",
  "purchaseTime": "13:01",
  "items": [
    { "shortDescription": "Mountain Dew 12PK", "price": "6.49" },
    { "shortDescription": "Emils Cheese Pizza", "price": "12.25" }
  ],
  "total": "18.74"
}'`

Example: Get Points
`curl http://localhost:3000/receipts/<receipt-id>/points`
