FROM node:10.15

# Set the working directory to /app
WORKDIR /app

COPY ./server.js /app/

# Indicate that port 8080 should
# available to the outside from this container
EXPOSE 8080

# Run server.js when the container launches
CMD ["node", "server.js"]