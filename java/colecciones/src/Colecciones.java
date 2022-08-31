import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {

//list -- arraylist
        //los valores se orden segpuu el orden en que los agrupemos
        //es una coleeciónde  objetos del mismo tipo
        List<String> meses = new ArrayList<String>();

        meses.add("enero");
        meses.add("febrero");
        meses.add("marzo");
        meses.add(1, "abril");

        String mes =meses.remove(3);

        System.out.println(meses);
        System.out.println(mes);

        for (String elemeto: meses){
            System.out.println(meses
            );
        }

        //list <int>
        int num1 = 10;
        Integer num2 =10;
        System.out.println(num1 + num2);
        System.out.println(num2.getClass().getSimpleName());


        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        System.out.println(numeros);









    }
}
