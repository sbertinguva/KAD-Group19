sgvizler
    .prefix("ex", "http://example.org#")
    .defaultEndpointURL("https://dbpedia.org/sparql")
    .defaultQuery("SELECT ?abstract WHERE { <http://dbpedia.org/resource/Music> rdfs:comment ?abstract FILTER(langMatches(lang(?abstract),\"nl\"))")
    .defaultChartFunction("sgvizler.visualization.Text")
    .defaultChartWidth(500)
    .defaultChartHeight(500);

const genres = ["Jazz", "Heavy_metal_music", "Rock_music", "Blues"]

for (const element of genres){

var Q = new sgvizler.Query();                          

Q.query("PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?abstract WHERE { <http://dbpedia.org/resource/"+element+"> rdfs:comment ?abstract FILTER(langMatches(lang(?abstract),\"nl\"))}")
    .endpointURL("https://dbpedia.org/sparql")
    .endpointOutputFormat("json")                      
    .chartFunction("sgvizler.visualization.Text")      
    .draw(element.toString());
}

var bluesQuery = new sgvizler.Query();                          

bluesQuery.query("PREFIX dct: <http://purl.org/dc/terms/> PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX dbr: <http://dbpedia.org/resource/> PREFIX dbc: <http://dbpedia.org/resource/Category:> PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> select distinct ?songname ?release_date ?abstract where { ?song dbo:genre dbr:Blues. ?song rdf:type dbo:Single. ?song rdfs:label ?songname. ?song dbo:abstract ?abstract. ?song dbo:releaseDate ?release_date. FILTER (langMatches(lang(?abstract),\"en\")) FILTER (langMatches(lang(?songname),\"en\"))} ORDER BY ?release_date LIMIT 20")
    .endpointURL("https://dbpedia.org/sparql")
    .endpointOutputFormat("json")                      
    .chartFunction("google.visualization.Table")      
    .draw("blues_table") 

// Query works in graphDB but not here due to endpoint. We couldn't fix it in a reasonable time:

// Q.query("PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?song WHERE { dbr:Blues ex:has ?song} OFFSET 69 LIMIT 10")
// .endpointURL("http://145.109.16.70:7200/repositories/Music/sparql/") 
// .endpointOutputFormat("json")                      
// .chartFunction("sgvizler.visualization.Text")      
// .draw(element);
// }

var jazzQuery = new sgvizler.Query();                          

    jazzQuery.query("PREFIX dct: <http://purl.org/dc/terms/> PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX dbr: <http://dbpedia.org/resource/> PREFIX dbc: <http://dbpedia.org/resource/Category:> PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> select distinct ?songname ?release_date ?abstract where { ?song dbo:genre dbr:Jazz. ?song rdf:type dbo:Single. ?song rdfs:label ?songname. ?song dbo:abstract ?abstract. ?song dbo:releaseDate ?release_date. FILTER (langMatches(lang(?abstract),\"en\")) FILTER (langMatches(lang(?songname),\"en\"))} ORDER BY ?release_date LIMIT 20")
        .endpointURL("https://dbpedia.org/sparql")
        .endpointOutputFormat("json")                      
        .chartFunction("google.visualization.Table")      
        .draw("jazz_table") 

// Query works in graphDB but not here due to endpoint. We couldn't fix it in a reasonable time:

// Q.query("PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?song WHERE { dbr:Jazz ex:has ?song} OFFSET 69 LIMIT 10")
// .endpointURL("http://145.109.16.70:7200/repositories/Music/sparql/") 
// .endpointOutputFormat("json")                      
// .chartFunction("sgvizler.visualization.Text")      
// .draw(element);
// }



var rockQuery = new sgvizler.Query();                          

        rockQuery.query("PREFIX dct: <http://purl.org/dc/terms/> PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX dbr: <http://dbpedia.org/resource/> PREFIX dbc: <http://dbpedia.org/resource/Category:> PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> select distinct ?songname ?release_date ?abstract where { ?song dbo:genre dbr:Rock_music. ?song rdf:type dbo:Single. ?song rdfs:label ?songname. ?song dbo:abstract ?abstract. ?song dbo:releaseDate ?release_date. FILTER (langMatches(lang(?abstract),\"en\")) FILTER (langMatches(lang(?songname),\"en\"))} ORDER BY ?release_date LIMIT 20")
            .endpointURL("https://dbpedia.org/sparql")
            .endpointOutputFormat("json")                      
            .chartFunction("google.visualization.Table")      
            .draw("rock_table") 

// Query works in graphDB but not here due to endpoint. We couldn't fix it in a reasonable time:

// Q.query("PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?song WHERE { dbr:Rock_music ex:has ?song} OFFSET 69 LIMIT 10")
// .endpointURL("http://145.109.16.70:7200/repositories/Music/sparql/") 
// .endpointOutputFormat("json")                      
// .chartFunction("sgvizler.visualization.Text")      
// .draw(element);
// }


var metalQuery = new sgvizler.Query();                          

            metalQuery.query("PREFIX dct: <http://purl.org/dc/terms/> PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX dbr: <http://dbpedia.org/resource/> PREFIX dbc: <http://dbpedia.org/resource/Category:> PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> select distinct ?songname ?release_date ?abstract where { ?song dbo:genre dbr:Heavy_metal_music. ?song rdf:type dbo:Single. ?song rdfs:label ?songname. ?song dbo:abstract ?abstract. ?song dbo:releaseDate ?release_date. FILTER (langMatches(lang(?abstract),\"en\")) FILTER (langMatches(lang(?songname),\"en\"))} ORDER BY ?release_date LIMIT 20")
                .endpointURL("https://dbpedia.org/sparql")
                .endpointOutputFormat("json")                      
                .chartFunction("google.visualization.Table")      
                .draw("metal_table") 

// Query works in graphDB but not here due to endpoint. We couldn't fix it in a reasonable time:

// Q.query("PREFIX dbo: <http://dbpedia.org/ontology/> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?song WHERE { dbr:Heavy_metal_music ex:has ?song} OFFSET 69 LIMIT 10")
// .endpointURL("http://145.109.16.70:7200/repositories/Music/sparql/") 
// .endpointOutputFormat("json")                      
// .chartFunction("sgvizler.visualization.Text")      
// .draw(element);
// }



