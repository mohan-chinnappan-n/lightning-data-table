({
  pageSizeChange: function(component, event, helper) {
    var myEvent = $A.get("e.mohansundar:PageSizeChange");
    myEvent.setParams({
      "pageSize": event.target.value
    });
    myEvent.fire();
  }
})
