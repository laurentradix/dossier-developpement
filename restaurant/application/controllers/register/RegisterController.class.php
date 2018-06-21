<?php

class RegisterController
{
    
        public function httpPostMethod(Http $http, array $formFields)
            {   
        
                $userModel = new UserModel();
                
                
                $userModel->createUser($formFields);
               
              
                $http->redirectTo('login');
    	
            }
}