package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.MappedCollection

data class Food(
    @Id val id: Int?,
    val name: String,

    @MappedCollection
    val good: Good
    ,
)
