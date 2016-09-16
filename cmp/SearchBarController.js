({
  searchKeyChange: function(component, event, helper) {

    // gets an instance of the SearchKeyChange event
    var myEvent = $A.get("e.mohansundar:SearchKeyChange");
    //sets the event's searchKey parameter to the input field's new value
    myEvent.setParams({
      "searchKey": event.target.value
    });

    //fires the event so that registered listeners can catch it
    myEvent.fire();
  }
})
