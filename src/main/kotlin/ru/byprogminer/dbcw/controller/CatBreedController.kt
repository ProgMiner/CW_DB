package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.CatBreed
import ru.byprogminer.dbcw.service.CatBreedService

@RestController
@RequestMapping("/api/v1/cat/breed")
class CatBreedController(
    private val service: CatBreedService
) {

    @GetMapping
    fun getCatBreeds(): List<CatBreed> = service.getCatBreeds()

    @PostMapping
    fun createCatBreed(@RequestBody breed: CatBreed): CatBreed = service.createCatBreed(breed)
}
