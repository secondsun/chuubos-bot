# chuubos-api

This is the restful services for the chuubos-bot project. It is a source of truth for the bot and console and helps organize resources.

# development 

`./mvnw quarkus:dev` boots the application in development mode

# deployment

`./mvnw clean package -Pnative -Dquarkus.container-image.build=true` will build the container. After that it is simple enough to deploy to openshift

# endpoints

None yet (other than hello world)
