package com.ccrn.common.spring.hibernate

import groovy.util.logging.Slf4j
import org.apache.lucene.queryparser.classic.ParseException
import org.hibernate.search.elasticsearch.ElasticsearchQueries
import org.hibernate.search.jpa.Search
import org.hibernate.search.jpa.FullTextEntityManager
import org.hibernate.search.query.engine.spi.QueryDescriptor

import javax.persistence.EntityManager
import javax.transaction.Transactional

@Slf4j
class SearchService<T> {

    private final FullTextEntityManager fullTextEntityManager

    SearchService(EntityManager entityManager) {
        fullTextEntityManager = Search.getFullTextEntityManager(entityManager.getEntityManagerFactory().createEntityManager())
        fullTextEntityManager.createIndexer().startAndWait()
    }

    @Transactional
    List<T> fuzzySearchQuery(String term) {
        List<T> searchResults = []
        try {
            QueryDescriptor query = ElasticsearchQueries.fromQueryString(term)
            searchResults = fullTextEntityManager.createFullTextQuery(query, T).getResultList()
        } catch(ParseException e) {
            log.warn """Unable to parser Lucene query term "${term}": ${e.message} """
        }

        searchResults
    }

    @Transactional
    List<T> fuzzySearchJson(String json) {
        List<T> searchResults = []
        try {
            QueryDescriptor query = ElasticsearchQueries.fromJson(json)
            searchResults = fullTextEntityManager.createFullTextQuery(query, T).getResultList()
        } catch(ParseException e) {
            log.warn """Unable to parser Lucene query term "${json}": ${e.message} """
        }

        searchResults
    }
}
