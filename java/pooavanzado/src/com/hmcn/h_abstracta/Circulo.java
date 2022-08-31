package com.hmcn.h_abstracta;

public class Circulo extends FigurasGeometricas {
private float radio;

    public Circulo(float radio) {
        super ("circulo ");
        this.radio = radio;
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }

    @Override
    public float area() {
         return (float) (Math.pow(radio,2)*Math.PI);



    }
}
