public class Arreglos {
    public static void main(String[] args) {
        System.out.println("arreglos");



        // no se pueden mezclar tipos de datos

        int[] numeroAleatorios= {1,2,3,4,5,6,7};

        String[] valores = {"qwer", "asdfg", };
        byte[] otrosNumeros = {1,2,3};
        char[] caracteres = new char[4];
        caracteres [0] = 'h';
        caracteres [1] = 'o';
        caracteres [2] = 'l';
        caracteres [3] = 'a';
        System.out.println(numeroAleatorios);
        System.out.println(valores);
        System.out.println(caracteres);

/// for each
        for (String elemento : valores){

            System.out.println(elemento);



        }
        for (int numero: numeroAleatorios){
            System.out.println(numero);
        }









    }
}
