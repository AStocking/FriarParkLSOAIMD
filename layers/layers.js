var wms_layers = [];

var format_WestBromwichBdgs_0 = new ol.format.GeoJSON();
var features_WestBromwichBdgs_0 = format_WestBromwichBdgs_0.readFeatures(json_WestBromwichBdgs_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestBromwichBdgs_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestBromwichBdgs_0.addFeatures(features_WestBromwichBdgs_0);
var lyr_WestBromwichBdgs_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestBromwichBdgs_0, 
                style: style_WestBromwichBdgs_0,
                popuplayertitle: 'West Bromwich Bdgs',
                interactive: true,
                title: '<img src="styles/legend/WestBromwichBdgs_0.png" /> West Bromwich Bdgs'
            });
var format_WestBromwichTown_1 = new ol.format.GeoJSON();
var features_WestBromwichTown_1 = format_WestBromwichTown_1.readFeatures(json_WestBromwichTown_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestBromwichTown_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestBromwichTown_1.addFeatures(features_WestBromwichTown_1);
var lyr_WestBromwichTown_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestBromwichTown_1, 
                style: style_WestBromwichTown_1,
                popuplayertitle: 'West Bromwich Town',
                interactive: true,
                title: '<img src="styles/legend/WestBromwichTown_1.png" /> West Bromwich Town'
            });
var format_WestBromwichRoads_2 = new ol.format.GeoJSON();
var features_WestBromwichRoads_2 = format_WestBromwichRoads_2.readFeatures(json_WestBromwichRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestBromwichRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WestBromwichRoads_2.addFeatures(features_WestBromwichRoads_2);
var lyr_WestBromwichRoads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WestBromwichRoads_2, 
                style: style_WestBromwichRoads_2,
                popuplayertitle: 'West Bromwich Roads',
                interactive: true,
                title: '<img src="styles/legend/WestBromwichRoads_2.png" /> West Bromwich Roads'
            });
var format_WBLSAOMASTER_3 = new ol.format.GeoJSON();
var features_WBLSAOMASTER_3 = format_WBLSAOMASTER_3.readFeatures(json_WBLSAOMASTER_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WBLSAOMASTER_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WBLSAOMASTER_3.addFeatures(features_WBLSAOMASTER_3);
var lyr_WBLSAOMASTER_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WBLSAOMASTER_3, 
                style: style_WBLSAOMASTER_3,
                popuplayertitle: 'WBLSAOMASTER',
                interactive: true,
                title: '<img src="styles/legend/WBLSAOMASTER_3.png" /> WBLSAOMASTER'
            });

lyr_WestBromwichBdgs_0.setVisible(true);lyr_WestBromwichTown_1.setVisible(true);lyr_WestBromwichRoads_2.setVisible(true);lyr_WBLSAOMASTER_3.setVisible(true);
var layersList = [lyr_WestBromwichBdgs_0,lyr_WestBromwichTown_1,lyr_WestBromwichRoads_2,lyr_WBLSAOMASTER_3];
lyr_WestBromwichBdgs_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_WestBromwichTown_1.set('fieldAliases', {'ID': 'ID', 'Town': 'Town', });
lyr_WestBromwichRoads_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_WBLSAOMASTER_3.set('fieldAliases', {'fid': 'fid', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'SandwellLS': 'SandwellLS', 'Sandwell_1': 'Sandwell_1', 'Sandwell_2': 'Sandwell_2', 'Sandwell_3': 'Sandwell_3', 'Sandwell_4': 'Sandwell_4', 'Sandwell_5': 'Sandwell_5', 'Sandwell_6': 'Sandwell_6', 'Sandwell_7': 'Sandwell_7', 'Sandwell_8': 'Sandwell_8', 'Sandwell_9': 'Sandwell_9', 'Sandwell10': 'Sandwell10', 'Sandwell11': 'Sandwell11', 'Sandwell12': 'Sandwell12', 'Sandwell13': 'Sandwell13', 'Sandwell14': 'Sandwell14', 'Sandwell15': 'Sandwell15', 'Sandwell16': 'Sandwell16', 'Sandwell17': 'Sandwell17', 'Sandwell18': 'Sandwell18', 'Sandwell19': 'Sandwell19', 'SandwellLSOA_LSOAname 2021': 'SandwellLSOA_LSOAname 2021', 'SandwellLSOA_Local Authority District code (2024)': 'SandwellLSOA_Local Authority District code (2024)', 'SandwellLSOA_Local Authority District name (2024)': 'SandwellLSOA_Local Authority District name (2024)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'SandwellLSOA_Sandwell Rank (High is Worse)', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'SandwellLSOA_Income Rank (where 1 is most deprived)', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'SandwellLSOA_Employment Rank (where 1 is most deprived)', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'SandwellLSOA_Crime Rank (where 1 is most deprived)', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', 'layer': 'layer', 'path': 'path', });
lyr_WestBromwichBdgs_0.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_WestBromwichTown_1.set('fieldImages', {'ID': 'TextEdit', 'Town': 'TextEdit', });
lyr_WestBromwichRoads_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_WBLSAOMASTER_3.set('fieldImages', {'fid': 'Range', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'SandwellLS': 'TextEdit', 'Sandwell_1': 'TextEdit', 'Sandwell_2': 'TextEdit', 'Sandwell_3': 'Range', 'Sandwell_4': 'Range', 'Sandwell_5': 'Range', 'Sandwell_6': 'Range', 'Sandwell_7': 'Range', 'Sandwell_8': 'Range', 'Sandwell_9': 'Range', 'Sandwell10': 'Range', 'Sandwell11': 'Range', 'Sandwell12': 'Range', 'Sandwell13': 'Range', 'Sandwell14': 'Range', 'Sandwell15': 'Range', 'Sandwell16': 'Range', 'Sandwell17': 'Range', 'Sandwell18': 'Range', 'Sandwell19': 'Range', 'SandwellLSOA_LSOAname 2021': 'TextEdit', 'SandwellLSOA_Local Authority District code (2024)': 'TextEdit', 'SandwellLSOA_Local Authority District name (2024)': 'TextEdit', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'Range', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WestBromwichBdgs_0.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_WestBromwichTown_1.set('fieldLabels', {'ID': 'no label', 'Town': 'no label', });
lyr_WestBromwichRoads_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_WBLSAOMASTER_3.set('fieldLabels', {'fid': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'SandwellLS': 'no label', 'Sandwell_1': 'no label', 'Sandwell_2': 'no label', 'Sandwell_3': 'no label', 'Sandwell_4': 'no label', 'Sandwell_5': 'no label', 'Sandwell_6': 'no label', 'Sandwell_7': 'no label', 'Sandwell_8': 'no label', 'Sandwell_9': 'no label', 'Sandwell10': 'no label', 'Sandwell11': 'no label', 'Sandwell12': 'no label', 'Sandwell13': 'no label', 'Sandwell14': 'no label', 'Sandwell15': 'no label', 'Sandwell16': 'no label', 'Sandwell17': 'no label', 'Sandwell18': 'no label', 'Sandwell19': 'no label', 'SandwellLSOA_LSOAname 2021': 'no label', 'SandwellLSOA_Local Authority District code (2024)': 'no label', 'SandwellLSOA_Local Authority District name (2024)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'no label', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_WBLSAOMASTER_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});