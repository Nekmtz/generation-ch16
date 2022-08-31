import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("esta es la calse edad");


        Scanner escaner = new Scanner(System.in); //instanciar: es cuando creeamos un objeto papartir de una clase
        System.out.println("escribe tu edad");
        int edad = escaner.nextInt();
        escaner.close();
        System.out.println(edad);
        
        
        
        if (edad >= 18){
            System.out.println("eres mayor de edad");
        } else  {
            System.out.println("no eres mayor de edad");

        }
        // operador ternario
        String resultado = (edad >= 18)? "eres rukelio": "tas moko";
        System.out.println(resultado);
    }


}
