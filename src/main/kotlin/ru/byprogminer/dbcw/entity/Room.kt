package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id

data class Room(
    @Id val roomNumber: Int?,
    val amountOfPlaces: Int,
    val price: Double
)
