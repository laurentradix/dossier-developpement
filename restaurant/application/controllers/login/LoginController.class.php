<?php

class LoginController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	

    }

   


    public function httpPostMethod(Http $http, array $formFields)
    {   
        

        if (empty($formFields['email'])) {
            throw new Exception("email empty");
        }
            
        if (empty($formFields["password"])) {

            throw new Exception("password empty");
            
        } 

        
        $email=$formFields['email'];
        $password=$formFields['password'];

        
        $user =UserModel::getUserByemail($email);

        
        if (empty($user)) {
            return ['errorMessage'=>"Email inconnu"];
        }
        
        if($password!= $user['password']){
            return['errorMessage'=>"mot de passe incorrect"];
        }

        $userSession = new UserSession();
        $userSession->connect($user);

        $http->redirectTo('');

    }
}