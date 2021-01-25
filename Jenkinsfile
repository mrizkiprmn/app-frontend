def dockerhub = "mrizkiprmn/frontend-jenkins"
def image_name = "${dockerhub}:${BRANCH_NAME}"
def builder

pipeline {

    agent any

    parameters {
        booleanParam(name: 'RUNTEST', defaultValue: true, description: 'Checklist for RUNTEST')
        choice(name: 'DEPLOY', choices: ['Develop', 'Production'], description: 'Select for DEPLOY')
    }

    stages {

        stage('Installing Dependencies') {
            steps {
                nodejs("node14") {
                    sh 'yarn install'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    builder = docker.build("--no--cache", "-t ${dockerhub}:${BRANCH_NAME}")
                }
            }
        }

        stage('Run Testing') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                script {
                    builder.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage('Push Image') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                
                script {
                    builder.push()
                }
            }
        }

        stage('Deploy on develop') {
            when {
                expression {
                    params.DEPLOY == 'Develop' || BRANCH_NAME == 'dev'
                }
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'devserver',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: 'docker-compose.yml',
                                        remoteDirectory: 'app',
                                        execCommand: "docker pull ${dockerhub}:${BRANCH_NAME}; cd ./app/app; docker-compose stop; docker-compose up -d --force-recreate",
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }

        stage('Deploy on production') {
            when {
                expression {
                    params.DEPLOY == 'Production' || BRANCH_NAME == 'prod'
                }
            }
            steps {
                script {
                    sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'prodserver',
                                verbose: false,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: 'docker-compose.yml',
                                        remoteDirectory: 'app',
                                        execCommand: 'cd app && cd app && docker-compose stop && docker-compose up -d',
                                        execTimeout: 120000,
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}