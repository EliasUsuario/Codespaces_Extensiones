# ☕ Java — Codespace listo para usar

## Cómo empezar

1. Abre Codespaces desde **esta carpeta**
2. Espera a que el entorno se prepare (2-3 minutos la primera vez)
3. Abre `Main.java` y pulsa el botón **▶ Run** que aparece encima del método `main`

¡Listo! Ya tienes Java funcionando.

---

## ¿Qué viene incluido?

| Extensión | Para qué sirve |
|---|---|
| Extension Pack for Java | Todo lo necesario para Java en VS Code |
| Maven for Java | Gestión de proyectos y dependencias |
| Java Test Runner | Ejecutar tests con JUnit |
| Java Debugger | Depurador integrado |
| Language Support (Red Hat) | Autocompletado y análisis de código |
| IntelliCode | Sugerencias con IA |
| SonarLint | Detección de bugs y malas prácticas |

**Versión de Java:** 21 LTS  
**Maven:** incluido

---

## Compilar y ejecutar desde terminal

```bash
# Compilar
javac Main.java

# Ejecutar
java Main
```

---

## Crear un proyecto Maven

```bash
mvn archetype:generate -DgroupId=com.miapp -DartifactId=mi-proyecto \
  -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

---

## Estructura sugerida

```
mi-proyecto/
  .devcontainer/
    devcontainer.json   ← copia esto a tu repo
  src/
    Main.java
  README.md
```

---

¿Algo no funciona? Abre un [issue](https://github.com/TU_USUARIO/codespaces_configurado/issues). 🙌
