pipeline {
  agent any
  stages {
    stage('Compile') {
      steps {
        sh '''cd employee-eureka-server
chmod +x mvnw
./mvnw clean package'''
      }
    }

  }
}