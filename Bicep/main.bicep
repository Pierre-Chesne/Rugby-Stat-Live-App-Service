targetScope = 'subscription'

param RgSiteName string
param appPlanName string
param sku string
param rugbystatsapiName string
param DockerRegistryName string
param DockerRegistryUser string
param DockerRegistryPWD string
param UserDB string
param HostDB string
param PwDB string
param NameDB string
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
    UserDB: UserDB
    HostDB: HostDB
    PwDB: PwDB
    NameDB: NameDB
    ImageName: ImageName
    ImageVersion: ImageVersion      
    appPlanId: appPlanDeploy.outputs.appPlanId     
  }  
}
