package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.simple.SimpleJdbcCall
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.CatBreed
import ru.byprogminer.dbcw.repository.CatBreedRepository

@Service
@Transactional
class CatBreedService(
    private val repository: CatBreedRepository,
    private val jdbcTemplate: JdbcTemplate
) {

    fun getCatBreeds(): List<CatBreed> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createCatBreed(breed: CatBreed): CatBreed {
        if (breed.price < 0) {
            throw IllegalArgumentException("price cannot be lower than 0")
        }

        val id = SimpleJdbcCall(jdbcTemplate).withFunctionName("create_cat_breed")
            .executeFunction(Int::class.java, breed.name, breed.price)

        return repository.findById(id).get()
    }
}
