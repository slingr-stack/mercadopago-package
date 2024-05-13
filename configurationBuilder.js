/****************************************************
 Configuration builder

 The configuration object should be built to configure the package dependencies

 ****************************************************/

let configurationBuilder = function (config) {
    config.oauth = {
        id: 'installationInfo-MercadoPago-User-'+sys.context.getCurrentUserRecord().id(),
        authUrl: "https://auth.mercadopago.com/authorization",
        accessTokenUrl: "https://api.mercadopago.com/oauth/token",
        clientId: config.clientId,
        clientSecret: config.clientSecret,
        oauthCallback: config.oauthCallback,
        scope: (config.refreshToken || config.refreshToken === "true") ? "offline_access" : ""
    }
    return config;
}
