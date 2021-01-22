package ru.byprogminer.dbcw.controller

import org.springframework.web.bind.annotation.*
import ru.byprogminer.dbcw.entity.Good
import ru.byprogminer.dbcw.service.GoodService

@RestController
@RequestMapping("/api/v1/good")
class GoodController(
    private val service: GoodService
) {

    @GetMapping
    fun getGoods(): List<Good> = service.getGoods()

    @PostMapping
    fun createGood(@RequestBody good: Good): Good = service.createGood(good)
}
