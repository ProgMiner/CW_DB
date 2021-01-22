package ru.byprogminer.dbcw.entity

import javax.persistence.*


@Entity
data class Food(
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "food_id_seq")
    @SequenceGenerator(name = "food_id_seq", sequenceName = "food_id_seq", allocationSize = 1)
    val id: Int?,

    val name: String,

    @OneToOne
    val good: Good?,
) {

    constructor(): this(null, "", null)
}
