package excepcion;
//extends es paradecir que es herencia d
public class ErrorFisicoExcepcion extends  Exception{
    //constructor

    public ErrorFisicoExcepcion(Exception ex) {
        super("ocurrió un error fisico -->", ex);


    }
}
