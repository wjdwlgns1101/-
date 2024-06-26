<%@ include file="db.jsp" %>
<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<% 

	


	try{
		String sql = "select * from TBL_EMP_202108 where Empno = ? ";
		
		PreparedStatement pstmt = conn.prepareStatement(sql);
		ResultSet rs = pstmt.executeQuery();
		
		
		
		if(rs.next()){
			%>
			<jsp:forward page="sucess.jsp"></jsp:forward>
			<%
		}else{
			%>
			<jsp:forward page="fail.jsp"></jsp:forward>
			<%
		}
	}catch(Exception e){
		e.printStackTrace();
	}


%>