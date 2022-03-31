pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('docker_hub_id')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t lokeswaranaruljothy/kanban-board-app:latest .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push lokeswaranaruljothy/kanban-board-app:latest'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
