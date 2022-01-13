FROM openjdk:17-jdk
ADD target/*.jar app.jar
#ADD ./startup.sh /tmp
#WORKDIR /tmp
EXPOSE 8080 8443
ENTRYPOINT ["java","-Dspring.profiles.active=prod","-jar","/app.jar"]
#ENTRYPOINT ["/bin/bash"]