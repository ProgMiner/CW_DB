package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id

data class Good(
    @Id val id: Int?,
    val name: String,
    val price: Double,
    val type: String
)
