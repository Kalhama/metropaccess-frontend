# Matka-aikakartta #

![image of the webpage](example.png)

Visualisoi pääkaupunkiseudun ajallista saavutettavuutta julkisella liikenteellä. Sivusto käyttää Digital Geography Labin saavutettavuus- ja liikkumistutkimuskeskuksen keräämää dataa.

Siirry verkkosivulle: [Matka-aikakartta](https://matka-aika.kalhama.fi).

# Kehitys #

## Ympäristömuuttujat

Sovellus käyttää ympäristömuuttujia konfiguraatioon. Kopioi `.env.example` tiedosto nimellä `.env` ja aseta omat arvot:

```
REACT_APP_MAPBOX_ACCESS_TOKEN=your_mapbox_access_token_here
REACT_APP_API_URL=http://localhost:3000
```

## Kehitysympäristön käynnistys

```
pnpm install
pnpm start
```

# Viitteet #

https://blogs.helsinki.fi/saavutettavuus/

Datan/menetelmien kuvaus: Toivonen, T., M. Salonen, H. Tenkanen, P. Saarsalmi, T. Jaakkola & J. Järvi (2014). Joukkoliikenteellä, autolla ja kävellen: Avoin saavutettavuusaineisto pääkaupunkiseudulla. Terra 126: 3, 127-136.

Datan DOI-tunniste:
Tenkanen, H., J.L. Espinosa, E. Willberg, V. Heikinheimo, A. Tarnanen, T. Jaakkola, J. Järvi, M. Salonen, T. Toivonen (2018). Helsinki Region Travel Time Matrix 2018. DOI: 10.13140/RG.2.2.20858.39362

—————————————————————————————————–
LISENSSI
—————————————————————————————————–
Pääkaupunkiseudun-Matka-aikamatriisi, jonka tekijä on MetropAccess-hanke / Accessibility Research Group (Helsingin Yliopisto) on lisensoitu Creative Commons Nimeä 4.0 Kansainvälinen -lisenssillä. Lisätietoa lisenssistä: http://creativecommons.org/licenses/by/4.0/deed.fi


Visualisaation ohjelmistolähdekoodi, jonka tekijä on Max Kalhama on lisensoitu Creative Commons Nimeä 4.0 Kansainvälinen -lisenssillä
