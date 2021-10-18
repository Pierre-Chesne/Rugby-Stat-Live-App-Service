param rugbystatsapiName string
param appPlanId string
param DockerRegistryName string
param DockerRegistryUser string
param DockerRegistryPWD string
param UserDB string
param HostDB string
param PwDB string
param NameDB string
param ImageName string
param ImageVersion string



resource siteAppAPI 'Microsoft.Web/sites@2020-06-01' = {
  name: rugbystatsapiName
  location: resourceGroup().location
  properties: {
    siteConfig: {
      appSettings: [
        {
          name: 'DOCKER_REGISTRY_SERVER_URL'
          value: DockerRegistryName
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_USERNAME'
          value: DockerRegistryUser
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_PASSWORD'
          value: DockerRegistryPWD
        }
        {
          name: 'WEBSITES_ENABLE_APP_SERVICE_STORAGE'
          value: 'false'
        }
        {
          name: 'HOST'
          value: HostDB
        }
        {
          name: 'USER'
          value: UserDB
        }
        {
          name: 'PASSWORD'
          value: PwDB
        }
        {
          name: 'DB'
          value: NameDB
        }
      ]
      linuxFxVersion:'DOCKER|${ImageName}:${ImageVersion}'             
    }
    serverFarmId: appPlanId
  }  
}
