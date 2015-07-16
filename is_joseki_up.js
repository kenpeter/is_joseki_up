// http://www.2ality.com/2011/12/nodejs-shell-scripting.html

//http://blog.modulus.io/node.js-tutorial-how-to-use-request-module

//Load the request module
var request = require('request');
var build_query = require('./http_build_query');

// http://www.textfixer.com/html/compress-html-compression.php
var the_query = 'PREFIX dc: <http://purl.org/dc/elements/1.1/>PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>PREFIX owl: <http://www.w3.org/2002/07/owl#>PREFIX fn: <http://www.w3.org/2005/xpath-functions#>PREFIX ouext: <http://oracle.com/semtech/jena-adaptor/ext/user-def-function#>PREFIX oext: <http://oracle.com/semtech/jena-adaptor/ext/function#>PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=10,qid=12345,STRICT_DEFAULT=F,GRAPH_MATCH_UNNAMED=T>PREFIX fae: <http://www.findanexpert.unimelb.edu.au/ontology/>PREFIX vitro: <http://vitro.mannlib.cornell.edu/ns/vitro/0.7#>PREFIX vitro-public: <http://vitro.mannlib.cornell.edu/ns/vitro/public#>PREFIX vivo: <http://vivoweb.org/ontology/core#>PREFIX bibo: <http://purl.org/ontology/bibo/>PREFIX foaf: <http://xmlns.com/foaf/0.1/>SELECT ?supervisorWHERE { OPTIONAL { <http://www.findanexpert.unimelb.edu.au/individual/person13376> fae:availableForSupervision ?supervisor. }}';

/* The raw query
var the_query = "
PREFIX dc:    <http://purl.org/dc/elements/1.1/>
PREFIX rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:  <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd:   <http://www.w3.org/2001/XMLSchema#>
PREFIX owl:   <http://www.w3.org/2002/07/owl#>
PREFIX fn:    <http://www.w3.org/2005/xpath-functions#>
PREFIX ouext: <http://oracle.com/semtech/jena-adaptor/ext/user-def-function#>
PREFIX oext:  <http://oracle.com/semtech/jena-adaptor/ext/function#>
PREFIX ORACLE_SEM_FS_NS: <http://oracle.com/semtech#timeout=10,qid=12345,STRICT_DEFAULT=F,GRAPH_MATCH_UNNAMED=T>
PREFIX fae:   <http://www.findanexpert.unimelb.edu.au/ontology/>
PREFIX vitro: <http://vitro.mannlib.cornell.edu/ns/vitro/0.7#>
PREFIX vitro-public: <http://vitro.mannlib.cornell.edu/ns/vitro/public#>
PREFIX vivo:  <http://vivoweb.org/ontology/core#>
PREFIX bibo:  <http://purl.org/ontology/bibo/>
PREFIX foaf:  <http://xmlns.com/foaf/0.1/>

SELECT
  ?supervisor
WHERE {
  OPTIONAL { <http://www.findanexpert.unimelb.edu.au/individual/person13376> fae:availableForSupervision ?supervisor. }
}";
*/


var param = build_query.http_build_query({query: the_query, output: 'json'}, '', '&');
var full_url = 'https://mrw.app.unimelb.edu.au/joseki/oracle?' + param
//console.log(full_url);


request({
  url: full_url, 
  method: 'GET'
}, function(error, response, body){
  if(error) {
    console.log(error);
  } 
  else {
    //console.log(response.statusCode, body);
    if(response.statusCode == 200) {
      console.log('It is up!');
    }
    else {
      console.log('No error, but not sure how to deal with it');
    }
  }
});

