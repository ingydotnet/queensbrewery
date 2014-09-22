var geocoder;
var map;

function initialize() {

	var locations = [
      ['<strong>Ace Supermarket</strong><br/>75 7th Ave.<br/>Park Slope, Brooklyn', 40.40501,-73.58500, 1],
			['<strong>Albatross Bar</strong><br/>36-19 24th Ave.<br/>Astoria, Queens', 40.76504,-73.91375, 1],	
			['<strong>Alobar</strong><br/>46-42 Vernon Blvd.<br/>Long Island City, Queens', 40.745792,-73.953209, 1],  
      ['<strong>Associated Beverage</strong><br/>1735 Julia Goldbach Ave<br/>Ronkonkoma, Long Island', 40.787888,-73.125061, 1],
      ['<strong>Associated Supermarket</strong><br/>229 Knickerbocker Ave.<br/>Bushwick, Brooklyn', 40.70311,-73.92543, 1],	
      ['<strong>Astoria Bier & Cheese</strong><br/>34-14 Broadway<br/>Astoria, Queens', 40.760418,-73.922641, 1],
      ['<strong>Astoria Brewhouse</strong><br/>28-50 31st Street<br/>Astoria, Queens', 40.767397,-73.921366, 1],
      ['<strong>Alchemy</strong><br/>56 Fifth Ave<br/>Park Slope, Brooklyn', 40.68136,-73.977408, 1],
      ['<strong>Beer Table Pantry</strong><br/>87 E 42nd St.<br/>Midtown, Manhattan', 40.75249,-73.97740, 1],
      ['<strong>Bellport Beer</strong><br/>417 Station Rd<br/>Bellport, Long Island', 40.800881,-72.950324, 1],
      ['<strong>Bourbon Street</strong><br/>40-12 Bell Blvd.<br/>Bayside, Queens', 40.763887,-73.77128, 1],  
      ['<strong>Black Swan</strong><br/>1048 Bedford Ave<br/>Bedford Stuyvesant, Brooklyn', 40.689055,-73.955368, 1],
      ['<strong>Brinkley&#39;s Station</strong><br/>153 E 60th Street<br/>Midtown, Manhattan', 40.762816,-73.967049, 1],   
      ['<strong>Broadway Station</strong><br/>30-09 Broadway<br/>Astoria, Queens', 40.762334,-73.925649, 1],
			['<strong>Brooklyn Point Cafe</strong><br/>924 Manhattan Ave.<br/>Greenpoint, Brooklyn', 40.73104,-73.95410, 1],
			['<strong>Bubba&#38;s Burrito Bar</strong><br/>513 Main St.<br/>Islip, Long Island', 40.72929,-73.21303, 1],
			['<strong>Bubby&#38;s</strong><br/>120 Hudson St.<br/>TriBeCa, Manhattan', 40.71981,-74.00831, 1],
      ['<strong>Bud&#39;s Alehouse</strong><br/>34-02 Steinway<br/>Astoria, Queens', 40.75664,-73.921408, 1],
      ['<strong>Burkes Pub</strong><br/>69-47 Grand Ave.<br/>Maspeth, Queens', 40.726984,-73.894071, 1],
      ['<strong>Caskey&#39;s Tavern</strong><br/>6869 Fresh Pond Rd.<br/>Glendale, Queens', 40.702142,-73.895062, 1],      
      ['<strong>Ceili House</strong><br/>69-56 Grand Ave.<br/>Maspeth, Queens', 40.72669,-73.893506, 1],
			['<strong>Coals</strong><br/>35 1/2 N Main St.<br/>Port Chester, Upstate', 41.00035,-73.66349, 1],   
      ['<strong>Community Beverage</strong><br/>80-04 Grand Ave.<br/>Maspeth, Queens', 40.72188,-73.904431, 1],      
      ['<strong>Connolly&#39;s Corner</strong><br/>7115 Grand Ave.<br/>Maspeth, Queens', 40.728275,-73.891884, 1],
			['<strong>Coopers Craft</strong><br/>87 2nd Ave.<br/>Noho, Manhattan', 40.72705,-73.98920, 1],    
      ['<strong>Courtyard Ale House</strong><br/>40-18 Queens Blvd.<br/>Astoria, Queens', 40.743362,-73.919204, 1],  
      ['<strong>Cobblestones</strong><br/>117-18 Queens Blvd<br/>Forest Hills, Queens', 40.715875,-73.833343, 1],
      ['<strong>Craftsman Ale House</strong><br/>235 Harrison Ave.<br/>Harrison, New York', 40.715875,-73.833343, 1],
			['<strong>Cronin &amp; Phelan&#39;s</strong><br/>38-14 Broadway<br/>Astoria, Queens', 40.75890,-73.91942, 1],
      ['<strong>Danny Boy&#39;s</strong><br/>6456 Dry Harbor Rd.<br/>Middle Village, Queens', 40.718505,-73.872645, 1],
      ['<strong>Dark Horse Restaurant</strong><br/>1 E Main St.<br/>Riverhead, Long Island', 40.80363,-72.76235, 1],
			['<strong>Decicco&#39;s Marketplace</strong><br/>Route 121 &amp; 35A<br/>Cross River, Upstate', 41.27494,-73.60998, 1],
			['<strong>Ditmars Station</strong><br/>22-55 31st St.<br/>Astoria, Queens', 40.767374,-73.920981, 1],
      ['<strong>Dog & Duck</strong><br/>45-20 Skillman Ave<br/>Sunnyside, Queens', 40.746377,-73.918193, 1], 
			['<strong>Dumont</strong><br/>432 Union Ave.<br/>Williamsburg, Brooklyn', 40.71337,-73.95127, 1],
      ['<strong>DuMont Burger</strong><br/>314 Bedford Ave<br/>Williamsburg, Brooklyn', 40.713643,-73.961954, 1],
			['<strong>Fiamma 41</strong><br/>214-26 41st Ave.<br/>Bayside, Queens', 40.76368,-73.77001, 1],
      ['<strong>Five Napkins</strong><br/>35-01 36th St.<br/>Astoria, Queens', 40.755858,-73.924478, 1],   
      ['<strong>Flying Pig</strong><br/>70-28 Austin Street<br/>Forest Hills, Queens', 40.720383,-73.846048, 1],   
	  	['<strong>Feile</strong><br/>131 W 33rd Street<br/>Midtown, Manhattan', 40.749881,-73.989689, 1],   
			['<strong>Foodtown</strong><br/>47-33 Bell Blvd.<br/>Bayside, Queens', 40.75627,-73.76738, 1],
			['<strong>Good Beer</strong><br/>422 East 9th St.<br/>East Village, Manhattan', 40.72754,-73.98390, 1],
			['<strong>Hollow Nickel</strong><br/>494 Atlantic Ave.<br/>Boerum Hill, Brooklyn', 40.68551,-73.98199, 1],
      ['<strong>Hurricane Grill & Wings</strong><br/>151 S Central Park Ave.<br/>Hartsdale, New York', 41.01526,-73.802859, 1],   
      ['<strong>Irish Cottage</strong><br/>10807 72nd Ave.<br/>Forest Hills, Queens', 40.715034,-73.84535, 1],   
			['<strong>Jade Eatery</strong><br/>1 Station Square<br/>Forest Hills, Queens', 40.71851,-73.84505, 1],
      ['<strong>Katch</strong><br/>31-19 Newtown Ave.<br/>Astoria, Queens', 40.767141,-73.92044, 1],  
      ['<strong>Keuka Kafe</strong><br/>112-04 Queens Blvd<br/>Maspeth, Queens', 40.723633,-73.849233, 1],      
      ['<strong>Lake Ronkonkoma Beverages</strong><br/>316 Smithtown Blvd<br/>Ronkonkoma, Long Island', 40.80043,-73.109629, 1],           
			['<strong>Lavender Lake</strong><br/>383 Carroll St.<br/>Carroll Gardens, Brooklyn', 40.67861,-73.99019, 1],
			['<strong>Leaky Lifeboat</strong><br/>3603 Merrick Rd.<br/>Seaford, Long Island', 40.79035,-73.20183, 1],
      ['<strong>LIC Bar</strong><br/>45-58 Vernon Blvd.<br/>Long Island City, Queens', 40.747036,-73.952956, 1],           
      ['<strong>Little Town</strong><br/>980 Amsterdam Ave<br/>Upper West Side, Manhattan', 40.802036,-73.964567, 1],           
      ['<strong>Local</strong><br/>39-24 Bell Blvd.<br/>Bayside, Queens', 40.764564,-73.771801, 1],           
      ['<strong>Mars</strong><br/>34-21 34th Ave.<br/>Astoria, Queens', 40.758347,-73.924121, 1],
 			['<strong>Masso</strong><br/>47-25 Vernon Blvd.<br/>Long Island City, Queens', 40.74483,-73.95304, 1],
			['<strong>MexiBBQ</strong><br/>1633 2nd Ave.<br/>Upper East Side, Manhattan', 40.77721,-73.95259, 1],
      ['<strong>MexiBBQ</strong><br/>37-11 30th Ave<br/>Astoria, Queens', 40.76463,-73.915953, 1],
      ['<strong>Molly Wee Pub</strong><br/>402 8th Ave.<br/>Midtown, Manhattan', 40.749667,-73.99495, 1],  
      ['<strong>Mooney&#39;s</strong><br/>82-11 Eliot Ave.<br/>Maspeth, Queens', 40.725958,-73.87719, 1],
      ['<strong>Mosaic</strong><br/>25-19 24th Ave.<br/>Astoria, Queens', 40.774655,-73.918518, 1],  
      ['<strong>MP Taverna</strong><br/>31-29 Ditmars Blvd.<br/>Astoria, Queens', 40.775622,-73.90951, 1],
      ['<strong>The New York Beer Company</strong><br/>321 W 44th Street<br/>Midtown, Manhattan', 40.75905,-73.98987, 1],
			['<strong>Nolita Mart</strong><br/>156 Mott St.<br/>Little Italy, Manhattan', 40.71942,-73.99606, 1],
			['<strong>NoNo Bar</strong><br/>42-23 Bell Blvd.<br/>Bayside, Queens', 40.76203,-73.77008, 1],
			['<strong>Nunu Chocolates</strong><br/>529 Atlantic Ave.<br/>Boerum Hill, Brooklyn', 40.68527,-73.97993, 1],
      ['<strong>O&#39;Neills</strong><br/>6421 53rd Drive<br/>Maspeth, Queens', 40.775622,-73.90951, 1], 
			['<strong>One Last Shag</strong><br/>348 Franklin Ave.<br/>Clinton Hill, Brooklyn', 40.68720,-73.95715, 1],
      ['<strong>Open Door</strong><br/>10-09 50th Ave.<br/>Astoria, Queens', 40.742815,-73.953485, 1],     
			['<strong>Play Sports Bar</strong><br/>2 Sneden Ave.<br/>Woodrow, Staten Island', 40.54041,-74.17711, 1],
			['<strong>Playhouse Martini Lounge</strong><br/>27 W Main St.<br/>Bayshore, Long Island', 40.72120,-73.24769, 1],
      ['<strong>Pour House</strong><br/>21311 41st Ave.<br/>Bayside, Queens', 40.763548,-73.771565, 1],
      ['<strong>Q Kraft Bier</strong><br/>8910 Eliot Ave.<br/>Rego Park, Queens', 40.721834,-73.886034, 1],   
			['<strong>Rest-au-Rant</strong><br/>30-01 30th Ave.<br/>Astoria, Queens', 40.76744,-73.92198, 1],
      ['<strong>Rocky McBrides</strong><br/>27-01 23rd Ave.<br/>Astoria, Queens', 40.776099,-73.914846, 1],   
      ['<strong>Rocky Point Beverage</strong><br/>650 Rt 25A<br/>Rocky Point, Long Island', 40.882474,-73.38643, 1],   
			['<strong>Simply Food LIC</strong><br/>4-85 47th Rd.<br/>Long Island City, Queens', 40.74532,-73.95602, 1],
      ['<strong>Sunswick 35/35</strong><br/>35-02 35th St.<br/>Astoria, Queens', 40.75648,-73.925758, 1],   
      ['<strong>St. James Beverage</strong><br/>530 N Country Rd<br/>St James, Long Island', 40.790327,-73.201738, 1],
      ['<strong>Station House</strong><br/>106-11 71st Ave.<br/>Forest Hills, Queens', 40.719492,-73.845223, 1],
      ['<strong>Stony Brook Beverage</strong><br/>710 Rt 25A<br/>Setauket, Long Island', 40.882474,-73.38643, 1],
      ['<strong>Shillelagh Tavern</strong><br/>47-22 30th Ave.<br/>Astoria, Queens', 40.760983,-73.908825, 1],
      ['<strong>The Shady Lady</strong><br/>34-19 30th Ave.<br/>Astoria, Queens', 40.765619,-73.91814, 1],
			['<strong>Tribeca Tavern</strong><br/>247 West Broadway<br/>TriBeCa, Manhattan', 40.71970,-74.00553, 1],
      ['<strong>TriBoro Beverage</strong><br/>41-08 Astoria Blvd<br/>Astoria, Queens', 40.7684,-73.909678, 1],    
      ['<strong>Tap House</strong><br/>72-07 Austin St.<br/>Forest Hills, Queens', 40.719307,-73.842288, 1],
			['<strong>Upright Citizens Brigade</strong><br/>155 E 3rd St.<br/>Alphabet City, Manhattan', 0,0, 1],
			['<strong>Upstate</strong><br/>95 1st Ave.<br/>Lower East Side, Manhattan', 40.72641,-73.98659, 1],
      ['<strong>Victory Grill</strong><br/>Terminal C, LGA Airport<br/>Flushing, Queens', 40.77392,-73.872002, 1],
      ['<strong>Village Beverage</strong><br/>2051 Wading River Rd<br/>Wading River, Long Island', 40.720383,-73.846048, 1],
      ['<strong>Village Pourhouse</strong><br/>982 Amsterdam Ave.<br/>Upper West Side, Manhattan', 40.80215,-73.96469, 1],
			['<strong>Woodrow&#39;s</strong><br/>43 Murray St.<br/>TriBeCa, Manhattan', 40.71401,-74.00925, 1],
			['<strong>Christos Steak House</strong><br/>4108 23rd Ave.<br/>Astoria, Queens', 40.77040,-73.90724, 1],
			['<strong>Cafe D&#39;Alsace</strong><br/>1695 Second Ave.<br/>Upper East Side, Manhattan', 40.77908,-73.95087, 1],
			['<strong>Cuckoo&#39;s Nest</strong><br/>6104 Woodside Ave.<br/>Woodside, Queens', 40.74460,-73.90352, 1],
			['<strong>Banter Irish Bar</strong><br/>108-22 Queens Blvd.<br/>Forest Hills, Queens', 40.72074,-73.84329, 1],
			['<strong>Trattoria Trecolori</strong><br/>254 W 47th St.<br/>Midtown - West, Manhattan', 40.75990,-73.98609, 1],
			['<strong>Lions Head Tavern</strong><br/>995 Amsterdam Ave.<br/>Upper West Side, Manhattan', 40.80213,-73.96406, 1]
    ];
    
    var iconBase = 'wp-content/themes/queensbrewery/map/icon/index.html';
    
    var infowindow = new google.maps.InfoWindow();

	geocoder = new google.maps.Geocoder();
	
	var latlng = new google.maps.LatLng(40.746325,-73.896403);
	
	var mapOptions = {
		zoom: 13,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var theIcon;
	
	for (i = 0; i < locations.length; i++) {
		
		if(locations[i][3] == 2)
		{
			theIcon = "qb_maps_qrw.html";
		}
		else
		{
			theIcon = "qb_maps.html";
		}
	 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: iconBase + theIcon,
        shadow: iconBase + 'qb_maps.shadow.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}

google.maps.event.addDomListener(window, 'load', initialize);