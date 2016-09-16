({
    locationChange : function(component, event, helper) {
        // gets the new value of the hashtag available in the event object
        var token = event.getParam("token");

        // parses the hashtag to extract the contact id
        if (token.indexOf('contact/') === 0) {
            var contactId = token.substr(token.indexOf('/') + 1);

            // invokes the findById() method in the Apex controller
            var action = component.get("c.findById");
            action.setParams({
              "contactId": contactId
            });

            // When the asynchronous call returns, it assigns the contact returned by
            //  findById() to the component's contact attribute.
            action.setCallback(this, function(data) {
                component.set("v.contact", data.getReturnValue());
            });
            $A.enqueueAction(action);
        }
    }
})
