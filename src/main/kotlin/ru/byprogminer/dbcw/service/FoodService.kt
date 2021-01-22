package ru.byprogminer.dbcw.service

import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import ru.byprogminer.dbcw.entity.Food
import ru.byprogminer.dbcw.repository.FoodRepository

@Service
@Transactional
class FoodService(
    private val repository: FoodRepository
) {

    fun getFoodList(): List<Food> = repository
        .findAll(Sort.by(Sort.Direction.DESC, "id"))
        .toList()

    fun createFood(food: Food): Food {
        food.id = null

        return repository.save(food)
    }
}
