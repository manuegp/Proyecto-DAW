<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style">
    </head>
    <body>

        <h1>{{$details['title']}}</h1>
        <p>{{$details['body']}}</p>
        
        <?php if ($details['carrito'] != ''): ?>
            
            <table>
                <tr>
                    <td>Imagen</td>
                    <td>Nombre</td>
                    <td>Código</td>
                </tr>

                <?php for ($i = 0; $i < count($details['carrito']); $i++) :?>
                    <tr>
                        <td>{{$details['carrito'][$i]->imagen_principal}}</td>
                        <td>{{$details['carrito'][$i]->nombre}}</td>
                        <td>
                            <?php for ($e = 0; $e < $details['carrito'][$i]->cantidad; $e++) :?>
                                <?php 
                                    
                                    $chars_permitidos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                    $tamaño = 17;
                                    $codigo = "";

                                    for ($cont=0; $cont < $tamaño; $cont++) {
                                        $char_random = $chars_permitidos[mt_rand(0, strlen($chars_permitidos) - 1)];
                                        $codigo .= $char_random;
                                    }

                                    echo $codigo

                                ?> <br>
                            
                            <?php endfor; ?>
                        </td>

                    </tr>
                <?php endfor; ?>

            </table>

        <?php endif ?>
             

    </body>
</html>