<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="userEntryProcess" method ="post">  
<input type="text" name="name" /><br/>  
<input type="text" name="mail"  value="Email ID..." onclick="this.value=''"/><br/>  
<input type="text" name="message"  value="message..." onclick="this.value=''"/><br/>  
<input type="submit" value="register"/>  
</form>  
<!-- value="Name..." onclick="this.value=''" -->
</body>
</html>