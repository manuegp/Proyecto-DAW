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

        <?php if ($details['coste'] != ''): ?>

            <h3>Total pagado: {{$details['coste'][0]->precio_total}}€</h3>
            <br><br>

            <h2>Productos comprados:</h2>
            <br>

            <?php if (count($details['merch']) != 0): ?>
            
                <h3>Merchandising</h3></br>
                <p>Estos son los productos que llegarán a su dirección {{$details['direccion'][0]->direccion}}.</p>
                </br>

                <table>
                    <caption>Merchandising</caption>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                    </tr>

                    <?php for ($i = 0; $i < count($details['merch']); $i++) :?>
                        <tr>
                            <!--<td> <img src="data:image/jpeg;base64, <?php /*base64_encode($details['carrito'][$i]->archivo_imagen)*/ ?>"/></td>-->
                            <td>{{$details['merch'][$i]->nombre}}</td>
                            <td>{{$details['merch'][$i]->cantidad}}</td>
                        </tr>
                    <?php endfor; ?>

                </table>

                <br>
                <br>

            <?php endif ?>


            <?php if ($details['juegos'] != ''): ?>
                
                <h3>Juegos</h3>

                <p>Estos son los codigos que debe insertar para obtener la copia digital del juego.</p>

                <table>
                    <caption>Juegos</caption>
                    <tr>
                        <th>Nombre</th>
                        <th>Códigos</th>
                    </tr>

                    <?php for ($i = 0; $i < count($details['juegos']); $i++) :?>
                        <tr>
                            <!--<td> <img src="data:image/jpeg;base64, <?php /*base64_encode($details['carrito'][$i]->archivo_imagen)*/ ?>"/></td>-->
                            <td>{{$details['juegos'][$i]->nombre}}</td>
                            <td>
                                <?php for ($e = 0; $e < $details['juegos'][$i]->cantidad; $e++) :?>
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

        <?php endif ?>


        <?php if ($details['articulo_oferta'] != ''): ?>

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                    <tr>
                        <!--<td> <img src="data:image/jpeg;base64, <?php /*base64_encode($details['carrito'][$i]->archivo_imagen)*/ ?>"/></td>-->
                        <td>{{$details['articulo_oferta'][0]->nombre}}</td>
                        <td>{{$details['articulo_oferta'][0]->precio}}€</td>

                    </tr>

            </table>

        <?php endif ?>
             

    </body>
</html>