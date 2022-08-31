import java.util.Scanner;

public class semana {


    public static void main(String[] args) {
        System.out.println("semana");
        Scanner sc = new Scanner(System.in);
        byte diaSemana = sc.nextByte();
        switch (diaSemana){

            case 1:
                System.out.println("se escribió uno");
                break;
            case 2:
                    System.out.println("se escribió dos");
                    break;
            case 3:
                System.out.println("nada de nada");
        }

    }
}
