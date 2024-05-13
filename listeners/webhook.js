/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookMercadoPago = {
    label: 'Catch HTTP skeleton events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/mercadopago',
        }
    },
    callback: function(event) {
        sys.logs.info('Received MercadoPago webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('mercadopago:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
