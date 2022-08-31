package MIResumen;

public class animales {

    private String raza ;
    private String nombreAnimal ;
    private int años ;

    public animales() { // constructor vacio
    }

    public animales(String nuevoNombreAnimal, String nuevaRaza, int nuevoAños) { // Constructor con parametros
        this.raza = nuevaRaza;
        this.nombreAnimal = nuevoNombreAnimal;
        this.años = nuevoAños;
    }


    public void setRaza (String raza) {
        this.raza = raza;
    }
    public void setnombreAnimal (String nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    }



}
