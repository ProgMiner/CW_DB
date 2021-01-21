package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Cat
import ru.byprogminer.dbcw.repository.CatRepository

@Service
@Transactional
class CatService(
    private val repository: CatRepository
) {

    fun getCats(): List<Cat> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createCat(cat: Cat): Cat = repository.save(cat)
}
