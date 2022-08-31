import java.util.Objects;
import java.util.Scanner;

public class bucles {
    public static void main(String[] args) {

        String condicion = "";
        Scanner sc = new Scanner (System.in);

        // == != estamos comparando datos primitivos
        while ( !Objects.equals(condicion,  "Hola")){

            System.out.println("saludame");

           condicion = sc.next();

        }



        //do while
        //el do while ejecuta la accion una vez antes de evaluar

        do{

            System.out.println("saludame x2");
            condicion = sc.next ();
        }while(Objects.equals(condicion, "hola"));

    }

    }




