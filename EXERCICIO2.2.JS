<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PART2</title>
</head>
<body>
    
    <div id="resultado"></div>
   

    <script>
  let palavra = prompt("insira uma palavra:");

  let resultadoDiv = document.getElementById("resultado")


  for(let i = 0; i < palavra.length; i++){
                resultadoDiv.innerHTML += palavra[i].toUpperCase() + "<br>"}

    </script>
</body>
</html>