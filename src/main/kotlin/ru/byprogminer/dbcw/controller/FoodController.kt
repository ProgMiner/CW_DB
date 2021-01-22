package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.Food
import ru.byprogminer.dbcw.service.FoodService

@RestController
@RequestMapping("/api/v1/food")
class FoodController(
    private val service: FoodService
) {

    @GetMapping
    fun getFoodList(): List<Food> = service.getFoodList()

    @PostMapping
    fun createFood(@RequestBody food: Food): Food = service.createFood(food)
}
