const carrito = [];
const productos = [{ id: 1, nombre: "AMD RYZEN 7 5700G CON VIDEO INTEGRADO",  precio: 85370,  img: './imagenes/pg-r5700g.jpeg' },
                   { id: 2, nombre: "MOUSE GAMER LOGITECH G502 SE HERO",  precio: 17553, img: './imagenes/Mouse3.png' },
                   { id: 3, nombre: "AMD RYZEN 5 5600G CON VIDEO INTEGRADO",  precio: 79350, img: './imagenes/pg-r5700g.jpeg' },
                   { id: 4, nombre: "PLAY STATION 5 300GB + 2 JUEGOS ", precio: 334253, img: './imagenes/consolas.jpg' },
                   { id: 5, nombre: "DISCO EXTERNO 2TB WESTERN DIGITAL", precio: 64253, img: './imagenes/DiscoExterno.jpeg' },
                   { id: 6, nombre: "AIR COORLER CPU REFRIGERACION LIQUIDA", precio: 134253, img: './imagenes/Coolers.jpeg' },
                   { id: 7, nombre: "MODEM 4 ANTENAS ROUTER WI-FI", precio: 21322, img: './imagenes/conctividad.jpeg' },
                   { id: 8, nombre: "NOTEBOOK 15,6' i5 8GB DDR4 512GB NVME", precio: 355403, img: './imagenes/notebook.jpeg' },
                  { id: 9, nombre: "CAMARA PHILIPS P406 1080P FULL HD", precio: 25403, img: './imagenes/PHILIPS-P406-FHD-1080P-USB.png' },
                  { id: 10, nombre: "MOTHER ASUS X570 TUF GAMMING", precio: 125403, img: './imagenes/MOTHERASUSX570TUF-GAMMING.png' },
                  { id: 11, nombre: "MOTHER MSI H310M PRO VDH PLUS", precio: 28403, img: './imagenes/MSI-H310M-PRO-VDH.png' },
                  { id: 12, nombre: "GABINETE MSI MAG FORCE 2 AM4", precio: 35403, img: './imagenes/MSI-MAGFORCE2.png' },
                  { id: 13, nombre: "DISCO INTERNO NVME WESTERN DIGITAL 1TB", precio: 55403, img: './imagenes/nvme-wd.png' },
                  { id: 14, nombre: "DISCO INTERNO KINGSTON SSD 240GB", precio: 21403, img: './imagenes/SSD240GB-KINGSTON-SA400S.png' },
                  { id: 15, nombre: "GABINETE THERMALTAKE RYZEN V200 + COOLERS", precio: 35403, img: './imagenes/TT-RYZEN-V200.png' },
                  { id: 16, nombre: "MONITOR SAMSUNG LED 34 PULGADAS J5505", precio: 355403, img: './imagenes/MONITOR-SAMSUNG.jpg' },
                  { id: 17, nombre: "INTEL CORE I9 12700K 12 GENERACION", precio: 175403, img: './imagenes/INTEL222.jpg' },
                  { id: 18, nombre: "MOUSE PAD GX CON RGB + USB 30X60", precio: 21403, img: './imagenes/Mouse-Pad.jpeg' },
                  { id: 19, nombre: "DISCO INTERNO SSD NETAC 512 GB 7200RPM", precio: 49563, img: './imagenes/PG-SSD.jpeg' },
                  { id: 20, nombre: "MOUSE GAMER EVGA 6000 DPI ULTRA", precio: 35403, img: './imagenes/Mouse.png' },
                  { id: 21, nombre: "MOUSE GAMER GX 5400 DPI POWER", precio: 295403, img: './imagenes/mouse1.jpg' },
                  { id: 22, nombre: "RTX 3080 TI 12 GB TUF GAMING", precio: 535403, img: './imagenes/Gpu7.jpeg' },
                  { id: 23, nombre: "AMD RADEON ASROCK RX6600XT 8 GB", precio: 235403, img: './imagenes/Gpu1.png' },
                  { id: 24, nombre: "AMD RADEON GIGABYTE RX6800XT 16 GB", precio: 412803, img: './imagenes/Gpu5.png' },
                  { id: 25, nombre: "RTX 3080 TI 12 GB EVGA FTW3 ULTRA", precio: 655403, img: './imagenes/Gpu3.jpeg' },
                  ];