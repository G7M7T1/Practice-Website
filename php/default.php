<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <meta name="description" content="PHP.G7M7T1.net | PHP Test Form" />
    <meta name="author" content="G7M7T1" />
    <link rel="shortcut icon" href="../logo.png" />
    <link rel="bookmark" href="../logo.png" />
    <title>PHP | G7M7T1</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100vh;
            width: 100%;
            background-image: url("../img/Form/Sea of Clouds-10s-3000px.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            color: white;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        div {
            margin: 1rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
        }

        div input {
            padding: 0.5rem 2rem;
            margin-left: 0.5rem;
        }

        #sendBtn {
            background-color: #0dcaf0;
            border: none;
            padding: 0.5rem 2rem;
            color: white;
            margin: 1rem;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <form method="post" id="validationForm">
        <div>
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your name" />
        </div>

        <div>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" />
        </div>

        <input id="sendBtn" type="submit" name="submit" value="Send" />
    </form>
    
</body>
</html>