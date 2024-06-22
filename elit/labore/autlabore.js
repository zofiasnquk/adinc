const faceapi = require('face-api.js');

// Define the URL for the models
const MODEL_URL = "/weights";

// Load the face detection models
await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);

// Load the face landmark models
await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);

// Load the face recognition models
await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);

// Perform additional actions after loading the models
// ...
