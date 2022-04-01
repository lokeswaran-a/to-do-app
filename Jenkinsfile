pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo "BUILD"
        sh 'docker build -t lokeswaranaruljothy/kanban-board-app:latest .'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push lokeswaranaruljothy/kanban-board-app:latest'
      }
    }
    stage('Test') {
      steps {
        echo 'Run Test...'
      }
    }
    stage('Deploy') {
      steps {
        sh 'kubectl apply -f infra/deployment.yaml -f infra/service.yaml'
        sh 'minikube service --url kanban-board-app-service'
        sh 'kubectl get pods'
      }
    }
  }
}
