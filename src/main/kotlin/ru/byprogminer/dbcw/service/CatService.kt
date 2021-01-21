package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.simple.SimpleJdbcCall
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Cat
import ru.byprogminer.dbcw.repository.CatRepository

@Service
@Transactional
class CatService(
    private val repository: CatRepository,
    private val jdbcTemplate: JdbcTemplate
) {

    fun getCats(): List<Cat> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createCat(cat: Cat): Cat {
        val id = SimpleJdbcCall(jdbcTemplate).withFunctionName("create_cat")
            .executeFunction(Long::class.java, cat.name, cat.breed?.name, cat.birthday, cat.sex, cat.color)

        return repository.findById(id).get()
    }
}
