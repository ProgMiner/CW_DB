package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.simple.SimpleJdbcCall
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Allergen
import ru.byprogminer.dbcw.entity.Cat
import ru.byprogminer.dbcw.repository.AllergenRepository
import ru.byprogminer.dbcw.repository.CatRepository
import ru.byprogminer.dbcw.repository.ClientRepository

@Service
@Transactional
class CatService(
    private val repository: CatRepository,
    private val clientRepository: ClientRepository,
    private val allergenRepository: AllergenRepository,
    private val jdbcTemplate: JdbcTemplate
) {

    fun getCats(): List<Cat> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createCat(cat: Cat): Cat {
        val id = SimpleJdbcCall(jdbcTemplate).withFunctionName("create_cat")
            .executeFunction(Long::class.java, cat.name, cat.breed?.name, cat.birthday, cat.sex, cat.color)

        val owner = cat.owner
        if (owner?.id != null) {
            val newCat = repository.findById(id).get()

            newCat.owner = clientRepository.getOne(owner.id)
            return newCat
        }

        return repository.findById(id).get()
    }

    fun addCatAllergen(catId: Long, allergenId: Int): Cat {
        val cat = repository.findById(catId).get()

        cat.allergens.add(allergenRepository.getOne(allergenId))

        return cat
    }
}
