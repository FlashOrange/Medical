import Util.MediclaInfo;
import Util.ReadFile;
import org.json.JSONObject;

import java.io.*;
import java.util.ArrayList;


public class Test {
    public static void main(String[] args) {
//        文件的读取
        String fileName = "data/当归.txt";

//        File file = new File(fileName);
//        BufferedReader reader = null;
//        try {
//            System.out.println("以行为单位读取文件内容，一次读一整行：");
//            reader = new BufferedReader(new FileReader(file));
//            String tempString = null;
//            int line = 1;
//            // 一次读入一行，直到读入null为文件结束
//            while ((tempString = reader.readLine()) != null) {
//                // 显示行号
//                System.out.println("line " + line + ": " + tempString);
//                line++;
//            }
//            reader.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } finally {
//            if (reader != null) {
//                try {
//                    reader.close();
//                } catch (IOException e1) {
//                }
//            }
//        }
//        String keyword="当归";
//        ArrayList<String> data = ReadFile.readFileByLines(fileName);
//        ArrayList <String> entitys = new ArrayList<>();
//        ArrayList <String> relationships = new ArrayList<>();
//        for(int i=0;i<data.size();i++){
//
//            //数据的处理部分
////            System.out.println(data.get(i));
//            String[] data_split=data.get(i).split(" ");
//            entitys.add(data_split[1]);
//            relationships.add(data_split[2]);
//        }
////        System.out.println(entitys.size());
////        System.out.println(relationships.size());
//        JSONObject jsonObject =new JSONObject();
//        jsonObject.put("keyword", keyword);
//        jsonObject.put("entitys",entitys);
//        jsonObject.put("relationships", relationships);
//        System.out.println(jsonObject.toString());
//             System.out.println(MediclaInfo.getmedicalinfo("E:\\Program\\Java\\Medical\\data\\当归.txt"));

//        String [] a ={"yuhao", "lijian"};
        ArrayList<String> a = new ArrayList<>();
        a.add("yuhao");
        if(a.contains("yuhao"))
            System.out.println("TRUE");

    }
}
