package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id

data class Client(
    @Id val id: Int?,
    val name: String,
    val discount: Double = 0.05
)
