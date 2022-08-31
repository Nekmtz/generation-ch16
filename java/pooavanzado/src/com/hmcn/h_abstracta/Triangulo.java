package com.hmcn.h_abstracta;

public class Triangulo extends FigurasGeometricas{



    public Triangulo(float base, float altura, int constante) {
        super("Triangulo ");
        this.base = base;
        this.altura = altura;
        this.constante = constante;
    }

    private float base;
    private float altura;
    private int constante =2;

    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public int getConstante() {
        return constante;
    }

    public void setConstante(int constante) {
        this.constante = constante;
    }

    @Override
    public float area() {
        return ((getBase()*getAltura())/getConstante());
    }
}
