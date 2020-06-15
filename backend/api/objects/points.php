<?php
class Points{
  
  private $conn;
  private $table_name = "points";

  public $idPoints;
  public $userId;
  public $points;

  public function __construct($db){
      $this->conn = $db;
  }

  function add(){
    $query = "UPDATE
      " . $this->table_name . "
      SET
      points=:points
      WHERE userId=:userId";
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(":points", $this->points);

    if($stmt->execute()){
      return true;
    }
    return false;   
  }

  function consult(){
    $query = "SELECT * FROM " . $this->table_name;
    $stmt = $this->conn->prepare($query);
    $stmt->execute();
  
    return $stmt;
  }
}
?>