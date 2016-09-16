({
  // TODO: move the reusable functions to helper
  //
  doInit: function(component, event, helper) {
    //findAll() method in the component's server-side
    var action = component.get("c.findAll");
    console.log(component.get('v.pageSize'))
    action.setParams({
      "lmt": '' + component.get('v.pageSize'),
      "currentPage": '' + component.get('v.currentPage')

    });
    //call to the server's findAll() method is asynchronous, you then register a callback function 
    // that is executed when the call returns
    action.setCallback(this, function(data) {
      component.set("v.contacts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    // That queue is an optimization feature of Lightning.

    $A.enqueueAction(action);
  },


  currentPageChange: function(component, event, helper) {
    var currentPage = event.getParam("currentPage")
    component.set('v.currentPage', currentPage);
    //findAll() method in the component's server-side
    var action = component.get("c.findAll");
    console.log(component.get('v.pageSize'))
    action.setParams({
      "lmt": '' + component.get('v.pageSize'),
      "currentPage": '' + currentPage


    });
    //call to the server's findAll() method is asynchronous, you then register a callback function
    // that is executed when the call returns
    action.setCallback(this, function(data) {
      component.set("v.contacts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    // That queue is an optimization feature of Lightning.

    $A.enqueueAction(action);
  },
  pageSizeChange: function(component, event, helper) {
    var pageSize = event.getParam("pageSize")
    component.set('v.pageSize', pageSize);
    //findAll() method in the component's server-side
    var action = component.get("c.findAll");
    console.log(component.get('v.pageSize'))
    action.setParams({
      "lmt": '' + pageSize,
      "currentPage": '' + component.get('v.currentPage')


    });
    //call to the server's findAll() method is asynchronous, you then register a callback function
    // that is executed when the call returns
    action.setCallback(this, function(data) {
      component.set("v.contacts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    // That queue is an optimization feature of Lightning.

    $A.enqueueAction(action);
  },

  searchKeyChange: function(component, event) {

    // get the value of the new searchKey available in the event object
    var searchKey = event.getParam("searchKey");

    //invoke the findByName() method in the Apex controller
    var action = component.get("c.findByName");
    action.setParams({
      "lmt": '' + component.get('v.pageSize'),
      "currentPage": '' + component.get('v.currentPage'),
      "searchKey": searchKey
    });

    /*
     * When the asynchronous call returns, you assign the
     *  list of contacts returned by findByName() to the component's
     *  contacts attribute.
     */
    action.setCallback(this, function(data) {
      //console.log(data.getReturnValue());
      component.set("v.contacts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    $A.enqueueAction(action);
  },


  sortColumn: function(component, event) {
    //console.log(event.target.id);
    //console.log(event.target.dataset.dir );
    var action = component.get("c.sortByField");
    action.setParams({
      "lmt": '' + component.get('v.pageSize'),
      "currentPage": '' + component.get('v.currentPage'),
      "column": event.target.id,
      "dir": event.target.dataset.dir
    });

    action.setCallback(this, function(data) {
      //console.log(data.getReturnValue());
      component.set("v.contacts", data.getReturnValue());
    });

    // adds the call to the queue of asynchronous server calls.
    // That queue is an optimization feature of Lightning.

    $A.enqueueAction(action);

    if (event.target.dataset.dir == 'asc') event.target.dataset.dir = 'desc';
    else event.target.dataset.dir = 'asc';
  }
})
