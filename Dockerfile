FROM express-gateway

# Example plugin
RUN yarn global add express-gateway-plugin-example

COPY . .

EXPOSE 8080

# Admin port
EXPOSE 9876

CMD [ "npm", "start" ]