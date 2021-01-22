package ru.byprogminer.dbcw.controller

import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*
import org.springframework.web.server.ResponseStatusException
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
    fun createCatBreed(@RequestBody breed: CatBreed): CatBreed = try {
        service.createCatBreed(breed)
    } catch (e: IllegalArgumentException) {
        throw ResponseStatusException(HttpStatus.BAD_REQUEST, e.message, e)
    }
}
