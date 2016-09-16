({
    currentPageChange: function(component, event, helper) {
        var myEvent = $A.get("e.mohansundar:CurrentPageChange");
        myEvent.setParams({"currentPage": event.target.value});
        myEvent.fire();
    }
})
