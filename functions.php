<?php
    $hostname = '';
    $database = '';
    $username = '';
    $password = '';


    $connection = mysqli_connect($hostname, $username, $password, $database);
    if ($connection->error) die('Непредвиденная ошибка!');

    function get_description() {
        global $connection;
        $result = $connection->query('SELECT * FROM description');
        if (!$result) die('Не удалось получить описание!');
        else return $result->fetch_array(MYSQLI_ASSOC)['text'];
    }

    function get_projects() {
        global $connection;
        $result = $connection->query('SELECT title FROM projects');
        if (!$result)  die('Не удалось получить названия проектов');
        else {
            $title = "";
            foreach ($result as $item) $title .= "<a href='#'>".$item['title']."</a>";
        }
        $result->free();
        return $title;
    }
?>