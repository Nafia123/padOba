<?php

class Connection {


	public function dbConnect(){
		return new PDO("mysql:host=localhost:3306; dbname=inlog", "root", "Rattenratten0.");
	}
}

?>