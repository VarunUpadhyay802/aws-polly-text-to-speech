# Amazon Polly Text to Speech

This project demonstrates how to use the Amazon Polly service to convert text to speech (TTS) in Node.js.

## Prerequisites

Before running this project, you'll need:

- Node.js installed on your machine.
- An AWS account with access to the Amazon Polly service.

## Installation

1. Clone this repository to your local machine:


2. Navigate to the project directory:


3. Install dependencies using npm:


## Configuration

Ensure you have a `config.json` file in the project directory with your AWS credentials. For example:

```json
{
  "accessKeyId": "YOUR_ACCESS_KEY_ID",
  "secretAccessKey": "YOUR_SECRET_ACCESS_KEY",
  "region": "us-east-1"
}
node index.js
