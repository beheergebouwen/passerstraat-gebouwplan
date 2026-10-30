// Passerstraat 5-9 Gebouwplan – instellingen (zie HANDLEIDING.md)
window.LK_CONFIG = {
  tenantId: "a3db1c8a-cea2-419f-8f9b-3726382030ab",      // zelfde Microsoft 365-tenant als Lakenhuis
  clientId: "52337422-ab05-42d3-a53a-ad3e043cef7e",      // zelfde app-registratie; voeg de nieuwe website-URL toe als Redirect URI
  siteHostname: "overmolen.sharepoint.com",
  sitePath: "/sites/OVMGebouwplannen",                    // zelfde SharePoint-site, eigen lijsten (PS_...)
  planFolder: "Passerstraat/Plannen",                    // map in de documentbibliotheek van die site
  lists: {
    rooms: "PS_Ruimten", doors: "PS_Deuren", meters: "PS_IstaMeters",
    orgs: "PS_Organisaties", settings: "PS_Instellingen", occ: "PS_Bezetting", costs: "PS_Kosten",
    vo: "PS_Voorschotten", imp: "PS_Imports"
  },
  noIsta: true,                                          // geen Ista-meters in dit gebouw
  importFolder: "Passerstraat/Imports"                   // map voor originele importbestanden (Exact)
};
