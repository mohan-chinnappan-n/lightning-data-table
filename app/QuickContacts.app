<aura:application >


   <!--

     Here bootstrap-for-salesforce stylesheet - Salesforce Foundation Bootstrap  is used
     - http://developer.salesforcefoundation.org/bootstrap-sf1/

     Recommended: use SLDS stylesheets (https://www.lightningdesignsystem.com/downloads/)
   -->
    <link href="/resource/bootstrap/" rel="stylesheet"/>

    <div class="navbar navbar-default navbar-static-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a href="#" class="navbar-brand"> Lightning Contacts</a>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <mohansundar:SearchBar/>
                <mohansundar:ContactList/>
            </div>


            <div class="col-sm-3">
                <mohansundar:ContactDetails/>

            </div>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <span class='badge-info'>Page Size</span>  <mohansundar:PageSize/>
            </div>
            <div class="col-sm-2">  <span class='badge-info'>Choose Page</span>
                <mohansundar:Pager/>
            </div>
        </div>

    </div>

</aura:application>
