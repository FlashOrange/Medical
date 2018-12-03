import org.json.JSONObject;

public class Main {

    public static void main(String[] args) {
        JSONObject jsonObject =new JSONObject();
        int [] result =new int[10] ;
        for(int i=0;i<10;i++)
            result[i] = i;
        jsonObject.put("result", result);
        jsonObject.put("name", "yuhao");
        System.out.println(jsonObject.toString());
        System.out.println(jsonObject.get("name"));

    }
}
