# StopWatch
Per un progetto di gruppo, previsto dal mio corso di studi, ho avuto modo di sviluppare una piccola applicazione web che integra un NVR (Network Video Recorder) per catturare e visualizzare filmati di sorveglianza.

Il software comprende:
- Un server web API sviluppato con ASP.NET Core, che interagisce con l'API di un NVR per scaricare e salvare registrazioni video specifiche
- Un'interfaccia web in React con Typescript e Tailwind CSS per la visualizzazione e il download delle registrazioni delle telecamere
- Uno script per una scheda Arduino collegata a un bottone, una volta premuto la scheda interagisce con il server web API per lo scaricamento dei filmati.
