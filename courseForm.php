<?php

if (isset($_POST['submit'])) {
  $course = $_POST['cursussen'];
  $emailTo = $_POST['email'];
  $name = $_POST['name'];

  $price = 0;

 switch ($course) {
   case 'webdev':
     $price = 149;
     break;
   case 'UI_UX':
     $price = 299;
     break;
   case 'SEO':
     $price = 199;
     break;
 }
  $headers = "From: SupportMyDay"
  $txt = "Dear ".$name."\n\nThank you for purchasing a course at Support My Day. Below you can see the details of your purchase: \n\n\nCourse: ".$course."\nThe price of this course is ".$price."\n\nKind Regards, \n Support My Day"
  mail($emailTo, "Support My Day Course Purchase", $txt, $headers);
  header("Location: index.php?mailsend");
}
 ?>
