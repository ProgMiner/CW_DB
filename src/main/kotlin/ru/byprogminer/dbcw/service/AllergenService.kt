package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Allergen
import ru.byprogminer.dbcw.repository.AllergenRepository

@Service
@Transactional
class AllergenService(
    private val repository: AllergenRepository
) {

    fun getAllergens(): List<Allergen> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createAllergen(allergen: Allergen): Allergen {
        allergen.id = null

        return repository.save(allergen)
    }
}
