<?php

include_once('connection.php');

class User{

private $db;

public function __construct() {
	$this->db = new Connection();
	$this->db = $this->db->dbConnect()
}

public function Login($iduser){
	if(!empty($iduser)){
		$st = $this->db->prepare("SELECT * FROM user WHERE iduser=?");
		$st->bindParam(1, $name);
		$st->execute();

		if($st->rowCount() == 1) {
			echo "User veriefied, access granted.";
		} else {
			echo "incorrect username.";
		}

	} else {
		echo "Vul wat in!"
	}
}

}

?>