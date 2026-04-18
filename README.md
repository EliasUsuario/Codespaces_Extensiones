# ⚡ codespaces_configurado

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-brightgreen.svg)](https://github.com/topics/beginner-friendly)
[![Codespaces Ready](https://img.shields.io/badge/Codespaces-Ready-blue?logo=github)](https://github.com/features/codespaces)

> **Stop configuring. Start coding.**

¿Cansado de instalar extensiones y configurar tu entorno cada vez que abres un Codespace nuevo?  
Este repositorio lo hace por ti.

---

## Así de simple

```
Quiero Python   →  entra en /python   →  abre Codespaces  →  ya funciona ✅
Quiero Java     →  entra en /java     →  abre Codespaces  →  ya funciona ✅
Quiero JS       →  entra en /javascript → abre Codespaces →  ya funciona ✅
Quiero HTML/CSS →  entra en /html-css →  abre Codespaces  →  ya funciona ✅
```

---

## 🗂️ Lenguajes disponibles

| Lenguaje | Carpeta | Extensiones incluidas | Estado |
|---|---|---|---|
| 🐍 Python | [`/python`](./python) | Pylance, Black Formatter, Jupyter | ✅ Listo |
| ☕ Java | [`/java`](./java) | Extension Pack for Java, Maven for Java | ✅ Listo |
| 🟨 JavaScript | [`/javascript`](./javascript) | ESLint, Prettier, Node.js snippets | ✅ Listo |
| | 🎨 HTML & CSS | [`/html-css`](./html-css) | Live Preview, HTML Snippets, CSS IntelliSense (incluye JS básico) | ✅ Listo |Listo |

---

## 📦 ¿Qué incluye cada carpeta?

```
/python
  ├── .devcontainer/
  │     └── devcontainer.json   ← la magia que configura todo
  ├── main.py                   ← archivo listo para ejecutar
  └── README.md                 ← instrucciones del lenguaje
```

Cada lenguaje sigue la misma estructura. Sin sorpresas.

---

## ¿Por qué decidí crearlo?

GitHub Codespaces es increíble. Pero cada vez que creas uno nuevo, el ritual es el mismo:

- ❌ Instalar extensiones a mano
- ❌ Configurar el intérprete o compilador
- ❌ Buscar qué linter usar
- ❌ Ajustar el formatter
- ❌ Repetirlo todo la próxima vez

Esto no tiene sentido si solo quieres **aprender**, **hacer un proyecto rápido** o **enseñar a otros**.

Este repositorio existe para que tengas un entorno profesional y funcional en **menos de 60 segundos**.

---

##  ¿Cómo usarlo?

### ⭐ Opción recomendada — Use this template
Pulsa **"Use this template"** arriba a la derecha en GitHub.  
Crea tu propio repositorio con toda la estructura lista. Luego abre Codespaces desde la carpeta del lenguaje que quieras.

### Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/codespaces_configurado.git
cd codespaces_configurado/python  # o el lenguaje que quieras
```

### Solo copiar una carpeta
Si solo necesitas Python, copia únicamente la carpeta `/python` a tu proyecto. El `.devcontainer/` es todo lo que necesitas.

---

## 🤝 Contribuir un nuevo lenguaje

¿Usas Go, Rust, Ruby, C++, TypeScript...? Puedes añadirlo.

1. Haz fork del repositorio
2. Crea una carpeta: `/go`, `/rust`, `/typescript`, etc.
3. Añade `.devcontainer/devcontainer.json` con las extensiones del lenguaje
4. Añade un archivo de ejemplo y un `README.md` mínimo
5. Abre un Pull Request

**Regla de oro:** debe funcionar desde el primer segundo. Sin pasos extra.

Consulta [`CONTRIBUTING.md`](./CONTRIBUTING.md) para la guía completa.

---

## 📄 Licencia

MIT — úsalo, cópialo, forkéalo, compártelo libremente.

---

<p align="center">
  Hecho para que el mundo pierda menos tiempo configurando entornos.<br>
  Si te fue útil, dale una ⭐ — ayuda a que más gente lo encuentre.
</p>
