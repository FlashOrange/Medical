package Servlet;

import Util.MediclaInfo;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Writer;

@WebServlet(name = "SearchMedical", value = "/Servlet.SearchMedical")
public class SearchMedical extends HttpServlet {



    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);
        req.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=utf-8");
        String path = this.getServletContext().getRealPath("data/当归.txt");
        String filename =path;
        String data = MediclaInfo.getmedicalinfo(filename);
        System.out.println(filename);
        Writer out = resp.getWriter();
        out.write(data);
        out.close();

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
