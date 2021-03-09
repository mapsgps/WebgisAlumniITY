<?php
$dataSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQB_VzAmAlGFSvr7dJATzgmc4-JpG-p_t8x3GIxWTBfErX9v9BmsXNeZwRHGX4iF1DW1iyHOXQURZN6/pub?gid=66595639&single=true&output=csv";

$rowCount = 0;
$features = array();
$error = FALSE;
$output = array();

// attempt to set the socket timeout, if it fails then echo an error
if (!ini_set('default_socket_timeout', 15)) {
  $output = array('error' => 'Unable to Change PHP Socket Timeout');
  $error = TRUE;
} // end if, set socket timeout

// if the opening the CSV file handler does not fail
if (!$error && (($dataHandle = fopen($dataSpreadsheetUrl, "r")) !== FALSE)) {
  // while CSV has data, read up to 10000 rows
  while (($csvRow = fgetcsv($dataHandle, 10000, ",")) !== FALSE) {
    $rowCount++;
    if ($rowCount == 1) {
      continue;
    } // skip the first/header row of the CSV

    $output[] = array(
      'type' => 'Feature',
      'properties' => array(
        'Nama' => $csvRow[2],
        'JenisKelamin' => $csvRow[3],
        'NIM' => $csvRow[4],
        'Angkatan' => $csvRow[5],
        'AlamatInstansi' => $csvRow[7],
        'Koordinat_X' => $csvRow[9],
        'Koordinat_Y' => $csvRow[8],
        'Foto' => $csvRow[11]
      ),
      'geometry' => array(
        'type' => 'Point',
        'coordinates' => array(
          $csvRow[9], $csvRow[8], '0.0'
        )
      )

    );
  } // end while, loop through CSV data

  fclose($dataHandle); // close the CSV file handler

}  // end if , read file handler opened

// else, file didn't open for reading
else {
  $output = array('error' => 'Problem Reading Google CSV');
}  // end else, file open fail

$output_new = array(
  'type' => 'FeatureCollection',
  'name' => 'Data_Alumni_ITY_TP',
  'crs' => [
    'type' => 'name',
    'properties' => [
      'name' => 'urn:ogc:def:crs:OGC:1.3:CRS84'
    ]
  ],
  'features' => $output
);

//Convert ke geojson//
$json_dataalumniITYTP = json_encode($output_new, JSON_NUMERIC_CHECK);
echo $json_dataalumniITYTP;
