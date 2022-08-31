package MIResumen;

public class Galleta1 {


        private String color = "naranja";
        private String sabor = "naranja";
        private String forma = "triangulo";
        private int peso = 23;
        private int tiempoHorn = 60 ;

    public Galleta1 () { // constructor vacio
    }

    public Galleta1(String nuevoColor, int nuevoPeso, int nuevoTiempoHorn) { // Constructor con parametros
        this.color = nuevoColor;
        this.peso = nuevoPeso;
        this.tiempoHorn = nuevoTiempoHorn;

    }

    void cortar(){
        System.out.println("...");
    }
    void Hornear(){
        System.out.println("...");
    }






}
