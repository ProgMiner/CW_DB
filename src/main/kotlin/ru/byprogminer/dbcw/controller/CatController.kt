package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.Cat
import ru.byprogminer.dbcw.service.CatService

@RestController
@RequestMapping("/api/v1/cat")
class CatController(
    private val service: CatService
) {

    @GetMapping
    fun getCats(): List<Cat> = service.getCats()

    @PostMapping
    fun createCat(@RequestBody cat: Cat): Cat = service.createCat(cat)
}
