package MiFecha;

import MiEjemploJava.Persona;

public class EjemploFecha {
    public static void main(String[] args) {

        MiFecha fecha = new MiFecha(); // Objeto vacio
        fecha.setDia(14);
        fecha.setMes(11);
        fecha.setAño(1900);

        System.out.println("la fecha es " + fecha.getDia() + "/" + fecha.getMes() + "/" + fecha.getAño());
        }


    }







