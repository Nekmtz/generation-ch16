import java.util.Scanner;

public class EjercicioCiclos {
    public static void main(String[] args) {

        String cantastericos2 = "*";

        for (int j = 1; j <= 5; j++) {
            String a = cantastericos2.substring(j);
            System.out.println(a);
        }
        String cantastericos = "";
        for (int i = 1; i <= 5; i++) {
            cantastericos = cantastericos + "*";
            System.out.println(cantastericos);
        }

        Scanner sc = new Scanner(System.in);
        System.out.println("Indique la cantidad de estrellas");
        int numEstrellas = sc.nextInt();
        System.out.println("Indique la direccion (Ascendente,Descendente)");
        String direccion = sc.next();

        switch (direccion) {
            case "Ascendente":
                for (int i = 1; i <= numEstrellas; i++) {
                    for (int j = 0; j < i; j++) {
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            case "Descendente":
                for (int i = numEstrellas; i >= 1; i--) {
                    for (int j = 0; j < i; j++) {
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
            default:
                System.out.println("Opcion no valida");
        }


    }
}

