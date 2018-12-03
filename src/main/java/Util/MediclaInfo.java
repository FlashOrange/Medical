package Util;

import Util.ReadFile;
import org.json.JSONObject;

import java.util.ArrayList;

public  class MediclaInfo {

    public static String getmedicalinfo(String fileName) { //将需要的信息进行转化
//        String fileName = "/data/当归.txt";

        String keyword = "当归";
        String keyword2 = "脾经";
        ArrayList<String> data = ReadFile.readFileByLines(fileName);
        ArrayList<String> entitys = new ArrayList<>();
        ArrayList<String> entitys_h = new ArrayList<>();
        ArrayList<String> relationships = new ArrayList<>();
        ArrayList<String> nodes = new ArrayList<>();//对应点的集合
        ArrayList<String> nodes_rel =new ArrayList<>();//对应相应点所属的关系，决定了点的颜色
        int second_keyword_index = 0;
        boolean flag = true;
        for (int i = 0; i < data.size(); i++) {

            //数据的处理部分
//            System.out.println(data.get(i));
            String[] data_split = data.get(i).split(" ");
            entitys_h.add(data_split[0]);
            entitys.add(data_split[1]);
            relationships.add(data_split[2]);
            if(!nodes.contains(data_split[0])) {nodes.add(data_split[0]);nodes_rel.add(data_split[2]);}
            if(!nodes.contains(data_split[1])) {nodes.add(data_split[1]);nodes_rel.add(data_split[2]);}

        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("keyword", keyword);
        jsonObject.put("keword2", keyword2);
        jsonObject.put("entitys", entitys);
        jsonObject.put("entitys_h", entitys_h);
        jsonObject.put("nodes",nodes);
        jsonObject.put("node_rel",nodes_rel);
        jsonObject.put("second_keyword_index", second_keyword_index);
        jsonObject.put("relationships", relationships);
        return jsonObject.toString();
    }

}
