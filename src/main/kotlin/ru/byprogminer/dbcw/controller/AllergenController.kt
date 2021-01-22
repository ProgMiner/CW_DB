package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.Allergen
import ru.byprogminer.dbcw.service.AllergenService

@RestController
@RequestMapping("/api/v1/allergen")
class AllergenController(
    private val service: AllergenService
) {

    @GetMapping
    fun getAllergens(): List<Allergen> = service.getAllergens()

    @PostMapping
    fun createAllergen(@RequestBody allergen: Allergen): Allergen = service.createAllergen(allergen)
}
