FROM openjdk
VOLUME /tmp
ADD target/api-gateway-0.0.1-SNAPSHOT.jar api-gateway-0.0.1-SNAPSHOT.jar
EXPOSE 8000
ENTRYPOINT ["java","-jar","api-gateway-0.0.1-SNAPSHOT.jar"]
