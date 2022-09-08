package MetPrincipal;

import MIResumen.EjemploAnimales;
import MenuP.MenuP;
import MiEjemploJava.Persona;
import MiFecha.MiFecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EjecutaT {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuP menuOp = new MenuP();
        menuOp.menu();
        System.out.println(" elija un caso");
        sc.nextInt();
        int op;

        do {

            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println("ingresa el nombre");
                    sc.nextInt();
                    System.out.println("el saludo es" + s);
                    break;
                case 3:
                    MiFecha f = new MiFecha();
                    f.getDia();
                    f.getMes();
                    f.getAño();
                    System.out.println("la fecha es" + f.getAño());
                    break;
                case 2:
                    Persona p = new Persona();
                    p.getNombrePersona();
                    p.getEdadPersona();
                    p.getNss();
                    p.caminar();
                    p.dormir();
                    System.out.println("el mobre es" + p.getNombrePersona());

                    break;
                case 4:
                    System.out.println("aqui va la actividad del día");
                    break;
                default:
                    System.out.println("keseso perro?");
            }

            }while (op != 5) ;{

                System.out.println("adios");
            }




    }
}