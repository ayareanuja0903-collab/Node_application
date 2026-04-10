pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/ayareanuja0903-collab/Node_application.git'
            }
        }

        stage('Build') {
            steps {
                echo "Build started......"
            }
        }

        stage('Test') {
            steps {
                echo "Running testss..."
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying app..."
            }
        }
    }
}