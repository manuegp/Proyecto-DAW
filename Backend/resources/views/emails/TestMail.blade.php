<html>
    <head>
        <title>Mi Web</title>
    </head>
    <body>
        <h1>{{$details['title']}}</h1>
        <p>{{$details['body']}}</p>

        <table border="1px solid black">
            <tr>
                <td>Nombre</td>
                <td>Apellidos</td>
            </tr>
            <tr>
                <td>Mario</td>
                <td>Lopez Baños</td>
            </tr>
        </table>

        foreach ($prueba) {
            <p>{{$prueba=>nombre}}</p>
        }

    </body>
</html>