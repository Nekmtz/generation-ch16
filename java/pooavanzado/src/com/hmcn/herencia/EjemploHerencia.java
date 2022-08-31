package com.hmcn.herencia;

import java.util.Scanner;

public class EjemploHerencia {

    public static void main(String[] args) {
Hija h = new Hija ();
h.visualizarA();

Hijo ho = new Hijo();
ho.visualizarABC();


BasePadre obj = new BasePadre();
obj.setA(2345);
        System.out.println(obj.getA());
        System.out.println( "atributo de clase Base padre"+ h.getA());

    }
}

