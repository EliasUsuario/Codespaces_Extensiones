# 🤝 Guía para contribuir

¡Gracias por querer mejorar este repositorio! Aquí está todo lo que necesitas saber.

---

## ¿Cómo añadir un nuevo lenguaje?

### 1. Haz fork del repositorio

Pulsa **Fork** en la esquina superior derecha de GitHub.

### 2. Crea la estructura del lenguaje

```
/nombre-del-lenguaje
  .devcontainer/
    devcontainer.json
  archivo-de-ejemplo.ext
  README.md
```

### 3. Escribe el devcontainer.json

Sigue este patrón mínimo:

```json
{
  "name": "Nombre del lenguaje",
  "image": "imagen-oficial-de-devcontainers",
  "customizations": {
    "vscode": {
      "extensions": [
        "extension.id-1",
        "extension.id-2"
      ],
      "settings": {
        "editor.formatOnSave": true,
        "editor.tabSize": 2
      }
    }
  }
}
```

Usa siempre imágenes oficiales de `mcr.microsoft.com/devcontainers/`.  
Consulta el catálogo completo: https://github.com/devcontainers/images

### 4. Añade un archivo de ejemplo

Debe poder ejecutarse desde el primer segundo, sin instalar nada extra.

### 5. Escribe el README.md del lenguaje

Incluye:
- Cómo ejecutar el archivo de ejemplo
- Qué extensiones vienen incluidas y para qué sirven
- Estructura sugerida del proyecto

### 6. Actualiza la tabla del README principal

Añade una fila en la tabla de lenguajes del `README.md` raíz.

### 7. Abre un Pull Request

Describe brevemente qué lenguaje añadiste y por qué las extensiones elegidas son las más útiles.

---

## Criterio de calidad

✅ Funciona desde el primer segundo sin pasos extra  
✅ Usa imagen oficial de devcontainers  
✅ Extensiones mínimas pero completas  
✅ Archivo de ejemplo ejecutable  
✅ README claro y breve  

❌ No añadir más de 10 extensiones por lenguaje  
❌ No requerir instalación manual de herramientas  
❌ No incluir dependencias innecesarias  

---

## Lenguajes que se aceptan

Cualquier lenguaje con soporte en VS Code y devcontainers oficiales:

- TypeScript
- Go
- Rust
- Ruby
- PHP
- C / C++
- C#
- Swift
- Kotlin
- R
- Dart / Flutter


