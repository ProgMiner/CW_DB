package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Good
import ru.byprogminer.dbcw.repository.GoodRepository

@Service
@Transactional
class GoodService(
    private val repository: GoodRepository
) {

    fun getGoods(): List<Good> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createGood(good: Good): Good {
        good.id = null

        return repository.save(good)
    }
}
