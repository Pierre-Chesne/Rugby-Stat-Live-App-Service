param rugbystatsapiName string
param appPlanId string
param DockerRegistryName string
param DockerRegistryUser string
param DockerRegistryPWD string
param DB_USER string
param DB_HOST string
param DB_PASS string
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
          name: 'DB_HOST'
          value: DB_HOST
        }
        {
          name: 'DB_USER'
          value: DB_USER
        }
        {
          name: 'DB_PASS'
          value: DB_PASS
        }
        {
          name: 'DB_MANE'
          value: DB_MANE
        }
      ]
      linuxFxVersion:'DOCKER|${ImageName}:${ImageVersion}'
      alwaysOn: true             
    }
    serverFarmId: appPlanId
  }  
}
