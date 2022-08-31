public class EjemploString {
    public static void main(String[] args) {
        String curso = "curso de java";
        String nombre = "el neko";
        String resultado = "curso de java";
        System.out.println("resultado = " + curso);


boolean esigual = curso == resultado;
        System.out.println("esigual= "+ esigual);
esigual = curso.equalsIgnoreCase(resultado);
        System.out.println(esigual);
    String concat = curso + " con " + nombre;
        System.out.println(concat);
        String dia = "juebebes";
        String conc1 =  nombre + " no asiste al " + curso + "xq es " + dia + "tons se va a desconectar";
        System.out.println(conc1);
Number numero1 = 23;
        System.out.println(numero1 + "es" + numero1 );

    }
}
