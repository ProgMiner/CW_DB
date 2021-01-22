package ru.byprogminer.dbcw.entity

import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Cat(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cat_id_seq")
    @SequenceGenerator(name = "cat_id_seq", sequenceName = "cat_id_seq", allocationSize = 1)
    val id: Long?,

    var name: String,

    @ManyToOne
    var breed: CatBreed?,

    var birthday: LocalDateTime?,

    @Enumerated(EnumType.STRING)
    var sex: Sex,

    var color: Int,

    @ManyToOne
    var owner: Client?
) {

    constructor(): this(null, "", null, null, Sex.M, 0, null)

    enum class Sex {
        M, F
    }
}
