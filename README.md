# FavTweet 💟
Un sitio en donde puedes organizar los tweets que más te gusten en categorías! Además de un buscador que te puede salvar si tienes muchos tweets (twitter no tiene eso, solo digo... 👀 )


## 🔎 Formas de verlo

- El sitio en producción está en  [este link!](https://favtweet.vercel.app/), si quieres verlo en la web puedes darle click.
- Si quieres verlo en un entorno de desarrollo local, debes clonar el repo y ejecutar `npm install`, y agregar en `env.local` la variable de entorno: `VITE_SERVICE_GET_TWEET=https://favtweet.madeval.workers.dev/`. (No pasa nada, pero OJITO! 😡).


## 🤓 Datos interasantes

El sitio está más pensado para Desktop, por lo que hice más trabajo de UI ahí, aun así se puede usar sin problemas pantallas más chicas!

La API de Twitter recibe un token, y por razones de seguridad no puede ser ejecutada en el cliente, así que fue una gran excusa para crear una [cloudflare worker](https://workers.cloudflare.com/), y tengo que decir que es super facil y rapido! Lo recomiendo 😎

Es uno de esos side projects que uno usa en su dia a dia, y si inspiracion fue a partir de una necesidad personal, así que quise hacerlo con cariño y que se viera bien ✨


## 📸 Preview del sitio

![image](https://user-images.githubusercontent.com/55862658/164574118-231173b9-1147-485d-aa72-9edaa127b912.png)
