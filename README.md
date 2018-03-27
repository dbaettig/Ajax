# Async & API
Daniela Baettig | [GitHub Pages]( https://dbaettig.github.io/stockholmfilmfestival-API/) | [GitHub Repository](https://github.com/dbaettig/stockholmfilmfestival-API)

## Om mitt API
Syftet med denna applikation är att kunna ta del av information kring filmerna på stockholms filmfestival 2017.
Man kan söka på filmer genom filmnamet och sortera på kategorier. Klickar man på en film så kan man läsa mer om filmen samt 
se dess trailer.

## OM API
Det här är Stockholms Film Festival API. Den innehåller data från år 2007 - 2017 i nuläget. 
APIet innehåller all information kring film festivalen, jag har valt att endast fokusera på filmerna.
[Stockholm filmfestival API](http://api.stockholmfilmfestival.se/) 

## Arbetsprocess
Jag ändrade API lite mitt i och började således om. Först fokuserade jag bara på javascripten och att få ut informationen
jag var intresserad av. Det gick bra. Det blev svårare när jag blev tvungen att kombinera olika fetch länkar
som innehåll olika information. T ex låg filmbeskrivningarna i en annan länk. Dessa var jag tvungen att genom id:et para ihop
så att jag fick ut rätt beskrivning till rätt id. Jag hade problem med bilderna rätt länge då man var tvungen att ändra i själva
länken till varje bild men det löste jag tillslut med hjälp av replace. I stora drag är jag rätt nöjd och jag lyckades googla fram
sätt att lösa saker på som inte var helt självklara i början.


## Förbättringar
* Göra en dropdown meny till mina kategorier.
* Förbättra klickområdet för mina divar, i nuläget kan man ej klicka på bild eller text för att läsa mer.
* Inte repetera min kod så mycket.


## To Dos :bangbang:
* Utöka informationen på sidan likt filmfestivalens egna sida, mer info om filmvisningar, event etc.

