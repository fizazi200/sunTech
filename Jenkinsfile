pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
metadata:
  labels:
    some-label: some-value
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    command:
    - cat
    tty: true
    volumeMounts:
      - name: docker-config
        mountPath: /kaniko/.docker
  volumes:
    - name: docker-config
      secret:
        secretName: dockerhub-secret
        items:
          - key: .dockerconfigjson
            path: config.json
"""
        }
    }
    environment {
        // Update these values with your actual Docker Hub username and repository name
        DOCKER_HUB_REPO = 'fizazi2021'
		IMAGE_NAME='suntech'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
		stage('Read Version') {
          steps {
            script {
              def version = sh(script: "grep '\"version\":' package.json | cut -d'\"' -f4", returnStdout: true).trim()
              echo version
              echo "Package version is ${version}"

              env.APP_VERSION = version
              env.IMAGE_TAG = "${env.APP_VERSION}-${env.BUILD_NUMBER}"

              echo "New version is ${env.IMAGE_TAG}"
            }
          }
        }
        stage('Build and Push Image') {
            steps {
                container('kaniko') {
                    sh "/kaniko/executor --context `pwd` --destination ${DOCKER_HUB_REPO}/${IMAGE_NAME}:${env.IMAGE_TAG} --destination ${DOCKER_HUB_REPO}/${IMAGE_NAME}:latest"
                }
            }
        }
    }
}


