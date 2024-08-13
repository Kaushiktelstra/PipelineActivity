pipeline{
    agent any
    stages{

        triggers {
        githubPush()
        }
        stage('Clone'){
            steps{
                git 'https://github.com/Kaushiktelstra/PipelineActivity.git'
            }
        }
        stage('Build')
        {
            steps{
                bat 'npm init'
 
              
            }
        }
        stage('Test')
        {
            steps{
                bat 'node Test.js'
            }
        }
        stage('Deploy')
        {
            steps{
                bat 'node Item.js'
            }
        }
    }
}
