# Funciona para o application-dev habilitado.
# [Choice] Java version:
ARG VARIANT=17

FROM openjdk:${VARIANT}
LABEL mantainer="Alvaro Pires"

WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Define a porta que a aplicação irá escutar
EXPOSE 8080

# Build the application with Maven
RUN ./mvnw clean package -DskipTests

# Set the default command to run the application when the container starts
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]