<html>
    <head>

        <!--Aqui estan los estilos del correo-->
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

        <!--Aqui estan los datos que se envian como parametro a la vista del correo-->
        <h1>{{$details['title']}}</h1>
        <p>{{$details['body']}}</p>

        <!--Si coste no esta vacio, indicandonos que es un correo informativo del pago que ha realizado el usuario, 
        aparecera esta seccion en el correo-->
        <?php if ($details['coste'] != ''): ?>

            <!--Aqui muestro el precio total que hay en la variable que se guarda en coste-->
            <h3>Total pagado: {{$details['coste'][0]->precio_total}}€</h3>
            <br><br>

            <h2>Productos comprados:</h2>

            <!--Si el numero de productos que sean merchandising no es igual a 0, aparecera la tabla de merchandising en el correo con datos del producto-->
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
                            <td>{{$details['merch'][$i]->nombre}}</td>
                            <td>{{$details['merch'][$i]->cantidad}}</td>
                        </tr>
                    <?php endfor; ?>

                </table>

                <br>
                <br>

            <?php endif ?>

            <!--Si el numero de productos que sean juegos no es igual a 0, aparecera la tabla de juegos en el correo con datos del producto-->
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
                            <td>{{$details['juegos'][$i]->nombre}}</td>
                            <td>
                                <?php for ($e = 0; $e < $details['juegos'][$i]->cantidad; $e++) :?>

                                    <!--Aqui genero los codigos segun la cantidad que haya solicitado el usuario en la compra
                                     y los muestro en el correo-->
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


        <!--Si articulo_oferta no esta vacio, indicandonos que es un correo informativo de que un producto, que el usuario tiene en deseados, esta en oferta, 
        aparecera esta seccion en el correo con los datos del producto-->
        <?php if ($details['articulo_oferta'] != ''): ?>

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>

                    <tr>
                        <td>{{$details['articulo_oferta'][0]->nombre}}</td>
                        <td>{{$details['articulo_oferta'][0]->precio}}€</td>
                    </tr>

            </table>

        <?php endif ?>
             

    </body>
</html>