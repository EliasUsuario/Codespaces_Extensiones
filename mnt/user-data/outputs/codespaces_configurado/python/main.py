# ¡Bienvenido! Tu entorno Python ya está listo.
# Ejecuta este archivo con: python main.py


def greet(name: str) -> str:
    return f"Hola, {name}! Tu entorno Python funciona perfectamente. 🐍"


def main():
    message = greet("mundo")
    print(message)

    # Prueba rápida de algunas características de Python
    numbers = [1, 2, 3, 4, 5]
    squares = [n**2 for n in numbers]
    print(f"Cuadrados de {numbers}:")
    print(f"→ {squares}")


if __name__ == "__main__":
    main()
