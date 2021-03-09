var map = L.map('map').setView([-2.405880, 119.318326], 5);

var G_Satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
   maxZoom: 20,
   minZoom: 4,
   subdomains: ["mt0", "mt1", "mt2", "mt3"],
   attribution: '&copy; Google Satellite | <a href="https://wa.me/628562870142" target="_blank" ><b>&copy; Info Aplikasi Lebih Lanjut?</b></a>'
});

var G_Street = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    minZoom: 4,
    subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '&copy; Google Streets | <a href="https://wa.me/628562870142" target="_blank" ><b>&copy; Info Aplikasi Lebih Lanjut?</b></a>'
}).addTo(map);

var G_Terrain = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    minZoom: 4,
    subdomains:['mt0','mt1','mt2','mt3'],
	attribution: '&copy; Google Terrain | <a href="https://wa.me/628562870142" target="_blank" ><b>&copy; Info Aplikasi Lebih Lanjut?</b></a>'
});

var OpenStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 4,
    attribution: '&copy; OpenStreetMap | <a href="https://wa.me/628562870142" target="_blank" ><b>&copy; Info Aplikasi Lebih Lanjut?</b></a>'
});


// Layer Styles \\
var pointIconKampusITY = L.icon({
	iconUrl: 'img/Logo_ITY.png',
	iconSize: [20, 20],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconS2 = L.icon({
	iconUrl: 'img/homeS2.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconTL = L.icon({
	iconUrl: 'img/homeTL.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconTI = L.icon({
	iconUrl: 'img/homeTI.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconTE = L.icon({
	iconUrl: 'img/homeTE.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconTK = L.icon({
	iconUrl: 'img/homeTK.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});

var pointIconTP = L.icon({
	iconUrl: 'img/homeTP.png',
	iconSize: [15, 15],
    iconAnchor: [16, 16],
    popupAnchor: [0, -32]
});


// Kampus ITY\\
function pop_dataKampusITY(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>Alamat</th><td>" + feature.properties.Alamat + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Y + ", " + feature.properties.X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Y + "," + feature.properties.X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikKampusITY.bindPopup(feature.properties.Nama);
			}
		});
	}
	layer.setIcon(pointIconKampusITY);

}
var titikKampusITY = new L.GeoJSON.AJAX('php/kampusITY.geojson', {
	onEachFeature: pop_dataKampusITY,

}).addTo(map);


// Data Alumni S2\\
function pop_dataAlumniS2(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahS2.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconS2);

}
var titikRumahS2 = new L.GeoJSON.AJAX('php/dataalumniITYS2.php', {
	onEachFeature: pop_dataAlumniS2,

}).addTo(map);


// Data Alumni Teknik Lingkungan\\
function pop_dataAlumniTL(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahTL.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconTL);

}
var titikRumahTL = new L.GeoJSON.AJAX('php/dataalumniITYTL.php', {
	onEachFeature: pop_dataAlumniTL,

}).addTo(map);

// Data Alumni Industri\\
function pop_dataAlumniTI(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahTI.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconTI);

}
var titikRumahTI = new L.GeoJSON.AJAX('php/dataalumniITYTI.php', {
	onEachFeature: pop_dataAlumniTI,

}).addTo(map);

// Data Alumni Teknik Energi\\
function pop_dataAlumniTE(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahTE.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconTE);

}
var titikRumahTE = new L.GeoJSON.AJAX('php/dataalumniITYTE.php', {
	onEachFeature: pop_dataAlumniTE,

}).addTo(map);

// Data Alumni Teknik Kelautan\\
function pop_dataAlumniTK(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahTK.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconTK);

}
var titikRumahTK = new L.GeoJSON.AJAX('php/dataalumniITYTK.php', {
	onEachFeature: pop_dataAlumniTK,

}).addTo(map);

// Data Alumni Teknik Pertambangan\\
function pop_dataAlumniTP(feature, layer){
	if(feature.properties) {
		var content = "<table class='table table-sm table-striped table-borderless'>" +
					"<tr><th>Nama</th><td>" + feature.properties.Nama + "</td></tr>" +
					"<tr><th>NIM</th><td>" + feature.properties.NIM + "</td></tr>" +
					"<tr><th>Jenis Kelamin</th><td>" + feature.properties.JenisKelamin + "</td></tr>" +
					"<tr><th>Angkatan</th><td>" + feature.properties.Angkatan + "</td></tr>" +
					"<tr><th>Alamat Instansi</th><td>" + feature.properties.AlamatInstansi + "</td></tr>" +
					"<tr><th>Koordinat</th><td>" + feature.properties.Koordinat_Y + ", " + feature.properties.Koordinat_X +"</td></tr>" +
					"<tr><th>Navigasi Ke Koordinat</th><td><a class='badge badge-secondary' role='button' href='https://www.google.com/maps/dir/?api=1&destination=" + feature.properties.Koordinat_Y + "," + feature.properties.Koordinat_X + "&travelmode=driving' target='_blank'>Lihat Rute</a></td></tr>" +
					"<tr><th>Foto</th><td><a class='badge badge-secondary' role='button' href= "+ feature.properties.Foto + " target='_blank'>Lihat Foto</a></td></tr>" +
					// "<tr><th>Foto</th><td>" + feature.properties.Foto + " replace(/https://drive.google.com/open?id=/g,"http://drive.google.com/uc?export=view&id=  +"</td></tr>" +
					"</table>";
		layer.on({
			click: function (e) {
				$('#feature-title').html(feature.properties.Nama);
				$('#feature-info').html(content);
				$('#featureModal').modal('show');
				titikRumahTP.bindPopup(feature.properties.Nama +"&nbsp;"+"(Angkatan"+"&nbsp;"+ feature.properties.Angkatan+")");
			}
		});
	}
	layer.setIcon(pointIconTP);

}
var titikRumahTP = new L.GeoJSON.AJAX('php/dataalumniITYTP.php', {
	onEachFeature: pop_dataAlumniTP,

}).addTo(map);


var basemaps = {
	label: '<b> Tampil Basemaps</b>',
	children: [
        {label: " Google Streets", layer: G_Street},
        {label: " Google Satellite", layer: G_Satellite},
        // {label: " Google Terrain", layer: G_Terrain},
        {label: " Open Street Map", layer: OpenStreet},
    ]
};

var grupLayers = {
	label: '<b> KETERANGAN</b>',
	selectAllCheckbox: true,
	children: [
	
	{label: '<b> <a href="https://drive.google.com/file/d/1b00YaR4_OgQX-tT9aOuYcBUW1DQ381ZP/view?usp=sharing" target="_blank">KLIK TAMBAH DATA</a></b>', 
	selectAllCheckbox: true,
	children: [
		//{label: "&nbsp;<img src='img/XXX.png' width='20'> xxx", layer: batasAdmin},
		]},
	
	{label: '<b> <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQB_VzAmAlGFSvr7dJATzgmc4-JpG-p_t8x3GIxWTBfErX9v9BmsXNeZwRHGX4iF1DW1iyHOXQURZN6/pubhtml" target="_blank">KLIK TAMPIL DATA</a></b>', 
	selectAllCheckbox: true,
	children: [
		]},

	{label: '<b> LOKASI KAMPUS </b>', 
	selectAllCheckbox: true, children: [
		{label: "&nbsp;<img src='img/Logo_ITY.png' height='18'> Kampus I T Y", layer: titikKampusITY},
		]},


	{label: '<b> INFO ALUMNI </b>', 
	selectAllCheckbox: true, children: [
		{label: "&nbsp;<img src='img/homeS2.png' height='20'> Pasca Sarjana (S2)", layer: titikRumahS2},
		{label: "&nbsp;<img src='img/homeTL.png' height='20'> Teknik Lingkungan", layer: titikRumahTL},
		{label: "&nbsp;<img src='img/homeTI.png' height='20'> Teknik Industri", layer: titikRumahTI},
		{label: "&nbsp;<img src='img/homeTE.png' height='20'> Teknik Energi", layer: titikRumahTE},
		{label: "&nbsp;<img src='img/homeTK.png' height='20'> Teknik Kelautan", layer: titikRumahTK},
		{label: "&nbsp;<img src='img/homeTP.png' height='20'> Teknik Pertambangan", layer: titikRumahTP},
		]},

	]
	
};

var layerTree = L.control.layers.tree(basemaps, grupLayers, {
	collapsed: true
});
layerTree.addTo(map).setBaseTree(basemaps).collapseTree(true).expandTree(true);

L.control.defaultExtent().addTo(map);

//Logo watermark
L.Control.Watermark = L.Control.extend({
	onAdd: function(map) {
		var img = L.DomUtil.create('img');
		img.src = 'img/Logo_ITY.png';
		img.style.width = '50px';
			return img;},
	onRemove: function(map) {
		// Nothing to do here
		}
		});
L.control.watermark = function(opts) {
	return new L.Control.Watermark(opts);}
L.control.watermark({ position: 'bottomleft' }).addTo(map);

//ScaleBar
L.control.scale({
  maxWidth: 100,
  imperial: true,
  position: "bottomleft"
}).addTo(map);

//Mouse Position
L.control.mousePosition(
{position: "bottomleft"
}).addTo(map);


//Measure
let polylineMeasure = L.control.polylineMeasure ({position:'topleft', unit:'metres', showBearings:true, clearMeasurementsOnStop: false, showClearControl: true, showUnitControl: false})
            polylineMeasure.addTo (map);

            function debugevent(e) { console.debug(e.type, e, polylineMeasure._currentLine) }

            map.on('polylinemeasure:toggle', debugevent);
            map.on('polylinemeasure:start', debugevent);
            map.on('polylinemeasure:resume', debugevent);
            map.on('polylinemeasure:finish', debugevent);
            map.on('polylinemeasure:clear', debugevent);
            map.on('polylinemeasure:add', debugevent);
            map.on('polylinemeasure:insert', debugevent);
            map.on('polylinemeasure:move', debugevent);
            map.on('polylinemeasure:remove', debugevent);


//Graticule
L.latlngGraticule({
			showLabel: true,
			color: '#4B0082',
			zoomInterval: [
				{start: 2, end: 3, interval: 20},
				{start: 4, end: 4, interval: 7.5},
				{start: 5, end: 7, interval: 5},
				{start: 8, end: 9, interval: 0.25},
				{start: 10, end: 13, interval: 0.125},
				{start: 14, end: 16, interval: 0.03125},
			]
		}).addTo(map);

// get coordinate 1
// map.on ('click',
// function(e){ 
// var coord = e.latlng.toString().split(',');
// var lat = coord[0].split('(');
// var lng = coord[1].split(')');
// alert("Lokasi Klik Anda: Lat.(L): " + lat[1] + " dan Long.(BT):" + lng[0] + ".  "+ "Catat kemudian masukkan di Form");
// });
// window.load = main;

// get coordinate 2      
var popup = L.popup();
function onMapClick(e) {
    popup 
        .setLatLng(e.latlng)
     	.setContent("Lokasi Klik Anda, Catat masukkan di Form " + e.latlng.toString ())
        .openOn(map);
}
map.on('click', onMapClick);

