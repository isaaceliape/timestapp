<?php

  $usuario = $_POST["txt-username"];
  $password = $_POST["txt-password"];

  if ($usuario == "isaaceliape@gmail.com" && $password == "1234") {
    session_start();
    $_SESSION['views'] = $usuario;
    header( 'Location: http://localhost:8888/timestapp/public/#tasks');
  }else{
    header( 'Location: http://localhost:8888/timestapp/public/#error');
  }
?>
<section class="login page current">
  <div class="box">
    <h1>login</h1>
    <form action="login.php" method="post" class="login-form">
      <input type="email" name="txt-username" class="txt-username" placeholder="user name or email" required>
      <div class="separator">&nbsp;</div>
      <input type="password" name="txt-password" class="txt-password" placeholder="password" required>
      <div class="separator">&nbsp;</div>
      <p class="miss-password"><a href="#" class="forgot">forgot?</a> <span>or</span> <a href="#" class="sign-up">sign up</a><span>.</span></p>
      <input type="submit" class="bt-next">
    </form>
  </div>
</section>