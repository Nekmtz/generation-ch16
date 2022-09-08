public class ejemploVariables {
    public static void main(String[] args) {

        //Declaración de variables String y caracter:
        String nombre = "Hugo";
        String saludo = "Hola esto es un ejemplo de variables";
        char espacio = '\u0040';
        char caracter ='a';

        System.out.println("espacio =" + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("Char corresponde en bits: " +Character.SIZE);
        System.out.println("Char valor maximo: " +Character.MAX_VALUE);
        System.out.println("Char valor minimo: " +Character.MIN_VALUE);

        //Declaración de variables numericas:
        int numeroEntero = 2;

        System.out.println("numeroEntero =" + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " +Integer.SIZE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);

        //Declaración de variables float

        float numeroFloat =1;
        System.out.println("numeroFloat =" + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);


    }
}