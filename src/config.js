const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-12",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://dvt2mgwrn0.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_LBxaXZWMX",
      APP_CLIENT_ID: "hmci5ddrgio99igf39j2hqutr",
      IDENTITY_POOL_ID: "us-east-1:5e30bf1a-e4b2-4256-a130-fff78e90b0f4",
    },
    MAX_ATTACHMENT_SIZE: 5000000,
  };
  
  export default config;
  
