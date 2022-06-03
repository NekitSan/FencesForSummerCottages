<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
        $token = "5320066676:AAHsq11YGA3rCiQe9SNHskl9WVSUThCoRlw";
        $chat_id = "-1001558708347";

        $usertype = "С какой страницы: " . strip_tags($_POST['type']) . "%0A";
        $username = "От: " . strip_tags($_POST['name']) . "%0A";
        $userphone = "Телефон: " . strip_tags($_POST['phone']) . "%0A";
        $useremail = "Почта: " . strip_tags($_POST['email']) . "%0A";
        $usercomment = "Комментарий: " . strip_tags($_POST['comment']);

        $result = $usertype . $username . $userphone . $useremail . $usercomment;
        
        // Формируем текст сообщения
        $txt = "----Поступил заказ----" . "%0A" . $result . "%0A" . "-------------";
    
        $sendTextToTelegram = file_get_contents("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");
        header ("Location: ../index.html");
    }
    else 
    {
        header ("Location: /");
    }

?>