# Zombies Tracker

Web app para trackear partidas de Zombies de Call of Duty. Sin frameworks, sin dependencias externas — HTML, CSS y JavaScript puro

---

## Juegos soportados

| Juego | Mapas |
|---|---|
| World at War | 4 |
| Black Ops 1 | 10 |
| Black Ops 2 | 9 |
| Black Ops 3 | 14 |

---

## Mapas

### World at War
Nacht der Untoten · Verrückt · Shi No Numa · Der Riese

### Black Ops 1
Ascension · Kino Der Toten · FIVE · Call of the Dead · Shangri-La · Moon · Verrückt · Shi No Numa · Der Riese · Nacht der Untoten

### Black Ops 2
Bus Depot · TranZit · Town · Farm · Nuketown Zombies · Die Rise · Mob of the Dead · Buried · Origins

### Black Ops 3
Shadows of Evil · The Giant · Der Eisendrache · Zetsubou No Shima · Gorod Krovi · Revelations · Nacht der Untoten · Shi No Numa · Verrückt · Kino Der Toten · Ascension · Shangri-La · Moon · Origins

---

## Secciones del tracker

### Drop Cycle
Trackea los drops que van cayendo en la partida.

- **4 drops base siempre presentes:** Max Ammo, Insta Kill, Double Points, Nuke
- **Toggles opcionales** (se activan según el mapa):
  - Carpenters
  - Fire Sale (Box)
  - Death Machine
  - Power o Quick Revive
- **Drops siempre activos** sin toggle (depende del mapa):
  - Zombie Blood — Origins (BO2 y BO3)
  - Death Machine base — Nacht der Untoten y Shi No Numa (BO3)
  - Tram Fuse — Der Eisendrache (BO3) exclusivo
- Al hacer click en un drop se **ilumina en rojo** y aparece un **badge numerado** con el orden de uso
- Click de nuevo sobre un drop ya marcado lo **desmarca** y renumera el resto
- El ciclo **se completa automáticamente** cuando se marcan todos los drops activos
- Historial de los **últimos 20 ciclos** con el orden exacto de drops

### Mystery Box Locations
Trackea las ubicaciones de la caja misteriosa del mapa actual.

- Muestra todas las ubicaciones disponibles para ese mapa con su foto
- Estadísticas en tiempo real: ciclo actual, ubicaciones visitadas, ciclos completados
- Al visitar todas las ubicaciones el ciclo se completa automáticamente
- Historial de los **últimos 20 ciclos** con la ruta seguida

### Gobblegum Cycle *(exclusivo Black Ops 3)*
Trackea los 5 Gobblegums de tu loadout.

- **5 slots** configurables individualmente
- Cada slot tiene un botón **"+"** que abre un **modal** con los 63 Gobblegums disponibles, buscables por nombre
- Al hacer click en un gum se ilumina con la animación roja y el badge numerado igual que los drops
- Click de nuevo desmarca el gum y renumera
- El ciclo se completa cuando se usan todos los gums seleccionados
- **Reset Cycle** — limpia el ciclo actual manteniendo la selección de gums
- **Clear All** — limpia el ciclo, resetea los slots y borra el historial completo
- Historial de los **últimos 20 ciclos** en orden de uso

### Special Rounds
Información sobre los rounds especiales del mapa seleccionado.

| Tipo | Descripción |
|---|---|
| Hellhounds | Rounds dedicados. Rango del primer round y ciclo configurado por mapa |
| Space Monkeys | Rounds dedicados (Ascension) |
| Pentagon Thief | Rounds dedicados (FIVE) |
| George A. Romero | Jefe permanente. Retrocede ~2 rounds al recibir suficiente daño |
| Napalm & Shrieker | Se mezclan en rondas normales desde ~round 4 |
| Astronaut Zombie | Aparece en rondas normales, teletransporta y roba un perk |
| Sin rounds especiales | Se indica explícitamente |

Para mapas con rounds dedicados: campo para introducir el round del último especial y el tracker calcula el rango estimado del próximo.

---

## Calculadoras

Todas accesibles como acordeón expandible.

| Calculadora | Qué hace |
|---|---|
| **Zombie Round Stats** | Muestra el número de zombies por ronda según jugadores (1-4), puntos por kill, hordas y estimación de SPH |
| **SPH Calculator** | Calcula el SPH real de la sesión: jugadores, ronda actual y tiempo transcurrido |
| **Round Time Calculator** | Estima el tiempo para completar una ronda específica según SPH |
| **Combined Round Time** | Tiempo total desde la ronda inicial hasta la final según SPH y jugadores |
| **Average SPH** | SPH promedio entre dos sesiones con distinto tiempo y puntos |

---

## Recursos

Acordeón con información de referencia. Se filtra por juego automáticamente.

| Recurso | Juegos | Contenido |
|---|---|---|
| **Nuke Timing** | BO1, WaW | Tiempo que dura el Nuke por mapa, con tabs por número de jugadores (1-4) |
| **Instakill Rounds** | Todos | Tabla de rounds donde el Instakill activo multiplica el daño |
| **Instabug** | BO1, WaW | Lista de rounds donde el Instakill deja de funcionar (fallo del juego a partir de R139) |

---

## Focus Mode

Botón flotante `⊞` disponible en el tracker. Oculta las secciones secundarias y permite fijar hasta **2 paneles extra** (calculadoras o recursos) junto al tracker para tenerlos visibles mientras juegas.

Los paneles extra son configurables con un selector desplegable. Las opciones disponibles cambian según el juego seleccionado.

---

## Otras funcionalidades

- **Minimize por sección** — cada sección tiene un botón `▲/▼` para colapsar/expandir
- **Toast de notificación** — aparece centrado al completar cualquier ciclo
- **Estado por mapa** — cada mapa guarda su propio estado (historial, ciclos, drops) de forma independiente durante la sesión
- **Fondo de estrellas animado** — canvas con starfield en tiempo real
- **100% local** — ninguna imagen se carga desde internet

---

## Estructura de archivos

```
/
├── index.html
├── script.js
├── style.css
└── imagenes/
    ├── icons/          # Iconos de drops (ammo, insta, dp, nuke, carp, fs, dm, zb)
    ├── gums/           # 63 imágenes de Gobblegums (BO3)
    ├── mapasblackops3/ # Miniaturas de mapas BO3 + tramfuse.png
    └── maps/           # Miniaturas y fotos de ubicaciones por mapa
        ├── Ascension/
        ├── Kino Der Toten/
        ├── FIVE/
        ├── Call of The Dead/
        ├── Shangri-La/
        ├── Moon/
        ├── Verruckt/
        ├── Shi No Numa/
        ├── Der Riese/
        ├── Nacht der Untoten/
        ├── Nuketown Zombies/
        ├── Origins/
        └── ...
```
