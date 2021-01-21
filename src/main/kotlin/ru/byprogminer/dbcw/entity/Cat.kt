package ru.byprogminer.dbcw.entity

import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.MappedCollection
import java.time.LocalDateTime

data class Cat(
    @Id val id: Long?,
    val name: String,

    @MappedCollection(idColumn = "id")
    val breed: CatBreed?,
    val birthday: LocalDateTime?,
    val sex: Sex,
    val color: Int,

    @MappedCollection(idColumn = "id")
    val owner: Client?
) {

    enum class Sex {
        M, F
    }
}
