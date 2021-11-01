param rugbystatsapiName string
param appPlanId string
param DockerRegistryName string
param DockerRegistryUser string
param DockerRegistryPWD string
//param UserDB string
param DB_USER string
//param HostDB string
param DB_HOST string
//param PwDB string
param DB_PASS string
//param NameDB string
param DB_MANE string
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
          value: DB_HOST
        }
        {
          name: 'USER'
          value: DB_USER
        }
        {
          name: 'PASSWORD'
          value: DB_PASS
        }
        {
          name: 'DB'
          value: DB_MANE
        }
      ]
      linuxFxVersion:'DOCKER|${ImageName}:${ImageVersion}'             
    }
    serverFarmId: appPlanId
  }  
}
