<?php

class UserSession{

		static function start(){
			session_start(); 
		}

		static function getUser(){

			return UserModel::getUserBYid($_SESSION['user_id']);
		}
		static function isConnected(){

			if(empty($SESSION['user_id'])){
				return false;
			}else{
				return true;
			}
		}
		static function connect($user){
			$_SESSION['user_id']=$user['id'];
		}
		 static function logout(){
			session_destroy();
		}
   }
