targetScope = 'subscription'

param RgSiteName string
param appPlanName string
param sku string
param rugbystatsapiName string
param DockerRegistryName string
param DockerRegistryUser string
param DockerRegistryPWD string
//param UserDB string
//param HostDB string
//param PwDB string
//param NameDB string
param DB_USER string
param DB_HOST string
param DB_PASS string
param DB_MANE string
param ImageName string
param ImageVersion string


resource RgSite 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: RgSiteName
  location: deployment().location
}

module appPlanDeploy 'AppPlan.bicep' = {
  name: 'appPlanDeploy'
  scope: RgSite
  params: {
    appPlanName: appPlanName 
    sku: sku
  }  
}

module siteAppApiDeploy 'siteAppApi.bicep' = {
  name: 'siteAppApiDeploy'
  scope: RgSite
  params: {
    rugbystatsapiName: rugbystatsapiName
    DockerRegistryName: DockerRegistryName
    DockerRegistryUser: DockerRegistryUser
    DockerRegistryPWD: DockerRegistryPWD
    DB_USER: DB_USER
    DB_HOST: DB_HOST
    DB_PASS: DB_PASS
    DB_MANE: DB_MANE
    ImageName: ImageName
    ImageVersion: ImageVersion      
    appPlanId: appPlanDeploy.outputs.appPlanId     
  }  
}
