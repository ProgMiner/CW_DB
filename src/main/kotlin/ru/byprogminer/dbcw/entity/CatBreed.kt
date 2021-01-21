package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id

data class CatBreed(
    @Id val id: Int?,
    val name: String,
    val price: Int = 20000
)
