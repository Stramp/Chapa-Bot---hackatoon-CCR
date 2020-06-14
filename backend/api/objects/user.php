<?php
class User{
  
  private $conn;
  private $table_name = "user";

  public $id;
  public $name;
  public $phone;
  public $region;

  public function __construct($db){
      $this->conn = $db;
  }

  function create(){
    $query = "INSERT INTO
        " . $this->table_name . "
        SET
        name=:name, phone=:phone, region=:region";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":phone", $this->phone);
    $stmt->bindParam(":region", $this->region);

    if($stmt->execute()){
        return true;
    }
    return false;   
  }

  function update(){
    $query = "UPDATE
      " . $this->table_name . "
      SET
      name=:name, phone=:phone, region=:region
      WHERE id=:id";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":name", $this->name);
    $stmt->bindParam(":phone", $this->phone);
    $stmt->bindParam(":region", $this->region);

    if($stmt->execute()){
      return true;
    }
    return false;   
  }

  function delete(){
    $query = "DELETE
      " . $this->table_name . "
      WHERE id=:id";
    $stmt = $this->conn->prepare($query);

    if($stmt->execute()){
      return true;
    }
    return false;   
  }
}
?>