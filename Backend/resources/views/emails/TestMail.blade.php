<html>
    <head>
        
        <style type="text/css">

            table {
            border: #b2b2b2 1px solid;
            }

            th {
                border: black 1px solid;
                text-align: center;
            }

            td{
            border: black 1px solid;
            text-align: center;
            padding: 15px;
            }

        </style>

    </head>
    <body>

        <h1>{{$details['title']}}</h1>
        <p>{{$details['body']}}</p>
        
        <?php if ($details['carrito'] != ''): ?>
            
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Código</th>
                </tr>

                <?php for ($i = 0; $i < count($details['carrito']); $i++) :?>
                    <tr>
                        <!--<td> <img src="data:image/jpeg;base64, <?php /*base64_encode($details['carrito'][$i]->archivo_imagen)*/ ?>"/></td>-->
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

                                    echo "Código ". ($e+1). ": ". $codigo

                                ?> <br>
                            
                            <?php endfor; ?>
                        </td>

                    </tr>
                <?php endfor; ?>

            </table>

        <?php endif ?>


        <?php if ($details['articulo_oferta'] != ''): ?>
            
            <table>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                <?php for ($i = 0; $i < count($details['articulo_oferta']); $i++) :?>
                    <tr>
                        <!--<td> <img src="data:image/jpeg;base64, <?php /*base64_encode($details['carrito'][$i]->archivo_imagen)*/ ?>"/></td>-->
                        <td>{{$details['articulo_oferta'][$i]->imagen_principal}}</td>
                        <td>{{$details['articulo_oferta'][$i]->nombre}}</td>
                        <td>{{$details['articulo_oferta'][$i]->precio}}</td>

                    </tr>
                <?php endfor; ?>

            </table>

        <?php endif ?>
             

    </body>
</html>