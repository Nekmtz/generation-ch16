import java.util.Scanner;

public class operadores {
    public static void main(String[] args) {
        int i=5, j=4, suma = i+ j ;
        System.out.println(suma);

        System.out.println("i+j = " + suma );
        System.out.println( "i+j = " + i + j);
        System.out.println( "i+j = " + (i + j));


        Scanner scanner = new Scanner(System.in); //in hace referencia que ahora se espera una entrada
        System.out.println("¿cual es tu nombre?");
        String nombre = scanner.next(); //aqui se pide que ingrese el dato de nombre
        System.out.println("Hola " + nombre);
        System.out.println("¿Cual es tu edad?");
        String edadString = scanner.next(); //aqui se pide que ingrese el dato de edad
        int edad = Integer.parseInt(edadString); //cambiamos edad de string a entero
        System.out.println("tienes " + edad);

    }
}
