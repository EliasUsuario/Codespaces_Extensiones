// ¡Bienvenido! Tu entorno Java ya está listo.
// Pulsa el botón ▶ Run encima del método main, o ejecuta:
// javac Main.java && java Main

public class Main {

    public static String greet(String name) {
        return "¡Hola, " + name + "! Tu entorno Java funciona perfectamente. ☕";
    }

    public static void main(String[] args) {
        System.out.println(greet("mundo"));

        // Prueba rápida
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Cuadrados: ");
        for (int n : numbers) {
            System.out.print(n * n + " ");
        }
        System.out.println();
    }
}
