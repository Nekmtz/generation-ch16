package MiFecha;

public class MiFecha {


    private int dia ;
    private int mes ;
    private int año ;

    public MiFecha() { // constructor vacio
    }

    public int getDia() {
        return dia;
    }

    public int getMes() {
        return mes;
    }

    public int getAño() {
        return año;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public MiFecha(int nuevoDia, int nuevoMes, int nuevoAño) { // Constructor con parametros
        this.dia = nuevoDia;
        this.mes = nuevoMes;
        this.año = nuevoAño;



    }

}
