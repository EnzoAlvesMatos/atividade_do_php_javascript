<?php
class Veiculo{
    private $modelo;
    public $cor;
    private $velocidade;
    
    //contructor e como se fosse o nacsimento de uma class

    public function __construct($cor){
    $this->cor = $cor;
  
    }
    //set significa saida
  function setVelocidade($velocidade){
    $this->velocidade = $velocidade;
  }
  public function getVelocidade() {
    return $this->velocidade;
}
   public function setModelo($mod){
   
    if ($this->velocidade >= 1000){
     echo $this->modelo = $mod;
    } else{
    echo "não possui velocidade suficiente para aparecer o modelo";
   }
}
//get significa entrada
   public function getModelo() {
    return $this->modelo;
   }

   public function Acelerar(){
    echo "Acelerar" . $this->velocidade . "acelerar mais";
    }
   public function Frear(){
       echo "Frear" .  $this->velocidade . "ande mais devagar";
    
    }
   public function ExibirInformacoes(){
        echo "cor igual " . $this->cor . "Velocidade igual" . $this->velocidade ;
    
    }
}

