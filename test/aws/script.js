function login(email, password) {
  var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
  var authenticationData = {
      Username : email,
      Password : password
  };
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  var poolData = {
      UserPoolId : 'ap-northeast-2_x10nUFWUr', // Your user pool id here
      ClientId : '4tvfm1bp4hj9gruqsitfpccloq' // Your client id here
  };
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  var userData = {
      Username : email,
      Pool : userPool
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
          console.log('access token + ' + result.getAccessToken().getJwtToken());

          //POTENTIAL: Region needs to be set if not already set previously elsewhere.
          AWS.config.region = 'us-east-1';

          AWS.config.credentials = new AWS.CognitoIdentityCredentials({
              IdentityPoolId : 'us-east-1:bc67be29-8573-4677-9ae6-8ce899a3c5b8', // your identity pool id here
              Logins : {
                  // Change the key below according to the specific region your user pool is in.
                  'cognito-idp.us-east-1.amazonaws.com/us-east-1_6Qhfv1X4U' : result.getIdToken().getJwtToken()
              }
          });

          //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
          AWS.config.credentials.refresh((error) => {
              if (error) {
                  alert(error);
              } else {
                  // Instantiate aws sdk service objects now that the credentials have been updated.
                  // example: var s3 = new AWS.S3();
                  alert('Successfully logged!');
              }
          });
      },

      onFailure: function(err) {
          alert(err);
      },

  });
}

$('button').on('click', function() {
  var email = $('input[type=text]').val()
  var password = $('input[type=password]').val()
  login(email, password)
})