var AWS = require('aws-sdk');
var awsConfig = require('aws-config');
var http = require("http");
AWS.config = awsConfig({ accessKeyId: 'AKIAJ7VTERRNQWYSGBBQ', secretAccessKey: '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', region: 'us-east-1' });
var rekognition = new AWS.Rekognition();
var params = {
    Image: {
        S3Object: {
            Bucket: "usaleesh",
            Name: "1500950624.997015.jpg"
        }
    },
    Attributes: [
        "ALL"
    ]
};
rekognition.detectFaces(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
    http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        var JsonData = JSON.stringify(data);
        response.end(JsonData);
    }).listen(8081);
});