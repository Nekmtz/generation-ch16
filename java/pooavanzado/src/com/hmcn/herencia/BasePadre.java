package com.hmcn.herencia;

import java.util.Scanner;

public class BasePadre {

    protected int a;
    protected double b;
    protected String c;

    public BasePadre() {


    }
    public void visualizarA() {

        System.out.println("yo vengo de la base padre x parte de h");
    }

        public void visualizarABC () {
            System.out.println("yo vengo de padre x parte de ho");
        }

        public int getA ()
        {
            return a;
        }

        public void setA ( int a){
            this.a = a;
        }

        public double getB () {
            return b;
        }

        public void setB ( double b){
            this.b = b;
        }

        public String getC () {
            return c;
        }

        public void setC (String c){
            this.c = c;
        }
    }
