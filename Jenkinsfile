pipeline {

  agent any
  
   environment {
		DOCKERHUB_CREDENTIALS=credentials('docker_hub_id')
	}
  
  stages {
  
    stage('Build') {
      steps {
        echo "<==============================BUILD====================================>"
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
        echo "<==============================PUSH====================================>"
        sh 'docker push lokeswaranaruljothy/kanban-board-app:latest'
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'npm i react-scripts'
    //     sh 'yarn test'
    //   }
    // }
    stage('Deploy') {
      steps {
        echo "<==============================DEPLOY====================================>"
        sh 'kubectl apply -f infra/deployment.yaml -f infra/service.yaml'
        sh 'minikube service --url kanban-board-app-service'
        sh 'kubectl get pods'
      }
    }
  }
  post {
     always {
       sh 'docker logout'
     }
  }
}
