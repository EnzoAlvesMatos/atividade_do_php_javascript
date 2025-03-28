
    <?php
    include_once ('Veiculo.php');
    include_once('Carro.php');
    $Veiculo = new Veiculo('amarelo', 10000);
  
   
   $Veiculo->Acelerar();
   $Veiculo->Frear();
   $Veiculo->ExibirInformacoes();
   $Veiculo->setVelocidade(1000);
   $Veiculo->setModelo('fusca');
   
   
   var_dump($Veiculo);
    ?>
</body>
</html>