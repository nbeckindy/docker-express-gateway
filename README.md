# docker-express-gateway

From the docker-express-gateway directory, run `docker-compose up`.

The resulting gateway will be on localhost port 8080. Right now, it just proxies a couple endpoints on [httpbin](https://httpbin.org). 

To test these endpoints, run `curl http://localhost:8080/ip` or `curl http://localhost:8080/headers`.

The redis database stores data for administration, such as users or credentials. To add a user, run `eg users create` and follow the prompts.

To see a list of users you've created, run `curl http://localhost:8080/admin/users`.

The redis container is set up to be persistant, so if you `docker-compose down` and `up` again, the users should remain.

A few links:
* [Express-Gateway API Endpoint Configuration](https://www.express-gateway.io/docs/configuration/gateway.config.yml/apiEndpoints/)
* [Express-Gateway Proxy Policy](https://www.express-gateway.io/docs/policies/)
* [Official Express-Gateway Docker Image](https://hub.docker.com/_/express-gateway)
* [Official Redis Docker Image](https://hub.docker.com/_/redis)
