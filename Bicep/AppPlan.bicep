param appPlanName string
param sku string

resource appPlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: appPlanName
  location: resourceGroup().location
  kind: 'linux'
  sku: {
    name: sku
  }
  properties: {
    reserved: true
  }
}

output appPlanId string = appPlan.id
