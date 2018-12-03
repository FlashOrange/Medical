package Util;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SendMessage {

    public static void alermessage(HttpServletResponse response,String message,String page) throws IOException {

        //message 是传递的信息，page是传递的地址页面

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.print("<script language='javascript'>alert('"+message+"');"
                + "window.location.href='"+page+"';</script>");
    }
}