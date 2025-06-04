# 🎓 Nordic Studio – Web para ofrecer servicios de inglés

Sitio web profesional desarrollado para una profesora de inglés, inspirado en el diseño de [inglesconomar.com](https://inglesconomar.com), con funcionalidades modernas y responsive.

---

## 🚀 Despliegue

El sitio está actualmente desplegado en **Netlify** y disponible en:

👉 [https://nordic-studio.netlify.app](https://nordic-studio.netlify.app)

---

## 🛠️ Tecnologías utilizadas

- [Angular 16+](https://angular.io/)
- Bootstrap 5
- AOS (Animate On Scroll)
- HTML5 / CSS3
- Git + GitHub para control de versiones
- Netlify para hosting y CI/CD

---

## 📁 Estructura del proyecto

```
nordic-studio/
├── src/
│   ├── app/
│   ├── assets/
│   ├── index.html
│   └── ...
├── angular.json
├── netlify.toml
├── package.json
└── README.md
```

---

## 🧠 Funcionalidades clave

- Diseño responsive y elegante.
- Menú hamburguesa en dispositivos móviles.
- Cambio de tema dinámico (modo claro / oscuro).
- Animaciones suaves con AOS.
- Íconos e imágenes personalizados.
- Preparado para escalar con rutas como `/blog`, `/clases`, etc.

---

## ⚙️ Comandos útiles

```bash
# Instalar dependencias
npm install

# Compilar para desarrollo
ng serve

# Compilar para producción
npm run build
```

---

## 🧩 Despliegue en Netlify

```toml
[build]
  command = "ng build --configuration production"
  publish = "dist/nordic-studio/browser/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 👨‍💻 Desarrollado por

**Erick Loayza**  
Arquitecto de soluciones comerciales y desarrollador web  
📬 jeloech@icloud.com | 📱 +51 923612736  
🌐 [https://alesso.netlify.app](https://nordic-studio.netlify.app/)

---

## 📸 Vista previa

> Podés agregar acá una captura del sitio o un gif de scroll para que se vea lo bien que quedó.